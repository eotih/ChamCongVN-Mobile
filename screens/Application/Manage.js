import React, { useState, useEffect, useContext } from "react";
import { View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Button, Card, Title, Paragraph, Text, IconButton } from 'react-native-paper';
import AbsentApplications from '../../components/ApplicationManagement/AbsentApplications';
import OvertimeApplications from '../../components/ApplicationManagement/OverTimeApplications';
import { getAbsentApplication, getOverTimeApplication } from '../../functions/Application';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";

const { width, height } = Dimensions.get('window');
function ApplicationManagement() {
    const [active, setActive] = useState(1);
    const [overtimeData, setovertimeData] = useState([]);
    const [absentData, setAbsentData] = useState([]);
    useEffect(() => {
        const jsonValue = AsyncStorage.getItem('token', (err, result) => {
            const decoded = jwtDecode(result);
            const EmployeeID = decoded.nameid[2];
            getAbsentApplication(EmployeeID).then(result => setAbsentData(result));
            getOverTimeApplication(EmployeeID).then(result => setovertimeData(result));
        })
    }, []);
    return (
        <>
            <View>
                <View style={styles.options}>
                    <TouchableOpacity style={[(active == 1) ? styles.tabSelected : styles.notSelected, styles.divider]} onPress={() => { setActive(1) }}>
                        <Text style={styles.tabTitle}>Absent Application</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[(active == 2) ? styles.tabSelected : styles.notSelected, styles.divider]} onPress={() => { setActive(2) }} >
                        <View style={{ flexDirection: 'row' }} middle>
                            <Text style={styles.tabTitle}>Overtime Application</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {active === 1 ? <AbsentApplications data={absentData} /> : <OvertimeApplications data={overtimeData} />}
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    options: {
        marginBottom: 10,
        marginTop: 20,
        elevation: 4,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    tabSelected: {
        backgroundColor: "#ff7100",
        width: width * 0.4,
        borderRadius: 10,
        height: 30,
        elevation: 0,
        alignItems: 'center'
    },
    notSelected: {
        backgroundColor: "#adc965",
        width: width * 0.4,
        borderRadius: 10,
        height: 30,
        elevation: 0,
        alignItems: 'center'
    },
    tabTitle: {
        fontWeight: 'bold',
        color: "white",
        textAlign: 'center',
        fontSize: 14,
    },
    divider: {
        borderRightWidth: 0.3,
        borderRightColor: 'black',
    },
});
export default ApplicationManagement;