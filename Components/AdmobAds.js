import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const AdmobAds = ({ id, bannerSize }) => {
    return (
        <View>
            <BannerAd
                unitId={id}
                size={bannerSize}
            />
        </View>
    )
}

export default AdmobAds

const styles = StyleSheet.create({})