import { StyleSheet, View, ScrollView,Text } from 'react-native'
import React, { useEffect } from 'react'
import ScanActions from '../../Components/ScanActions'
import DataCard from '../../Components/DataCard'
import QRCode from 'react-native-qrcode-svg';
import { StoreData } from '../../util/Misc'
import { GREEN_COLOR, WHITE_COLOR } from '../../res/colors';


const ScanScreen = ({ route, navigation }) => {
    const { params } = route
    const { data, date, id } = params

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         StoreData_Local()
    //     });

    //     return unsubscribe;
    // }, [])

    return (
        <View style={styles.container} >
            <ScrollView>
                <DataCard
                    data={data}
                    date={date}
                    id={id}
                    navigation={navigation}
                />

                <View style={styles.headingView}>
                    <Text style={styles.qrCodeHeading}>Scanned QR Code / Bar Code</Text>
                </View>

                <View style={styles.QRCode}>
                    <QRCode
                        size={160}
                        value={data}
                    />
                </View>
                <ScanActions
                    copiedText={data}
                    navigation={navigation}
                />
            </ScrollView>
        </View>
    )
}

export default ScanScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 8,
        backgroundColor : WHITE_COLOR
    },
    QRCode: {
        width: '90%',
        height: 220,
        alignSelf : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop: 10,
        backgroundColor : 'whitesmoke',
        borderBottomEndRadius : 8,
        borderBottomStartRadius : 8
    },
    qrCodeHeading:{
        fontWeight : 'bold',
        fontSize : 18,
        color : WHITE_COLOR,
    },
    headingView:{
        marginEnd : 8,
        marginStart : 8,
        marginTop : 30,
        paddingLeft : 20,
        padding : 8,
        width : '90%',
        alignSelf : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : GREEN_COLOR,
        borderTopEndRadius : 8,
        borderTopStartRadius : 8
       
    }

})