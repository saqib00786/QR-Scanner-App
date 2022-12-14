import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Drawer } from 'react-native-paper';
import { GREEN_COLOR, WHITE_COLOR } from '../res/colors';
import { APP_LOGO } from '../res/constants';
import { aboutDevelopers, writeReviewForApp } from '../util/Misc';
import Divider from './Divider';
function CustomDrawer(props) {
    const [active, setActive] = React.useState('');
    return (
        <View style={styles.drawerBg}>
            <Image
                source={APP_LOGO}
                style={styles.appLogo}
            />
            <Drawer.Section title={<Text style={styles.appName}>QR Scanner</Text>} style={styles.section}
            >
                <Drawer.Item
                    icon='magnify'
                    label={<Text style={styles.colorText}>Scan</Text>}
                    onPress={() => {
                        setActive('Scan'),
                            props.navigation.navigate('CodeScanner')
                    }}
                    theme={styles.theme}
                />

                <Divider />

                <Drawer.Item
                    icon='bookmark-outline'
                    label={<Text style={styles.colorText}>Favourite</Text>}
                    onPress={() => {
                        setActive('Favourite'),
                            props.navigation.navigate('Favourite')
                    }}
                    theme={styles.theme}
                />
                <Divider />
                <Drawer.Item
                    icon='history'
                    label={<Text style={styles.colorText}>History</Text>}
                    onPress={() => {
                        setActive('History'),
                            props.navigation.navigate('History')
                    }}
                    theme={styles.theme}
                />
                <Divider />
                <Drawer.Item
                    icon='star-outline'
                    label={<Text style={styles.colorText}>Rate Us</Text>}
                    onPress={() => {
                        setActive('Rate Us'),
                            writeReviewForApp()
                    }}
                    theme={styles.theme}
                />
                <Divider />
                <Drawer.Item
                    icon='file-document'
                    label={<Text style={styles.colorText}>Terms & Conditions</Text>}
                    onPress={() => {
                        setActive('Terms & Conditions'),
                            props.navigation.navigate('TermsAndConditions')
                    }}
                    theme={styles.theme}
                />
                <Divider />
                <Drawer.Item
                    icon='security'
                    label={<Text style={styles.colorText}>Privacy Policy</Text>}
                    onPress={() => {
                        setActive('Privacy Policy'),
                            props.navigation.navigate('PrivacyPolicy')
                    }}
                    theme={styles.theme}
                />
                <Divider />
                <Drawer.Item
                    icon='account-outline'
                    label={<Text style={styles.colorText}>About Developer</Text>}
                    onPress={() => {
                        setActive('History'),
                            aboutDevelopers()
                    }}
                    theme={styles.theme}
                />
            </Drawer.Section>
            <Text style={styles.version}>Version 1.0.0</Text>
        </View>
    );
}

export default CustomDrawer

const styles = StyleSheet.create({
    section: {
        backgroundColor: GREEN_COLOR,
        height: '100%',
    },
    theme: {
        colors: {
            text: WHITE_COLOR,
        },
    },
    item: {
    },
    appName: {
        color: WHITE_COLOR,
        fontWeight: 'bold',
        fontSize: 18
    },
    version: {
        fontWeight: 'bold',
        fontSize: 14,
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        color: WHITE_COLOR
    },
    drawerBg: {
        display: 'flex',
        height: '100%',
    },
    appLogo: {
        width: 120,
        height: 120,
        margin: 20,
        alignSelf: 'center'
    },
    colorText: {
        color: 'rgba(255,255,255,1)'
    }
})