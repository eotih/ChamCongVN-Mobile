import React, { useState, useEffect, useRef } from "react";
import { ScrollBlock, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
// Galio components
// Argon themed components
import { argonTheme, tabs } from "../../constants";
import { Select, Input, Header, Switch } from "../../components";
import axios from "axios";
import { Button } from 'native-base';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const { width, height } = Dimensions.get('window');

const data = [
    {
        name: "Seoul",
        population: 21500000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Toronto",
        population: 2800000,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Beijing",
        population: 527612,
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "New York",
        population: 8538000,
        color: "#ffffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Moscow",
        population: 11920000,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
];
function SalaryTable() {
    return (
        <ScrollView>
            <View style={styles.header}>
            <Button onPress={() => console.log("hello world")}>Primary</Button>     
            </View>
        </ScrollView>

    )

}
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width:width,
        backgroundColor:'blue',
    },
    
})
export default SalaryTable