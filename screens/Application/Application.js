import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity, Button, Modal, } from "react-native";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import DonxinNP from "../../components/DonxinNP";
import { IconButton, Colors } from 'react-native-paper';


function Application() {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <DonxinNP />
            </ScrollView>
        </>
    );
}
export default Application;