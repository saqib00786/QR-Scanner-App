import React, { useState } from 'react'
import { StyleSheet, Text, View, ToastAndroid, Share, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DateTime() {

    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
    var sec = new Date().toLocaleString()
    console.log("🚀 ~ file: Misc.js ~ line 8 ~ DateTime ~ sec", sec)


    return `${sec}`
    //return `${time}  ${date}`
}

export const onShare = async (content) => {
    const result = await Share.share({
        message: content
    })
    if (result.action === Share.sharedAction) {
        if (result.activityType) {
            // shared with activity type of result.activityType
        } else {
            // shared
        }
    } else if (result.action === Share.dismissedAction) {
        // dismissed
    }
}

export const onFavourite = async (id) => {
    await AsyncStorage.getItem(id).then(async obj => {
        obj = JSON.parse(obj)

        if (obj.isFav) {
            obj.isFav = false
            ToastAndroid.show("Remove Favourite Marked", ToastAndroid.SHORT)
        } else {
            obj.isFav = true
            ToastAndroid.show("Favourite Marked", ToastAndroid.SHORT)
        }

        await AsyncStorage.setItem(id, JSON.stringify(obj))
    })
}

export const onRemoveItem = async (id, navigation = '') => {
    Alert.alert(
        'Delete',
        'You Want To Delete The Item?',
        [
            {
                text: "No",
                style: 'cancel',
                onPress: () => {
                    console.log("Cancel")
                }
            },
            {
                text: "Yes",
                style: 'default',
                onPress: async () => {
                    try {
                        await AsyncStorage.removeItem(id)
                        navigation.goBack()
                    } catch (e) {
                        console.log("🚀 ~ file: menu.js ~ line 56 ~ onPress: ~ e", e)
                    }
                }
            },

        ]
    )
}

export const readData = async () => {
    const keys = await AsyncStorage.getAllKeys()
    const result = await AsyncStorage.multiGet(keys)
    return result
    setRefreshing(false)
  }