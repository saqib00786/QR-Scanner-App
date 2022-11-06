import { Share, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-root-toast';
import { Audio } from 'expo-av';

export function DateTime() {
    return new Date().toLocaleString()
}

export const onShare = async (content) => {
    await Share.share({
        message: content
    })
}

export const onFavourite = async (id, cb = null) => {
    await AsyncStorage.getItem(id).then(async obj => {
        obj = JSON.parse(obj)

        if (obj.isFav) {
            obj.isFav = false
            if (typeof (cb) == 'function') {
                cb(false)
            }
            Toast.show("Remove Favourite Marked", { duration: Toast.durations.SHORT })
        } else {
            obj.isFav = true
            if (typeof (cb) == 'function') {
                cb(true)
            }
            Toast.show("Favourite Marked", { duration: Toast.durations.SHORT })
        }

        await AsyncStorage.setItem(id, JSON.stringify(obj))
    })
}

export const onRemoveItem = async (id, cb = null) => {
    Alert.alert(
        'Delete',
        'You want to delete the item?',
        [
            {
                text: "No",
                style: 'cancel',
                onPress: () => {
                    //do nothing
                }
            },
            {
                text: "Yes",
                style: 'default',
                onPress: async () => {
                    try {
                        await AsyncStorage.removeItem(id);
                        if (typeof (cb) == 'function') {
                            cb(true);
                        }
                        Toast.show("ٰItem Deleted Successfully", { duration: Toast.durations.SHORT })
                        // navigation && navigation.goBack()
                    } catch (e) {
                        Toast.show(e, { duration: Toast.durations.SHORT })
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
}

export const StoreData = async (id, Obj) => {
    try {
        await AsyncStorage.setItem(id, JSON.stringify(Obj))
        Toast.show("Data Saved Successfully", { duration: Toast.durations.SHORT })
    } catch (e) {
        Toast.show(e, { duration: Toast.durations.SHORT })
    }
}


export async function playSound() {
    const { sound } = await Audio.Sound.createAsync(require('../assets/beep.mp3')
    );
    await sound.playAsync();
}