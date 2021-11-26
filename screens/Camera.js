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

export default function checkCamera() {
    const [valueStatus, setValueStatus] = useState('');
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const [deviceinfo, setDeviceinfo] = useState({});
    const [fillCircle, setFillCircle] = useState(0);
    const [image, setimage] = useState('');
    const ref = useRef(null)


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === valueStatus);
        })();
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log(status)
                console.log('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log(JSON.stringify(location))
            let IP = await Network.getNetworkStateAsync();
            console.log(IP);
            publicIP();
        })();
        console.log(Device.brand + " " + Device.modelName + Device.modelId)
        console.log(Device.osName)
        console.log(Device.osVersion)
        console.log(Device.deviceName)
    }, [valueStatus]);

    const handleFacesDetected = ({ faces }) => {
        if (faces.length > 0) {
            setFillCircle(fillCircle + 10)
            takePhoto();
            console.log("đợi hiếu làm!")
            if (fillCircle === 100) {
                alert("Xong rồi!")
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
        return <Button title="lên Cam Bờ râu" onPress={() => setValueStatus('granted')} />;
    }

    const takePhoto = async () => {
        if (ref.current) {
            const options = { quality: 0.7, base64: true };
            const data = await ref.current.takePictureAsync(options);
            const source = data.base64;
            setimage(source);
        }
    }

    return (
        <View style={styles.container}>
            {/* <Image
                style={{ width: '50%', height: '50%' }}
                source={{ uri: "data:image/image/png;base64,"+image }} /> */}
            <Camera style={styles.camera} type={type} ref={ref}
                onFacesDetected={handleFacesDetected}
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
                    <AnimatedCircularProgress
                        size={400}
                        width={7}
                        fill={fillCircle}
                        tintColor="#00e0ff"
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#3d5875" />
                </View>
            </Camera>
        </View>
    );
}



publicIP()
    .then(ip => {
        if (ip === '1.53.169.221') {
            console.log("úm ba la:" + ip);
        } else {
            console.log("Bị puồi")
        }
        // '47.122.71.234'
    })
    .catch(error => {
        console.log(error);
        // 'Unable to get IP address.'
    });

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