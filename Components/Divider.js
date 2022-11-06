import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WHITE_COLOR } from '../res/colors'

const Divider = () => {
    return (
        <View style={styles.Divider}>
        </View>
    )
}

export default Divider

const styles = StyleSheet.create({
    Divider: {
        height : .5,
        width : '100%',
        backgroundColor : 'rgba(255,255,255,0.2)',
        marginTop : 3,
        marginBottom : 3,
        borderRadius : 100,
        alignSelf : 'center'
    }
})