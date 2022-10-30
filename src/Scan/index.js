import { StyleSheet, Text, View, Button, Dimensions, ToastAndroid, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import ScanActions from '../../Components/ScanActions'
import DataCard from '../../Components/DataCard'
import Menu from '../../Components/menu'
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get("window")

const ScanScreen = ({ route, navigation }) => {
    const { params } = route
    const { data, date, Id } = params

    const Obj = {
        data: data,
        date: date,
        isFav: false,
    }

    const Item = JSON.stringify(Obj)
    //console.log("🚀 ~ file: index.js ~ line 21 ~ ScanScreen ~ Item", Item)


    const StoreData = async () => {
        try {
            await AsyncStorage.setItem(Id, Item)
            ToastAndroid.show("Saved...", ToastAndroid.SHORT)
        } catch (e) {
            console.log("🚀 ~ file: index.js ~ line 18 ~ StoreData ~ e", e)
            ToastAndroid.show("Error while saving...", ToastAndroid.SHORT)
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            StoreData()
        });

        return unsubscribe;
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <DataCard
                    data={data}
                    date={date}
                />
                <ScanActions
                    copiedText={data}
                    navigation={navigation}
                />
                <View style={styles.QRCode}>
                    <QRCode
                        size={200}
                        value={data}
                    />
                </View>

                <View style={styles.menu}>
                    <Menu
                        data={data}
                        date={date}
                        id={Id}
                        navigation={navigation}
                    />
                </View>

            </View>
        </ScrollView>
    )
}

export default ScanScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    menu: {
        position: 'absolute',
        width: width,
        height: height,
        right: 0,
        bottom: 0,
    },
    QRCode: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 50
    }

})