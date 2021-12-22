import React from "react";
import { ScrollBlock, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
// Galio components
// Argon themed components
import { argonTheme, tabs } from "../../constants";
import { Select, Input, Header, Switch } from "../../components";
import axios from "axios";
import { Button, Card, Title, Paragraph, Text } from 'react-native-paper';
import { BarChart } from 'react-native-gifted-charts';
import SimplePie from "../../components/PieChart"

const { width, height } = Dimensions.get('window');
const barData = [
    {
        value: 230,
        label: 'Jan',
        frontColor: '#4ABFF4',
        sideColor: '#23A7F3',
        topColor: '#92e6f6',
    },
    {
        value: 180,
        label: 'Feb',
        frontColor: '#79C3DB',
        sideColor: '#68BCD7',
        topColor: '#9FD4E5',
    },
    {
        value: 195,
        label: 'Mar',
        frontColor: '#28B2B3',
        sideColor: '#0FAAAB',
        topColor: '#66C9C9',
    },
    {
        value: 250,
        label: 'Apr',
        frontColor: '#4ADDBA',
        sideColor: '#36D9B2',
        topColor: '#7DE7CE',
    },
    {
        value: 320,
        label: 'May',
        frontColor: '#91E3E3',
        sideColor: '#85E0E0',
        topColor: '#B0EAEB',
    },
    {
        value: 320,
        label: 'May',
        frontColor: '#91E3E3',
        sideColor: '#85E0E0',
        topColor: '#B0EAEB',
    },
    {
        value: 320,
        label: 'May',
        frontColor: '#91E3E3',
        sideColor: '#85E0E0',
        topColor: '#B0EAEB',
    },
    {
        value: 320,
        label: 'May',
        frontColor: '#91E3E3',
        sideColor: '#85E0E0',
        topColor: '#B0EAEB',
    },
    {
        value: 320,
        label: 'May',
        frontColor: '#91E3E3',
        sideColor: '#85E0E0',
        topColor: '#B0EAEB',
    },
    {
        value: 320,
        label: 'May',
        frontColor: '#91E3E3',
        sideColor: '#85E0E0',
        topColor: '#B0EAEB',
    },
    {
        value: 320,
        label: 'May',
        frontColor: '#91E3E3',
        sideColor: '#85E0E0',
        topColor: '#B0EAEB',
    },
    {
        value: 320,
        label: 'May',
        frontColor: '#91E3E3',
        sideColor: '#85E0E0',
        topColor: '#B0EAEB',
    },
];
export default class SalaryTable extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView style={{ marginHorizontal: 20 }}>
                <View style={styles.header}>
                    <Button color="white" style={{ backgroundColor: 'blue' }} >Thống kê lương</Button>
                    <Text style={{ fontSize:27 }}>||</Text>
                    <Button color="white" style={{ backgroundColor: 'orange' }} onPress={() => navigation.navigate('ListSalary')}>Ghi tiết lương</Button>
                </View>
                <View style={styles.card}>
                    <Card>
                        <Card.Content>
                            <Title>Lương trung bình</Title>
                            <Paragraph>10 triệu</Paragraph>
                            <Title>Tháng nhiều nhất</Title>
                            <Paragraph>10 triệu</Paragraph>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Title>Tháng ít nhất</Title>
                            <Paragraph>10 triệu</Paragraph>
                            <Title>Tổng thực nhận</Title>
                            <Paragraph>10 triệu</Paragraph>
                        </Card.Content>
                    </Card>
                </View>
                <View>
                    <Text style={{fontSize: 18,fontWeight: "bold",marginBottom:20}}>
                        Thống kê lương 12 tháng
                    </Text>
                    <BarChart
                        showFractionalValue
                        showYAxisIndices
                        hideRules
                        noOfSections={10}
                        data={barData}
                        barWidth={40}
                        sideWidth={15}
                        isThreeD
                        side="right"
                    />
                </View>
            </ScrollView>
    
        )
    }
    

}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginVertical: 20
    },
    card: {
        marginVertical: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

})