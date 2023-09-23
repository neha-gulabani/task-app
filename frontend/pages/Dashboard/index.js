import React from 'react'
import { StyleSheet, Text, View, Button, SectionList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Tabs from '../../components/tabs';
import { RadioButton } from 'react-native-paper';
import { useEffect, useState } from 'react';
import axios from "axios";






export default function Dashboard() {
    let tasks = [];

    const [task, setTask] = useState([])
    const [checked, setChecked] = React.useState('todo');
    const navigation = useNavigation();



    useEffect(() => {

        async function receive() {
            //receiving tasks from backend
            await axios.get('http://192.168.1.93:3006/receiveTasks', {
                responseType: "json",
            })
                .then((res) => {
                    setTask(res.data)
                })
                .catch((err) => { console.log(err) })
        }
        receive();


    }, [])

    const deleteTask = async (tasks) => {
        //deletion of task
        await axios.delete(`http://192.168.1.93:3006/${tasks}`, { tasks })
            .then(res => {

                console.log(res.data);
                const taskIndex = task.findIndex((item) => item.task === tasks);

                if (taskIndex !== -1) {
                    // Create a copy of the state array
                    const updatedTasks = [...task];
                    // Use splice to remove the task at the specified index
                    updatedTasks.splice(taskIndex, 1);
                    // Update the state with the new array
                    setTask(updatedTasks);
                }
            })
            .catch((err) => { console.log(err) })
    }

    const handleRadioButton = (checked, index, status) => {
        const t = { ...checked };

        t[index] = status;
        setChecked(t)
    }



    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.addTaskbtn} onPress={() => {
                    navigation.navigate("Addtask");
                }}>
                    <Text style={styles.btnText}>+ Add Task</Text>
                </TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.titletxt}>To do list</Text>
                </View>
                <View style={styles.heading}>
                    <Text style={styles.heading1}>Your tasks</Text>
                    <View style={styles.heading2}>
                        <Text style={styles.headingtxt}>Todo</Text>
                        <Text style={styles.headingtxt}>Ongoing</Text>
                        <Text style={styles.headingtxt}>Completed</Text>
                    </View>
                </View>




                <View>

                    {
                        task.map((item, index) => (
                            <View style={styles.task} key={index}>
                                <View style={styles.texts}>
                                    <Text style={styles.itemtxt} key={index}>{item.task}</Text>
                                    <Text style={styles.details}>Details: {item.details}</Text>
                                </View>
                                <TouchableOpacity style={styles.deletebtn} onPress={() => deleteTask(item.task)} >
                                    <Text style={styles.btnText}>Delete</Text>
                                </TouchableOpacity>
                                <View style={styles.radiobtns}>
                                    <View style={styles.radiobtn}>

                                        <RadioButton
                                            id="todo"
                                            value="todo"
                                            status={checked[index] === "todo" ? 'checked' : 'unchecked'}
                                            onPress={() => {

                                                handleRadioButton(checked, index, 'todo')


                                            }}
                                        />
                                    </View>
                                    <View style={styles.radiobtn}>
                                        <RadioButton
                                            id="ongoing"
                                            value="ongoing"
                                            status={checked[index] === 'ongoing' ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                handleRadioButton(checked, index, 'ongoing')
                                            }}
                                        />
                                    </View>
                                    <View style={styles.radiobtn}>
                                        <RadioButton
                                            id="completed"
                                            value="completed"
                                            status={checked[index] === 'completed' ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                handleRadioButton(checked, index, 'completed')
                                            }}
                                        />
                                    </View>
                                </View>

                            </View>

                        ))}

                </View>

            </View>


            <Tabs />



        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,



    },
    addTaskbtn: {
        backgroundColor: '#B035B0',
        borderRadius: 20,
        padding: 17,
        margin: 12,

        justifyContent: 'center',
        alignItems: 'center'




    },
    deletebtn: {
        backgroundColor: '#B035B0',
        padding: 3,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 24,
        marginTop: 3
    },

    heading: {
        backgroundColor: 'white',
        flexDirection: 'row'


    },
    heading1: {
        paddingHorizontal: '2%'
    },
    heading2: {
        paddingLeft: '20%',
        flexDirection: 'row'

    },
    headingtxt: {
        paddingLeft: '5%',

    },
    task: {
        flexDirection: 'row'
    },
    btnText: {
        color: 'white',
    },
    radiobtns: {
        paddingLeft: '2%',
        flexDirection: 'row'
    },
    radiobtn: {
        paddingLeft: '10%'
    },
    title: {
        backgroundColor: '#B035B0',
        justifyContent: 'center',
        alignItems: 'center',

    },
    titletxt: {

        fontSize: 20,
        fontWeight: 'bold'
    },
    item: {
        backgroundColor: '#E2D2E2',
        paddingLeft: '10%'


    },
    itemtxt: {
        fontSize: 20,
        paddingHorizontal: 10
    },
    texts: {
        flexDirection: 'column'
    },
    details: {
        marginLeft: 10
    }

})