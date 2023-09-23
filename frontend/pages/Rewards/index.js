import React from 'react'
import { StyleSheet, Text, View, Button, SectionList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Tabs from '../../components/tabs';

export default function Rewards() {
    return (
        <View>

            <View style={styles.container}>
                <View style={styles.points}>
                    <Text >Points:15</Text>
                </View>

                <View style={styles.row}>
                    <View style={styles.box} ><Text style={styles.vouchertxt}>Voucher 1</Text></View>
                    <View style={styles.box} ><Text style={styles.vouchertxt}>Voucher 2</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box} ><Text style={styles.vouchertxt}>Voucher 3</Text></View>
                    <View style={styles.box} ><Text style={styles.vouchertxt}>Voucher 4</Text></View>
                </View>
            </View>
            <Tabs />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        paddingBottom: 335
    },
    row: {
        flexDirection: 'row',
        padding: 10,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#EECDEE',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',



    },
    points: {
        backgroundColor: "#EECDEE",
        paddingLeft: 160,
        paddingRight: 160,
        marginTop: 10


    },
    vouchertxt: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500'
    }
});






