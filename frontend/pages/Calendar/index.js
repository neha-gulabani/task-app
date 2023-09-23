import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Agenda, DateData } from 'react-native-calendars'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Alert } from 'react-native'
import { useEffect } from 'react'
import axios from "axios";

const data1 = [
    {
        name: 'Task1',
        date: '2017-05-16',

    }
]

// type Item={
//     name:string
// };


export default function Calendar() {
    const [items, setItems] = useState({})

    useEffect(() => {
        async function receive() {

            //receiving reminders or events from backend
            await axios.get('http://192.168.1.93:3006/receiveReminders', {
                responseType: "json",
            })
                .then((res) => {

                    console.log(res.data)
                    const reduced = res.data.reduce((acc = [], currentItem) => {

                        acc[currentItem.date] = [{ name: currentItem.reminder }]
                        return acc;
                    }, {})

                    setItems(reduced)

                })
                .catch((err) => { console.log(err) })
        }
        receive();
    })


    // const loadItems = (day) => {
    //     const items = items || {};


    //     setTimeout(() => {




    //         for (let i = -15; i < 85; i++) {
    //             const time = day.timestamp + i * 24 * 60 * 60 * 1000;
    //             const strTime = timeToString(time);

    //             if (!items[strTime]) {
    //                 items[strTime] = [];

    //                 const numItems = Math.floor(Math.random() * 3 + 1);
    //                 console.log(numItems)
    //                 for (let j = 0; j < numItems; j++) {

    //                     items[data1[j].date].push({
    //                         name: 'Item for ' + data1[j].date + ' #' + j,
    //                         height: Math.max(50, Math.floor(Math.random() * 150)),
    //                         day: data1[j].date
    //                     });
    //                 }
    //             }
    //         }


    //         const newItems = {};
    //         Object.keys(items).forEach(key => {
    //             newItems[key] = items[key];
    //         });
    //         setItems(newItems);
    //     }, 1000)
    // };


    const renderEmptyDate = () => {
        return (
            <View style={styles.emptyDate}>
                <Text>This is empty date!</Text>
            </View>
        );
    };


    const renderItem = (item) => {


        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.name}</Text>

            </View>

        )





    };








    // const timeToString = (time) => {
    //     const date = new Date(time);
    //     return date.toISOString().split('T')[0];
    // }

    return (

        <View style={{ justifyContent: 'center', flex: 1 }}>





            <Agenda
                style={{ height: 600 }}
                items={items}
                // loadItemsForMonth={loadItems}
                selected={'2023-08-10'}
                renderItem={renderItem}


                renderEmptyData={renderEmptyDate}



            />
        </View>


    );


}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    itemContainer: {
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,


    },
    itemText: {
        color: 'black'

    },
    addTaskbtn: {
        backgroundColor: '#B035B0',
        borderRadius: 20,
        padding: 17,
        margin: 12,

        justifyContent: 'center',
        alignItems: 'center'




    },
    btnText: {
        color: 'white'
    },
    emptyDate: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 140
    }
})



