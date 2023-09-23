import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from "axios";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import moment from 'moment';

export default function AddReminder() {
    const navigation = useNavigation();
    const [reminder, setReminder] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async () => {
        // Create an object with the reminder data
        const reminderData = {
            reminder: reminder,
            date: date
        };


        if (reminderData != null) {
            //navigate to home page
            navigation.navigate("Home")
            //format date correctly
            let dates = moment(date.toString()).format('YYYY-MM-DD')


            // Send the reminder data to the backend
            await axios.post('http://192.168.1.93:3006/reminders', { reminder, dates }, {
                headers: {
                    'Content-Type': 'application/json',

                },
            })
                .then(response => {

                    // // Reset the form inputs
                    setReminder('');
                    setDate('');


                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else { console.log('reminderData is null') }
    };
    return (
        <View style={styles.container}>


            <TextInput
                style={styles.input}
                placeholder="Enter reminder or deadline"
                status={reminder}
                onChangeText={text => setReminder(text)}
            />




            <TextInput
                style={styles.input}
                type="date"
                placeholder="YYYY-MM-DD"
                status={date}
                onChangeText={(text) => {
                    setDate(text);

                }}
            />


            <TouchableOpacity style={styles.submitbtn}
                onPress={handleSubmit}
            >
                <Text style={styles.submitbtntxt}>Submit</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        // borderWidth: 1,
        // borderRadius: 4,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 20
    },

    submitbtn: {
        backgroundColor: '#B035B0',
        borderRadius: 20,
        padding: 17,
        margin: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitbtntxt: {
        color: 'white'
    }

})