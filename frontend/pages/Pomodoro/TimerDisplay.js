import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TimerDisplay extends React.Component {


    // displays the timer
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    {Math.floor(this.props.time / 60).toString().padStart(2, "0") + ":" +
                        (this.props.time % 60).toString().padStart(2, "0")}
                </Text>
            </View>
        )
    }
}

export default TimerDisplay;

const styles = StyleSheet.create({
    container: {
        marginTop: "7%",
        marginBottom: "10%",
        marginLeft: "7%",
        marginRight: "7%",
        padding: "20%",
        borderColor: "#E3C0E8",
        borderRadius: 80,
        borderWidth: 5,
        alignItems: 'center',
        backgroundColor: "#E3C0E8",
    },
    textStyle: {
        color: "black",
        fontSize: 50,
        fontWeight: "400",
    }
})