import { Button, StyleSheet, Text, View, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider'
import { Camera, CameraType, FlashMode } from 'expo-camera';
import SideButtons from '../../Components/SideButtons';
import { Avatar } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import DateTime from '../../util/Misc';
import uuid from 'react-native-uuid';

const { height, width } = Dimensions.get('window')


const CodeScanner = (props) => {
    const [permissions, setPermissions] = Camera.useCameraPermissions()
    const [scanned, setScanned] = useState(false)
    const [sound, setSound] = useState()
    const [flash, setFlash] = useState(FlashMode.torch)
    const [zoom, setZoom] = useState(0)
    const isFocused = useIsFocused();

    const date = DateTime()


    const [type, setType] = useState(CameraType.back)
    const Id = uuid.v4().slice(0, 8).toString()
    StatusBar.setHidden(true)

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(require('../../assets/beep.mp3')
        );
        setSound(sound);
        await sound.playAsync();
    }


    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true)
        playSound()
        setTimeout(() => {
            setScanned(false)
            props.navigation.navigate("ScanScreen", { data: data, date, Id })
            console.log("🚀 ~ file: index.js ~ line 42 ~ handleBarCodeScanned ~ context", type, data)
        }, 500)

    }

    if (!permissions || !permissions.granted) {
        return <Text>No access to camera</Text>;
    }

    const onZoomAction = (isIncrement) => {
        if (isIncrement && zoom < 1)
            setZoom(zoom + 0.1)
        else if (zoom < 0.1)
            setZoom(zoom - 0.1)
    }



    return (
        <View style={styles.container}>

            {isFocused &&
                <Camera
                    type={type}
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ flex: 1 }}
                    flashMode={flash}
                    zoom={zoom}
                    ratio='16:9'
                />
            }

            <View style={styles.TopView}>

                <SideButtons
                    onPress={() => {
                        toggleCameraType()
                    }}
                    icon='camera-flip'
                />
                <SideButtons
                    onPress={() => setFlash(
                        (flash === FlashMode.off) && type ?
                            FlashMode.torch :
                            FlashMode.off
                    )}
                    icon={
                        (flash === FlashMode.off) && type ?
                            "flash" :
                            'flash-off'}
                />
                {/* <SideButtons
                    onPress={() => alert("First")}
                    icon='image'
                /> */}

            </View>
            <View style={styles.slider}>
                <TouchableOpacity
                // onPress={() => onZoomAction(true)}
                >
                    <Avatar.Icon
                        size={45}
                        icon='magnify-minus'
                        style={{ backgroundColor: 'transparent' }}
                    />
                </TouchableOpacity>
                <Slider
                    minimumValue={0}
                    maximumValue={1}
                    maximumTrackTintColor="white"
                    minimumTrackTintColor='white'
                    thumbTintColor='white'
                    style={{ width: '100%' }}
                    //value={zoom}
                    onValueChange={(value) => {
                        console.log("🚀 ~ file: index.js ~ line 127 ~ CodeScanner ~ value", value)
                        setZoom(value)
                    }
                    }
                />
                <TouchableOpacity
                    onPress={() => onZoomAction()}
                >
                    <Avatar.Icon
                        size={45}
                        icon='magnify-plus'
                        style={{ backgroundColor: 'transparent' }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default CodeScanner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'yellow'
    },
    scanAgainButton: {
        width: '80%',
        height: 30,
        backgroundColor: 'blue'
    },
    TopView: {
        position: 'absolute',
        // backgroundColor: 'yellow',
        right: 20,
        top: 30
    },
    slider: {
        position: 'absolute',
        bottom: 20,
        margin: 20,
        width: '60%',
        height: 50,
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}) 