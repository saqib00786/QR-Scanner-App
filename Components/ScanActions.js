import { StyleSheet, Text, View, ToastAndroid, Share } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Avatar } from 'react-native-paper'
import * as Clipboard from 'expo-clipboard';
import { onShare } from '../util/Misc';

const copyToClipBoard = async (text) => {
    await Clipboard.setStringAsync(text)
    ToastAndroid.show(text, ToastAndroid.SHORT)
}



const ScanActions = ({ copiedText, navigation}) => {
    return (
        <View style={styles.bottomView}>
            <Actions
                onPress={() => {
                    navigation.navigate("WebViewScreen", { copiedText: copiedText })
                }}
                icon='web'
            />
            <Actions
                onPress={() => { onShare(copiedText) }}
                icon='share-variant'
            />
            <Actions
                onPress={() => {
                    copyToClipBoard(copiedText)
                }}
                icon='content-copy'
            />
        </View>
    )
}

const Actions = ({ onPress, icon }) => {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
        >
            <Avatar.Icon
                icon={icon}
                color='tomato'
                style={{ backgroundColor: 'transparent' }}
            />
        </TouchableOpacity>
    )
}
export default ScanActions

const styles = StyleSheet.create({
    bottomView: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
    }
})