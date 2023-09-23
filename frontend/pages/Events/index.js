import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Events = () => {
    return (
        <View>
            <View style={styles.texts}>
                <Text style={styles.text}>Sociology Talk 101</Text>
            </View>
        </View>
    )
}

export default Events

const styles = StyleSheet.create({
    texts: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E7E4E7',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5

    },
    text: {
        fontSize: 20,
        margin: 10
    }
})