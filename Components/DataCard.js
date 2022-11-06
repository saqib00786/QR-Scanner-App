import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GREEN_COLOR } from '../res/colors'
import { Avatar } from 'react-native-paper'
import { onRemoveItem } from '../util/Misc'
import { saveFile_LocalStorage } from '../util/storage'

const DataCard = ({ data, date, id, navigation }) => {
    return (
        <View style={styles.ScanedData}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.PCodeStyle}>{data}</Text>
            </ScrollView>
            <View style={styles.dateSty}>
                <Text style={styles.dateWrapper}>{date}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity
                    onPress={() => {
                        saveFile_LocalStorage(data, date)
                    }}
                >
                    <Avatar.Icon
                        icon={'content-save'}
                        size={50}
                        color={GREEN_COLOR}
                        style={{ backgroundColor: 'transparent' }}
                    />
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => {
                        onRemoveItem(id, navigation)
                    }}
                >
                    <Avatar.Icon
                        icon={'delete'}
                        size={50}
                        color={'tomato'}
                        style={{ backgroundColor: 'transparent' }}
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default DataCard

const styles = StyleSheet.create({
    ScanedData: {
        width: '95%',
        backgroundColor: 'whitesmoke',
        minHeight: 150,
        maxHeight: 350,
        margin: 10,
        padding: 12,
        borderRadius: 8,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    PCodeStyle: {
        fontSize: 22,
        fontWeight: '400',
        margin: 8,
        marginBottom: 8
    },
    dateSty: {
        position: 'absolute',
        right: 12,
        top: 4

    },
    dateWrapper: {
        fontWeight: '400',
        fontSize: 14,
    },
    scrollView: {
        marginTop: 12,
        marginBottom: 4
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        height: 35
    }

})