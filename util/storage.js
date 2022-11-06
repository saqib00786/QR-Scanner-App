import * as FileSystem from 'expo-file-system';
import { StorageAccessFramework } from "expo-file-system";
import { ToastAndroid } from 'react-native'

export const saveFile_LocalStorage = async (data, date) => {
    const fileName = `Text${date}`
    const permissions =
        await StorageAccessFramework.requestDirectoryPermissionsAsync()
    if (!permissions.granted) {
        return;
    }
    try {
        await StorageAccessFramework.createFileAsync(
            permissions.directoryUri,
            fileName + '.txt',
            "application/txt"
        )
            .then(async (uri) => {
                await FileSystem.writeAsStringAsync(uri, `${data}`, {
                    encoding: FileSystem.EncodingType.UTF8
                });
                ToastAndroid.show('File Save Successfully', ToastAndroid.SHORT)
            })
            .catch((e) => {
                ToastAndroid.show(e, ToastAndroid.SHORT)
            });
    } catch (e) {
        throw new Error(e);
    }
}