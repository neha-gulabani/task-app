import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Tabs from '../../components/tabs';
export default function Settings() {
    return (
        <View>
            <View style={styles.settings}>
                <TouchableOpacity style={styles.texts} >
                    <Text style={styles.text}>Notifications</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.texts} >
                    <Text style={styles.text}>Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.texts} >
                    <Text style={styles.text}>Privacy and Security</Text>
                </TouchableOpacity>
            </View>
            <Tabs />

        </View>
    )
}

const styles = StyleSheet.create({
    texts: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E7E4E7',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 7,



    },
    text: {
        fontSize: 20,
        margin: 10
    },
    settings: {
        paddingBottom: 485
    }
})