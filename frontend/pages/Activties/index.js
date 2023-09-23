import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import Tabs from '../../components/tabs';


export default function Activites() {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.texts}>
                <TouchableOpacity onPress={() => { navigation.navigate('Events') }}>
                    <Text style={styles.text}>SIM Sociology Club</Text>
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
        marginBottom: 625,
        borderRadius: 5,




    },
    text: {
        fontSize: 20,
        margin: 10
    }
})