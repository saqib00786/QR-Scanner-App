import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Drawer } from 'react-native-paper';

function CustomDrawer(props) {
    const [active, setActive] = React.useState('');
    return (
        <Drawer.Section title="QR Scanner" style={styles.section}>
            <Drawer.Item
                icon='magnify'
                label="Scan"
                active={active === 'Scan'}
                onPress={() => {
                    setActive('Scan'),
                        props.navigation.navigate('CodeScanner')
                }}
            />
            {/*  <Drawer.Item
            icon='image'
            label="Scan Image"
            active={active === 'Scan Image'}
            onPress={() => {
                setActive('Scan Image'),
                    props.navigation.navigate('CreateScreen')
            }
            }
        /> */}
            <Drawer.Item
                icon='star'
                label="Favourite"
                active={active === 'Favourite'}
                onPress={() => {
                    setActive('Favourite'),
                        props.navigation.navigate('Favourite')
                }}
            />
            <Drawer.Item
                icon='history'
                label="History"
                active={active === 'History'}
                onPress={() => {
                    setActive('History'),
                        props.navigation.navigate('History')
                }}
            />
            { /* <Drawer.Item
                icon='share'
                label="Share"
                active={active === 'Share'}
                onPress={() => {
                    setActive('Share'),
                    props.navigation.navigate('CreateScreen')
                }}
            /> */}
        </Drawer.Section>
    );
}

export default CustomDrawer

const styles = StyleSheet.create({
    section: {
        marginTop: 30,
        backgroundColor: 'whitesmoke',
    }
})