import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import CodeScanner from '../CodeScanner'
import ScanScreen from '../Scan'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '../../Components/CustomDrawer'
import History from '../History'
import Favourite from '../Favourite'
import WebViewScreen from '../WebView'
import { GREEN_COLOR, WHITE_COLOR } from '../../res/colors'
import TermsAndConditions from '../TermsAndCond'
import PrivacyPolicy from '../PrivacyPolicy'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                useLegacyImplementation
                drawerContent={(props) => <CustomDrawer {...props} />}
                screenOptions={{
                    drawerStyle: {
                        width: "60%",
                    },
                }}
            //initialRouteName='ScanScreen'
            >
                <Stack.Screen
                    name='CodeScanner'
                    component={CodeScanner}
                    options={{ title: "Scan", headerStyle: { backgroundColor: GREEN_COLOR }, headerTintColor: WHITE_COLOR }}
                //headerTransparent: true,headerTintColor : '#fff'
                />
                <Stack.Screen
                    name='ScanScreen'
                    component={ScanScreen}
                    options={{ title: "Data", headerStyle: { backgroundColor: GREEN_COLOR }, headerTintColor: WHITE_COLOR }}
                />
                <Stack.Screen
                    name='History'
                    component={History}
                    options={{ title: "History", headerStyle: { backgroundColor: GREEN_COLOR }, headerTintColor: WHITE_COLOR }}

                />
                <Stack.Screen
                    name='Favourite'
                    component={Favourite}
                    options={{ title: "Favourite", headerStyle: { backgroundColor: GREEN_COLOR }, headerTintColor: WHITE_COLOR }}
                />
                <Stack.Screen
                    name='WebViewScreen'
                    component={WebViewScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='TermsAndConditions'
                    component={TermsAndConditions}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='PrivacyPolicy'
                    component={PrivacyPolicy}
                    options={{ headerShown: false }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Navigation