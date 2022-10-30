import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

import React from 'react'
import { Avatar } from 'react-native-paper'

const SideButtons = ({ icon, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Avatar.Icon
                size={50}
                icon={icon}
                style={{ backgroundColor: 'transparent' }}
            />
        </TouchableOpacity>
    )
}

export default SideButtons

const styles = StyleSheet.create({})