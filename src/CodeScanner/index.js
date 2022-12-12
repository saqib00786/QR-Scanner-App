import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Slider from '@react-native-community/slider'
import { Camera, CameraType, FlashMode } from 'expo-camera';
import SideButtons from '../../Components/SideButtons';
import { Avatar } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import { DateTime, playSound, StoreData } from '../../util/Misc';
import LottieAnimatedView from '../../Components/LottieAnimatedView'
import uuid from 'react-native-uuid';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import MaskedArea from '../../Components/MaskedArea';
import AdmobAds from '../../Components/AdmobAds';

const CodeScanner = ({ navigation }) => {
    const [permissions, setPermissions] = Camera.useCameraPermissions()
    const [scanned, setScanned] = useState(false)
    const [flash, setFlash] = useState(FlashMode.off)
    const [zoom, setZoom] = useState(0)
    const isFocused = useIsFocused();

    const date = DateTime()
    const id = uuid.v4().slice(0, 8).toString()


    const [type, setType] = useState(CameraType.back)
    StatusBar.setHidden(true)

    const Obj = {
        date,
        isFav: false,
        id
    }

    const StoreData_Local = async (id, Obj) => {
        await StoreData(id, Obj)
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }


    useEffect(() => {
        getPermissions()
    }, [])



    const getPermissions = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setPermissions(status === 'granted')
    }



    const handleBarCodeScanned = ({ data }) => {
        setScanned(true)
        playSound()
        setTimeout(() => {
            setScanned(false)
            const newObj = { ...Obj, data }
            StoreData_Local(id, newObj)
            navigation.navigate("ScanScreen", { data, date, id })
        }, 500)

    }

    if (!permissions || !permissions.granted) {
        return <LottieAnimatedView
            source={require("../../assets/camera.json")}
        />
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
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    flashMode={flash}
                    zoom={zoom}
                    ratio='16:9'
                >
                    <MaskedArea />
                </Camera>
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

            </View>
            <View style={styles.slider}>
                <View style={{
                    width: '80%',
                    height: 50,
                    alignSelf: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>

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
                <View>
                    <AdmobAds
                    id={TestIds.BANNER}
                    bannerSize={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                    />
                </View>
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
        bottom : 0
    },
}) 