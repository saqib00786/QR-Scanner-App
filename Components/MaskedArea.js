import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GREEN_COLOR } from '../res/colors'
const { height, width } = Dimensions.get('window')

const MaskedArea = () => {
    return (
        <View style={styles.maskedView}>
            <View style={styles.topRight}{...styles.box}></View>
            <View style={styles.topLeft}{...styles.box}></View>
            <View style={styles.bottomRight}{...styles.box}></View>
            <View style={styles.bottomLeft}{...styles.box}></View>
        </View>
    )
}

export default MaskedArea

const styles = StyleSheet.create({
    maskedView: {
        height: height / 3,
        width: width / 1.2,
        marginBottom: 20,
        borderWidth: .5,
        borderColor: 'whitesmoke'
    },
    box: {
        width: 20,
        height: 20,
    },
    topRight: {
        borderTopColor: 'tomato',
        borderTopWidth: 5,
        borderLeftColor: 'tomato',
        borderLeftWidth: 5,
    },
    topLeft: {
        position: 'absolute',
        alignSelf: 'flex-end',
        borderTopColor: 'tomato',
        borderTopWidth: 5,
        borderRightColor: 'tomato',
        borderRightWidth: 5,
    },
    bottomRight: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 0,
        borderBottomColor: 'tomato',
        borderBottomWidth: 5,
        borderRightColor: 'tomato',
        borderRightWidth: 5,
    },
    bottomLeft: {
        position: 'absolute',
        alignSelf: 'flex-start',
        bottom: 0,
        borderBottomColor: 'tomato',
        borderBottomWidth: 5,
        borderLeftColor: 'tomato',
        borderLeftWidth: 5,
    }
})