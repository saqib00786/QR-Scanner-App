import { StyleSheet, View, BackHandler, Platform, Text } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { WebView } from 'react-native-webview';
import { Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WHITE_COLOR, GREEN_COLOR } from '../../res/colors';



const WebViewScreen = ({ route, navigation }) => {
    const { params } = route
    const { copiedText } = params

    const [goBack, setGoBack] = useState('')
    const [goForward, setGoForward] = useState('')
    const [currentUrl, setCurrentUrl] = useState('')


    const webRef = useRef(null)

    const BackButtonHandler = () => {
        if (webRef.current) {
            webRef.current.goBack()
            return true
        }
        return false
    }

    const ForwardButtonHandler = () => {
        if (webRef.current) {
            webRef.current.goForward()
        }
    }

    useEffect(() => {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', BackButtonHandler);

            return () => {
                BackHandler.removeEventListener('hardwareBackPress', BackButtonHandler);
                // navigation.goBack()
            }
        }
    }, []);

    const onBackAction = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    onPress={() => onBackAction()}
                >
                    <Avatar.Icon
                        size={50}
                        icon={'keyboard-backspace'}
                        color={WHITE_COLOR}
                        style={{ backgroundColor: 'transparent' }}
                    />
                </TouchableOpacity>
                <Text style={styles.qrScannerTextWrapper}> QR Scanner </Text>
            </View>
            <WebView
                ref={webRef}
                style={styles.container}
                source={{ uri: `https://www.google.com/search?q=${copiedText}` }}
                onNavigationStateChange={navStat => {
                    setGoBack(navStat.canGoBack)
                    setGoForward(navStat.canGoForward)
                    setCurrentUrl(navStat.url)
                }}
            />
        </View>
    )
}

export default WebViewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBar: {
        elevation: 5,
        width: '100%',
        height: 60,
        backgroundColor: GREEN_COLOR,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    qrScannerTextWrapper: {
        fontSize : 18,
        fontWeight : '700',
        color : WHITE_COLOR,
    }
})