import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import Tabs from '../../components/tabs';
import { Icon } from '@rneui/themed';
import axios from "axios";


export default function Reminder() {
    const navigation = useNavigation();
    const [reminder, setReminder] = useState([])

    useEffect(() => {

        //receive reminders from backend
        async function receive() {

            await axios.get('http://192.168.1.93:3006/receiveReminders', {
                responseType: "json",
            })
                .then((res) => {
                    console.log(res.data)
                    setReminder(res.data)

                })
                .catch((err) => { console.log(err) })
        }
        receive();

    }, [])


    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.addTaskbtn} onPress={() => {
                    navigation.navigate("AddReminder");
                }}>
                    <Text style={styles.btnText}>+ Add Reminder</Text>
                </TouchableOpacity>

                <View style={styles.heading}>
                    <Text style={styles.headingtxt}>Your upcoming reminders</Text>
                </View>
                <View style={styles.reminder}>
                    {/* cast the reminders to the screen */}
                    {reminder.map((item, index) => (
                        <View key={index} style={styles.rem}>
                            <Text style={styles.remindertxt} key={index}>{item.reminder}</Text>
                            <Text style={styles.datetxt}>{item.date}</Text>
                        </View>
                    ))}
                </View>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',


    },
    addTaskbtn: {
        backgroundColor: '#B035B0',
        borderRadius: 20,
        padding: 17,
        margin: 12,

        justifyContent: 'center',
        alignItems: 'center'




    },


    remindertxt: {
        fontSize: 20,
        backgroundColor: '#F1E9F1',
        marginTop: 5,
        alignSelf: 'center',




    },
    btnText: {
        color: 'white'
    },
    heading: {
        backgroundColor: '#E3D9E3',
        alignItems: 'center'
    },
    headingtxt: {
        fontSize: 18,
        fontWeight: '400'
    },
    datetxt: {
        fontSize: 13,
        color: '#AAA6AA',
        backgroundColor: '#F1E9F1',
        paddingLeft: 165,
        marginBottom: 5
    }
})