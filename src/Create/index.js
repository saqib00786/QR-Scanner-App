import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CreateScreen = (props) => {
    return (
        <View style={styles.container}>
            <Button
                title='Press'
                onPress={() => props.navigation.navigate("ScanScreen")}
            />
        </View>
    )
}

export default CreateScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})