import * as FileSystem from 'expo-file-system';
import { StorageAccessFramework } from "expo-file-system";
import Toast from 'react-native-root-toast';

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
                Toast.show("File Saved Sucessfully", { duration: Toast.durations.SHORT })
            })
            .catch((e) => {
                Toast.show(e, { duration: Toast.durations.SHORT })
            });
    } catch (e) {
        throw new Error(e);
    }
}