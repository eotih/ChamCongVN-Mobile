import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity, Button, Modal, } from "react-native";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import DonxinNP from "../../components/DonxinNP";
import { IconButton, Colors } from 'react-native-paper';
import Overtime from '../../components/OvertimeForm';

const { width } = Dimensions.get('screen');
function Application() {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Block row style={styles.options}>
                    <TouchableOpacity style={[styles.tab, styles.divider]}  >
                        <Text size={16} style={styles.tabTitle}>Đơn xin nghỉ phép</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tab, styles.divider]} >
                        <Block row middle>
                            <Text size={16} style={styles.tabTitle}>Đơn tăng ca</Text>
                        </Block>
                    </TouchableOpacity>
                </Block>
                <DonxinNP />
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    options: {
        marginBottom: 10,
        marginTop: 20,
        elevation: 4,
        justifyContent: 'space-around'
    },
    tab: {
        backgroundColor: "#004dcf",
        width: width * 0.4,
        borderRadius: 10,
        height: 30,
        elevation: 0,
    },
    tabTitle: {
        lineHeight: 19,
        fontWeight: '400',
        color: "white",
        textAlign: 'center',
    },
    divider: {
        borderRightWidth: 0.3,
        borderRightColor: theme.COLORS.ICON,
    },
});
export default Application;