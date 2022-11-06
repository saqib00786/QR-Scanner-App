import { Button, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'

const { height, width } = Dimensions.get("window")
const LottieAnimatedView = ({ source, AllowAccess }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <AnimatedLottieView
                source={source}
                autoPlay
                loop
                style={{ width: 300, height: 300 }}
            />

            {/* <Button
                title='Allow Access Camera'
                onPress={() => AllowAccess()}
            /> */}
        </View>
    )
}

export default LottieAnimatedView

const styles = StyleSheet.create({})