import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Tabs from '../../components/tabs';
import { Icon } from '@rneui/themed';


export default function Home() {
    const navigation = useNavigation();
    return (

        <View style={styles.container}>


            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    //navigate to Dashboard page
                    navigation.navigate("Dashboard");
                }}>
                    <Icon name="dashboard" type="material" />
                    <Text style={styles.buttonText}>Dashboard</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    //navigate to Reminder page
                    navigation.navigate("Reminder")
                }}>
                    <Icon name="reminder" type="material-community" />
                    <Text style={styles.buttonText}>Reminder</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    //navigate to Calendar page
                    navigation.navigate("Calendar");
                }}>
                    <Icon name="calendar" type="font-awesome" />
                    <Text style={styles.buttonText}>Calendar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer} >
                <TouchableOpacity style={styles.button} onPress={() => {
                    //navigate to Activities page
                    navigation.navigate("Activites")
                }}>
                    <Icon name="local-activity" type="material" />
                    <Text style={styles.buttonText}>Activities</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    //navigate to Rewards page
                    navigation.navigate("Rewards")
                }}>
                    <Icon name="star" type="font-awesome" />
                    <Text style={styles.buttonText}>Rewards</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    //navigate to Pomodoro page
                    navigation.navigate("Pomodoro")
                }}>
                    <Icon name="timer" type="material" />
                    <Text style={styles.buttonText}>Pomodoro</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.motive}>
                <Text style={styles.motiveText}>"Do not plan for ventures before finishing what's at hand"~Euripedes</Text>
            </View>
            <Tabs />
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 75,

    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#E3D9E3'
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    motive: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10

    },
    motiveText: {
        fontSize: 15,
        color: 'grey'
    }
});