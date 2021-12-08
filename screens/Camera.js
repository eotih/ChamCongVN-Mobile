import React, { useState, useEffect, useRef } from 'react';
import {
    Button,
    Dimensions,
    ActivityIndicator,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    View
} from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';
import * as Network from 'expo-network';
import publicIP from 'react-native-public-ip';
import * as FaceDetector from 'expo-face-detector';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaskedView from "@react-native-community/masked-view"
import axios from 'axios';
import { Card } from 'galio-framework';


export default function checkCamera() {
    const [valueStatus, setValueStatus] = useState('');
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const [deviceInfo, setDeviceInfo] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [IP, setPublicIP] = useState('');
    const [name, setName] = useState('');
    const [fillCircle, setFillCircle] = useState(0);
    const [image, setImage] = useState('');
    const ref = useRef(null)

    useEffect(() => {
        getPermissionCameraAsync();
        getPermissionLocationAsync();
        getPublicIP();
        getDeviceInfo();
        getLocationInfo();
        setLoading(true);
    }, [valueStatus]);

    const getPermissionLocationAsync = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }
    };
    const getPermissionCameraAsync = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === valueStatus);
    };
    const getDeviceInfo = () => {
        setDeviceInfo(Device.modelName);
    }
    const getLocationInfo = async () => {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setLatitude(latitude);
        setLongitude(longitude);
    }
    const getPublicIP = async () => {
        publicIP()
            .then(ip => {
                setPublicIP(ip)
            })
            .catch(error => {
                console.log(error);
                // 'Unable to get IP address.'
            });
    }
    const takePhoto = async () => {
        if (ref.current) {
            const options = { quality: 0.7, base64: true };
            const data = await ref.current.takePictureAsync(options);
            const source = data.base64;
            setImage(source);
            const response = {
                Latitude: latitude,
                Longitude: longitude,
                PublicIP: IP,
                Device: deviceInfo,
                Image: source,
            };
            goToTheMoon(response);
        }
    }
    const goToTheMoon = async (object) => {
        const res = await axios.post('http://192.168.1.7:45455/HandleSendToPython', object, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const { name, base64 } = res.data;
        { name ? setModalVisible(true) : setModalVisible(false) }
        { name ? setLoading(true) : setLoading(false) }
        setName(name);
    }
    const handleFacesDetected = ({ faces }) => {
        if (faces.length !== 1) {
            return;
        }
        const face = faces[0];
        // Check if face in circle setFillCircle(fillCircle + 10)
        const { bounds } = face;
        const { origin, size } = bounds;
        const { x, y, width, height } = origin;
        const { width: faceWidth, height: faceHeight } = size;
        const centerX = x + faceWidth / 2;
        const centerY = y + faceHeight / 2;
        const radius = Dimensions.get("window").width / 2;
        const isInCircle = (centerX - radius) ** 2 + (centerY - radius) ** 2 < radius ** 2;
        if (isInCircle) {
            setFillCircle(fillCircle + 10)
            if (fillCircle < 10) {
                takePhoto();
            }
            if (fillCircle > 100) {
                setLoading(false);
            }
        }
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Button title="Click vào đây để bật máy ảnh" onPress={() => setValueStatus('granted')} />;
    }

    if (!loading) {
        return (
            // set loading in center of screen
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={require('../assets/imgs/logo.png')} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Loading...</Text>
            </View>
        );
    }
    return (
        <SafeAreaView style={StyleSheet.absoluteFill}>
            <MaskedView
                style={StyleSheet.absoluteFill}
                maskElement={<View style={styles.mask} />}
            >
                <Camera
                    style={StyleSheet.absoluteFill}
                    ref={ref}
                    type={Camera.Constants.Type.front}
                    onFacesDetected={handleFacesDetected}
                    faceDetectorSettings={{
                        mode: FaceDetector.Constants.Mode.fast, // ignore faces in the background
                        detectLandmarks: FaceDetector.Constants.Landmarks.none,
                        runClassifications: FaceDetector.Constants.Classifications.all,
                        minDetectionInterval: 125,
                        tracking: false
                    }}
                >
                    <AnimatedCircularProgress
                        style={styles.circularProgress}
                        fill={fillCircle}
                        size={PREVIEW_SIZE}
                        width={10}
                        backgroundWidth={7}
                        tintColor="#fea621"
                        backgroundColor="#e8e8e8"
                    />
                </Camera>
            </MaskedView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.instructionsContainer}>
                    <Card
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#ffebcf',
                            borderRadius: 20,
                            padding: 10,
                            margin: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <View style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#ffebcf',
                            borderRadius: 10,
                            padding: 10,
                            margin: 10,
                            alignItems: 'center',
                        }}>

                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Thông tin nhân viên</Text>
                            <Text style={styles.text}>{name}</Text>
                            <Text style={styles.text}>Nhân viên</Text>
                            <Text style={styles.text}>Mã nhân viên: 123456789</Text>
                            <Text style={styles.text}>Mã nhân viên: 123456789</Text>
                            <TouchableOpacity
                                style={{
                                    width: '100%',
                                    height: 50,
                                    backgroundColor: '#fea621',
                                    borderRadius: 10,
                                    marginTop: 70,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                }}
                            >
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Xác nhận</Text>
                            </TouchableOpacity>

                        </View>
                    </Card>

                </View>
            </Modal>
        </SafeAreaView>
    );
}

const { width: windowWidth } = Dimensions.get("window")
const PREVIEW_SIZE = windowWidth * 0.9
const PREVIEW_RECT = {
    minX: (windowWidth - PREVIEW_SIZE) / 2,
    minY: (windowWidth - PREVIEW_SIZE) / 2,
    maxX: (windowWidth + PREVIEW_SIZE) / 2,
    maxY: (windowWidth + PREVIEW_SIZE) / 2,
    width: PREVIEW_SIZE,
    height: PREVIEW_SIZE
}
const styles = StyleSheet.create({
    mask: {
        borderRadius: PREVIEW_SIZE / 2,
        height: PREVIEW_SIZE,
        width: PREVIEW_SIZE,
        marginTop: PREVIEW_RECT.minY,
        alignSelf: "center",
        backgroundColor: "white"
    },
    circularProgress: {
        position: "absolute",
        top: PREVIEW_RECT.minY,
        left: PREVIEW_RECT.minX,
        width: PREVIEW_SIZE,
        height: PREVIEW_SIZE,
        alignSelf: "center"
    },
    instructionsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: PREVIEW_RECT.minY + PREVIEW_SIZE
    },
    image: {
        width: PREVIEW_SIZE,
        height: PREVIEW_SIZE,
        marginTop: PREVIEW_RECT.minY,
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#333333",
        marginBottom: 5,
    },

})