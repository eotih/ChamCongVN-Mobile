import React, { useState, useEffect, useRef } from "react";
import { View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Button, Card, Title, Paragraph, Text, IconButton } from 'react-native-paper';
import AbsentApplications from '../../components/ApplicationManagement/AbsentApplications';
import OvertimeApplications from '../../components/ApplicationManagement/OverTimeApplications';

const { width, height } = Dimensions.get('window');
function ApplicationManagement() {
    const [active, setActive] = useState(1);
    return (
        <>
       <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.options}>
                    <TouchableOpacity style={[(active == 1) ? styles.tabSelected : styles.notSelected, styles.divider]} onPress={() => { setActive(1) }}>
                        <Text size={16} style={styles.tabTitle}>Đơn xin nghỉ phép</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[(active == 2) ? styles.tabSelected : styles.notSelected, styles.divider]} onPress={() => { setActive(2) }} >
                        <View style={{flexDirection: 'row'}} middle>
                            <Text size={16} style={styles.tabTitle}>Đơn tăng ca</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {active === 1 ? <AbsentApplications /> : <OvertimeApplications />}
            </ScrollView>
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
        fontWeight: '400',
        color: "white",
        textAlign: 'center',
    },
    divider: {
        borderRightWidth: 0.3,
        borderRightColor: 'black',
    },
});
export default ApplicationManagement;