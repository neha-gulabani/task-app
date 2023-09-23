import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import TimerHeader from './TimerHeader'
import TimerDisplay from './TimerDisplay'
import TimerButtons from './TimerButtons'
import { Vibration } from 'react-native'

class Timer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            run: false,
            time: this.props.period * 60
        }
    }

    // gets called when a stream of new props arrive from parent component
    componentWillReceiveProps(nextProps) {
        this.setState({ run: false, time: nextProps.period * 60 });
        if (this.state.run === true && this.state.time == 0) {
            this.handleStart()
        }
    }

    render() {
        return (
            <View>
                <TimerHeader
                    run={this.state.run}
                    interval={this.props.interval}
                />
                <TimerDisplay
                    time={this.state.time}
                />
                <TimerButtons
                    playing={this.handleStart}
                    pausing={this.handlePausing}
                    resetting={this.handleResetting}
                    run={this.state.run}
                />
            </View>
        )
    }

    // Invoked immediately after update occurs
    componentDidUpdate() {
        if (this.state.run === true && this.state.time == 0) {
            clearInterval(this.timerId)
            Vibration.vibrate([500, 500, 500])
            this.props.Oncomplete()

        }
        else if (this.state.run === false) {
            clearInterval(this.timerId)
        }
    }

    // gets triggered when Play button is pressed
    handleStart = () => {
        this.setState({
            run: true
        })
        this.timerId = setInterval(() => {
            this.setState({
                time: this.state.time - 1
            })
        }, 1000)
    }

    //gets triggered when Pause button is pressed
    handlePausing = () => {
        clearInterval(this.timerId)
        this.setState({
            run: false
        })
    }

    // gets triggered when Reset button is pressed
    handleResetting = () => {
        clearInterval(this.timerId)
        this.setState({
            run: false,
            time: this.props.period * 60
        })
    }
}

export default Timer;

const styles = StyleSheet.create({
    textStyle: {
        color: "#C2362B",
        fontSize: 25,
        fontWeight: "500",
        letterSpacing: 1.5,
        fontFamily: Platform.OS == "android" ? "notoserif" : "system",
        marginTop: 40,
        padding: 20
    }
});
