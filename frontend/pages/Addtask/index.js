import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import axios from "axios";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../Home/index'
// import Settings from '../Settings/index';
// import { Icon } from '@rneui/themed';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation, NavigationContainer } from "@react-navigation/native";



export default function Addtask() {
    const navigation = useNavigation();

    // const [isFocus, setIsFocus] = useState(false);

    const [task, setTask] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = async () => {
        // Create an object with the task data
        const taskData = {
            task: task,
            details: details,
        };


        if (taskData != null) {

            // Send the task data to the backend
            await axios.post('http://192.168.1.93:3006/', { task, details }, {
                headers: {
                    'Content-Type': 'application/json',

                },
            })
                .then(response => {
                    // Handle the response from the backend
                    // // Reset the form inputs
                    setTask('');
                    setDetails('');
                    navigation.navigate("Home")
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else { console.log('taskData is null') }
    };
    return (

        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter task"
                status={task}
                onChangeText={text => setTask(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter details"
                status={details}
                onChangeText={text => setDetails(text)}
            />
            <TouchableOpacity style={styles.submitbtn} onPress={handleSubmit}>
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
    inputdropdown: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
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
});