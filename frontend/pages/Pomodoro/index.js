import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Timer from './Timer'
import { useState } from 'react';

const Pomodoro = () => {

    const [work, setWork] = useState(25)
    const [breakTime, setBreak] = useState(5)
    const [interval, setinterval] = useState("Working")




    // handles completion of timer
    const handleTimeComplete = () => {
        if (interval === "Working") {
            setinterval(
                "Break"
            )
        }
        else {
            setinterval(
                "Working"
            )
        }
    }

    // gets triggered on change of work timer text
    const handleWork = (text) => {
        if (text >= 0) {

            setWork(text)
        }
        else {


            setWork(25)
        }
    }

    // gets triggered on change of break timer text
    const handleBreak = (text) => {
        if (text >= 0) {

            setBreak(text)
        }
        else {


            setBreak(5)
        }
    }

    // called to set the timer's time
    const handleTime = () => {
        if (interval === "Working") {
            console.log(work)
            return work
        }
        else {
            return breakTime
        }
    }




    return (
        <View>
            {/* Work time input */}
            <View style={styles.row}>
                <View style={styles.inputWrap}>
                    <Text style={styles.textStyle}>Work Time</Text>
                    <TextInput style={styles.textStyle} keyboardType={"numeric"} defaultValue={'' + work} placeholder="work in mins" onChangeText={handleWork} />
                </View>
                {/* break time input */}
                <View style={styles.inputWrap}>
                    <Text style={styles.textStyle}>Break Time</Text>
                    <TextInput style={styles.textStyle} keyboardType={"numeric"} defaultValue={'' + breakTime} placeholder="breakTime in mins" onChangeText={handleBreak} />
                </View>
            </View>
            {/* Timer */}
            <Timer
                interval={interval}
                Oncomplete={handleTimeComplete}
                period={handleTime()}
            />
        </View>
    )

}
export default Pomodoro;

const styles = StyleSheet.create({
    row: {

        flexDirection: 'row',




    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        borderBottomWidth: 1,
        marginBottom: 20

    },
    textStyle: {
        fontSize: 25,
        fontWeight: "500",
        letterSpacing: 1.5,
        color: 'black',
        fontFamily: Platform.OS == "android" ? "notoserif" : "system",
        marginTop: 5,
        padding: 12,

    }
});