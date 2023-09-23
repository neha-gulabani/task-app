import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class TimerHeader extends React.Component {

    // handles the display of statements above timer
    handleStatements = () => {
        if (this.props.interval === "Working") {
            if (this.props.run === true) {
                return "Keep working hard!"
            }
            else {
                return "Time to work!"
            }
        }
        else {
            if (this.props.run === true) {
                return "It's break time! Enjoy"
            }
            else {
                return "Relax :)"
            }
        }

    }
    render() {

        let texttoshow = this.handleStatements()
        return (
            <Text style={styles.textStyle}>{texttoshow}</Text>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        fontWeight: "500",
        letterSpacing: 1.5,
        fontFamily: Platform.OS == "android" ? "notoserif" : "system",
        marginTop: 40,
        padding: 20
    }
});

export default TimerHeader;