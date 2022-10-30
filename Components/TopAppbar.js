import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';

const TopAppbar = () => {
    return (
        <Appbar.Header>
            <Aar.BackAction onPress={() => { }} />
            <Appbar.Content title="" />
            <Appbar.Action icon="calendar" onPress={() => { }} />
            <Appbar.Action icon="magnify" onPress={() => { }} />
        </Appbar.Header>
    )
}

export default TopAppbar

const styles = StyleSheet.create({})