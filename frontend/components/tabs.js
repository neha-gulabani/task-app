import React from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from '@rneui/themed';


const BottomNav = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.home}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                    hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
                >
                    <Icon name="home" type="entypo" style={styles.icon} />
                    <Text style={styles.text}>Home</Text>


                </TouchableOpacity>
            </View>


            <View style={styles.settings}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Settings");
                    }}
                >
                    <Icon name="setting" type="antdesign" style={styles.icon} />
                    <Text style={styles.text}>Settings</Text>


                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BottomNav;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "8%",
        backgroundColor: "#EECDEE",
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
    },
    icon: {
        paddingTop: 10,
    },
    text: {
        paddingLeft: 76,

    },

    settings: {
        flex: 1,
        width: '50%',
    },


    home: {
        flex: 1,
        width: '50%',
    },
});