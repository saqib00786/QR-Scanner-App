import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Avatar } from 'react-native-paper'
import { onShare } from '../util/Misc'

const HistoryCard = ({ data, date, onRemoveItem, onShare, onFavourite, isFav, id, navigation }) => {

    return (
        <View style={styles.container}>

            <TouchableOpacity
                activeOpacity={0.1}
                onPress={() => { navigation.navigate("ScanScreen", { data, date, id }) }}
                style={styles.ScanedData}>
                <Text style={styles.PCodeStyle}>{data}</Text>
                <View style={styles.dateSty}>
                    <Text style={styles.dateWrapper}>{date}</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.bottomView}>
                <BottomActions
                    onPress={onFavourite}
                    icon={isFav ? 'star' : 'star-outline'}
                    color={'orange'}
                />
                <BottomActions
                    onPress={onShare}
                    icon={'share-variant'}
                    color={'gray'}
                />
                <BottomActions
                    onPress={onRemoveItem}
                    icon={'delete'}
                    color={'gray'}
                />
            </View>
        </View>
    )
}

const BottomActions = ({ onPress, icon, color }) => {
    return (
        <View style={styles.actions}>
            <TouchableOpacity
                onPress={() => onPress()}
            >
                <Avatar.Icon
                    size={40}
                    color={color}
                    style={{ backgroundColor: 'transparent' }}
                    icon={icon}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HistoryCard

const styles = StyleSheet.create({
    container: {
        minHeight: 160,
        maxheight: 180,
        width: '95%',
        alignSelf: 'center',
        marginLeft: 20,
        marginRight: 20,
        margin: 8,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ScanedData: {
        width: '100%',
        backgroundColor: '#fff',
        minHeight: 110,
        maxHeight: 130,
        //margin: 10,
        padding: 20,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        alignSelf: 'center',
    },
    PCodeStyle: {
        fontSize: 16,
        fontWeight: '600',
    },
    dateSty: {
        position: 'absolute',
        right: 12,
        bottom: 4
    },
    dateWrapper: {
        fontWeight: '400',
        fontSize: 14
    },
    actionDel: {
    },
    bottomView: {
        height: 50,
        backgroundColor: 'white',
        width: '100%',
        alignSelf: 'center',
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8,
        flex: 3,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'lightgray'
    },
    actions: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})