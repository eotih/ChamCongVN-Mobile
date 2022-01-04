import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity, Button, Modal, Text } from "react-native";
import AbsentApplications from "../../components/Applications/AbsentApplications";
import OvertimeApplications from "../../components/Applications/OverTimeApplications";

const { width } = Dimensions.get('screen');
function Application() {
    const [active, setActive] = useState(1);
   

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View row style={styles.options}>
                    <TouchableOpacity style={[(active == 1) ? styles.tabSelected : styles.notSelected, styles.divider]} onPress={() => { setActive(1) }}>
                        <Text size={22} style={styles.tabTitle}>Đơn xin nghỉ phép</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[(active == 2) ? styles.tabSelected : styles.notSelected, styles.divider]} onPress={() => { setActive(2) }} >
                        <View row middle>
                            <Text size={22} style={styles.tabTitle}>Đơn tăng ca</Text>
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
        backgroundColor: "#004dcf",
        width: width * 0.4,
        borderRadius: 10,
        height: 30,
        elevation: 0,
        alignItems: 'center'
    },
    notSelected: {
        backgroundColor: "#FFCC00",
        width: width * 0.4,
        borderRadius: 10,
        height: 30,
        elevation: 0,
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
export default Application;