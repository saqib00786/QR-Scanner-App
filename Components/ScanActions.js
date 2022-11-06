import { StyleSheet, Text, View, ToastAndroid, Share } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Avatar } from 'react-native-paper'
import * as Clipboard from 'expo-clipboard';
import { onShare } from '../util/Misc';
import { WHITE_COLOR } from '../res/colors';

const copyToClipBoard = async (text) => {
    await Clipboard.setStringAsync(text)
    ToastAndroid.show(text, ToastAndroid.SHORT)
}



const ScanActions = ({ copiedText, navigation }) => {
    return (
        <View style={styles.bottomView}>
            <Actions
                onPress={() => {
                    navigation.navigate("WebViewScreen", { copiedText: copiedText })
                }}
                icon='web'
                text={'Search On Web'}
            />
            <Actions
                onPress={() => { onShare(copiedText) }}
                icon='share-variant'
                text={'Share on Social Media'}
            />
            <Actions
                onPress={() => {
                    copyToClipBoard(copiedText)
                }}
                icon='content-copy'
                text={'Copy Scanned Data'}
            />
        </View>
    )
}

const Actions = ({ onPress, icon, text }) => {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={styles.ActionButton}
        >
            <View style={styles.iconStyle}>
                <Avatar.Icon
                    icon={icon}
                    size={40}
                    color={'tomato'}
                    style={{ backgroundColor: 'transparent' }}
                />
            </View>
            <View style={styles.textwrapperView}>
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
export default ScanActions

const styles = StyleSheet.create({
    bottomView: {
        alignSelf: 'center',
        display: 'flex',
        margin: 8,
        marginTop: 20,
        padding: 4,
        width: '100%'

    },
    ActionButton: {
        backgroundColor: 'tomato',
        margin: 4,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 100,
        padding: 4,
        display: 'flex',
        flexDirection: 'row'
    },
    textwrapperView: {
        flex: .8, 
        justifyContent : 'center',
        alignItems : 'center'
    },
    iconStyle: {
        height: 50,
        width: 50,
        backgroundColor: WHITE_COLOR,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flex: .2
    },
    buttonText: {
        fontWeight : 'bold',
        fontSize : 14,
        color : WHITE_COLOR,
        marginRight : 40
    }
})