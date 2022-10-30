import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DataCard = ({ data, date }) => {
    return (
        <View style={styles.ScanedData}>
            <Text style={styles.PCodeStyle}>{data}</Text>
            <View style={styles.dateSty}>
            <Text style={styles.dateWrapper}>{date}</Text>
            </View>
        </View>
    )
}

export default DataCard

const styles = StyleSheet.create({
    ScanedData: {
        width: '95%',
        backgroundColor: 'whitesmoke',
        minHeight : 80,
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
        fontWeight: 'bold',
    },
    dateSty:{
        position : 'absolute',
        right : 12,
        bottom : 4
    },
    dateWrapper :{
        fontWeight : '400',
        fontSize : 14
    }

})