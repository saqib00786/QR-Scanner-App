import { Alert, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { FAB, Portal, Provider } from 'react-native-paper'
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { copyAsync, downloadAsync, StorageAccessFramework } from "expo-file-system";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onRemoveItem } from '../util/Misc';

const Menu = ({ data, date, id, navigation }) => {
    const [state, setState] = useState({ open: false })
    const onStateChange = ({ open }) => setState({ open })

    const { open } = state
    const fileName = `Text${date}`

    const saveFile = async () => {
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


    return (
        <FAB.Group
            open={open}
            icon={open ? "close" : 'plus'}
            actions={[
                {
                    icon: 'delete',
                    label: 'Delete',
                    onPress: () => { onRemoveItem(id, navigation) },
                },
                {
                    icon: 'content-save',
                    label: 'Save Text',
                    onPress: () => { saveFile() },
                },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
                if (open) {

                }
            }}
        />
    )
}

export default Menu

const styles = StyleSheet.create({})