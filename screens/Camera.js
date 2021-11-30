import React, { useState, useEffect, useRef } from 'react';
import {
    Button,
    Dimensions,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View
} from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';
import * as Network from 'expo-network';
import publicIP from 'react-native-public-ip';
import * as FaceDetector from 'expo-face-detector';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import axios from 'axios';


export default function checkCamera() {
    const [valueStatus, setValueStatus] = useState('');
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const [deviceInfo, setDeviceInfo] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [IP, setPublicIP] = useState('');
    const [fillCircle, setFillCircle] = useState(0);
    const [image, setImage] = useState('');
    const ref = useRef(null)

    useEffect(() => {
        getPermissionCameraAsync();
        getPermissionLocationAsync();
        getPublicIP();
        getDeviceInfo();
        getLocationInfo();
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
            goToTheMoon(source);
            console.log("----------------------------------------  LOADING ----------------------------------------  ")
        }
    }
    const goToTheMoon = async (object) => {
        const res = await axios.post('http://localhost:11111/HandleSendToPython', object, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const { name, base64 } = res.data;
        console.log("Nhân viên : " + name);
        console.log("----------------------------------------  DONE ----------------------------------------  ")
    }
    const handleFacesDetected = ({ faces }) => {
        if (faces.length > 0) {
            setFillCircle(fillCircle + 20)
            if (fillCircle === 100) {
                const response = {
                    Latitude: latitude,
                    Longitude: longitude,
                    PublicIP: IP,
                    Device: deviceInfo,
                    Image: image,
                };
                goToTheMoon(response);
                // alert("Xong rồi!")
                setFillCircle(fillCircle - 100)
                setValueStatus('');
            }
        }
        // console.log(faces);
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Button title="Click vào đây để bật máy ảnh" onPress={() => setValueStatus('granted')} />;
    }

    return (
        <View style={styles.container}>
            {/* <Image
                style={{ width: '50%', height: '50%' }}
                source={{ uri: "data:image/image/png;base64," + image }} /> */}
            <Camera style={styles.camera} type={type} ref={ref}
                // onFacesDetected={handleFacesDetected}
                faceDetectorSettings={{
                    mode: FaceDetector.FaceDetectorMode.accurate,
                    detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                    runClassifications: FaceDetector.FaceDetectorClassifications.all,
                    minDetectionInterval: 300,
                    tracking: true,
                }}
            >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.front
                                    ? Camera.Constants.Type.back
                                    : Camera.Constants.Type.front
                            );
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            takePhoto();
                        }}>
                        <Text style={styles.text}> Capture </Text>
                    </TouchableOpacity>
                    {/* <AnimatedCircularProgress
                        size={400}
                        width={7}
                        fill={fillCircle}
                        tintColor="#00e0ff"
                        // onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#3d5875" /> */}
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});