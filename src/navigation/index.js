import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import CodeScanner from '../CodeScanner'
import ScanScreen from '../Scan'
import CreateScreen from '../Create'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '../../Components/CustomDrawer'
import History from '../History'
import Favourite from '../Favourite'
import WebViewScreen from '../WebView'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                useLegacyImplementation
                drawerContent={(props) => <CustomDrawer {...props} />}
                screenOptions={{
                    drawerStyle: { width: "60%" }
                }}
            //initialRouteName='ScanScreen'
            >
                <Stack.Screen
                    name='CodeScanner'
                    component={CodeScanner}
                    options={{ headerShown: true, title: "Scan" }}
                //headerTransparent: true,headerTintColor : '#fff'
                />
                <Stack.Screen
                    name='ScanScreen'
                    component={ScanScreen}
                //options={{ headerShown: false }}
                />
                { /* <Stack.Screen
                    name='CreateScreen'
                    component={CreateScreen}
                //options={{ headerShown: false }}
                /> */}
                <Stack.Screen
                    name='History'
                    component={History}
                //options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Favourite'
                    component={Favourite}
                //options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='WebViewScreen'
                    component={WebViewScreen}
                    options={{ headerShown: false }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Navigation