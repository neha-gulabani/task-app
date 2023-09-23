import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class TimerButtons extends React.Component {
    state = {};

    //renders pause, playing and reset buttons
    render() {
        if (this.props.run === true) {
            return (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.props.pausing}>
                        <Text style={styles.buttonText}>Pause</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.props.resetting}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.props.playing}>
                        <Text style={styles.buttonText}>Play</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {

        flexDirection: "row",
        marginLeft: 20,
        justifyContent: 'space-evenly',
        marginBottom: 20
    },
    buttonStyle: {
        alignItems: "center",
        backgroundColor: "#E3C0E8",
        padding: 30,
        flexDirection: "row",
        borderRadius: 80,
    },
    buttonText: {
        color: "black",
        fontSize: 20,
        fontWeight: "500",
    }
})

export default TimerButtons