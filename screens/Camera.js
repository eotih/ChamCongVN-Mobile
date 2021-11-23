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
import { Camera } from 'expo-camera';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
export default function checkCamera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [valueStatus, setvalueStatus] = useState('');
    const ref = useRef(null)


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === valueStatus);
        })();
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