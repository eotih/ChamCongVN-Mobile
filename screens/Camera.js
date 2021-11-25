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
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
export default function checkCamera() {
    const [valueStatus, setvalueStatus] = useState('');
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [deviceinfo, setDeviceinfo] = useState({});
    const ref = useRef(null)


    useEffect(() => {
        (async () => {
            // const { status } = await Camera.requestPermissionsAsync();
            // setHasPermission(status === valueStatus);
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

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Button title="lên Cam Bờ râu" onPress={() => setvalueStatus('granted')} />;
    }



    const takePhoto = async () => {
        const photo = await ref.current.takePictureAsync()
        console.log(photo)
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={ref}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => { takePhoto() }}
                    >
                        <Text style={styles.text}> Snap </Text>
                    </TouchableOpacity>
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