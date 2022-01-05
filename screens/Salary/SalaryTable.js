import React, { useState, useEffect, useContext } from 'react';
import { ScrollBlock, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { Button, Card, Title, Paragraph, Text } from 'react-native-paper';
import { BarChart } from 'react-native-gifted-charts';
import { AccountContext } from '../../context/AccountContext';
import { GetSalaryByEmloyeeID } from '../../functions/Salary';

function SalaryTable({ navigation }) {
    const account = useContext(AccountContext);
    const { EmployeeID } = account.employees.Employee;
    const [dataChart, setDataChart] = useState([]);
    const [Salary, setSalary] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [listdata, setlistdata] = useState([]);
    const data = [];
    var year = new Date().getFullYear();
    useEffect(() => {
        GetSalaryByEmloyeeID(EmployeeID).then((salary) => {
            const datafilter = salary.filter(item => item.Year === year - 1);
            setlistdata(datafilter);
            datafilter.map(item => {
                setSalary(Salary + item.TotalSalary);
                setTotalTime(totalTime + item.TotalTime);
                const month = item.Month;
                data.push(getValueColor(item.TotalSalary, month))
            })
            setDataChart(data)
        })
    }, []);

    const styleDataChart = (salary, label, frontColor, sideColor, topColor) => {
        return ({
            value: salary,
            label: label,
            frontColor: frontColor,
            sideColor: sideColor,
            topColor: topColor,
        });
    }
    const getValueColor = (salary, Month) => {
        switch (Month) {
            case 1:
                return styleDataChart(salary / 1000000, 'January', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 2:
                return styleDataChart(salary / 1000000, 'February', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 3:
                return styleDataChart(salary / 1000000, 'March', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 4:
                return styleDataChart(salary / 1000000, 'April', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 5:
                return styleDataChart(salary / 1000000, 'May', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 6:
                return styleDataChart(salary / 1000000, 'June', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 7:
                return styleDataChart(salary / 1000000, 'July', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 8:
                return styleDataChart(salary / 1000000, 'August', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 9:
                return styleDataChart(salary / 1000000, 'September', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 10:
                return styleDataChart(salary / 1000000, 'October', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 11:
                return styleDataChart(salary / 1000000, 'November', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 12:
                return styleDataChart(salary / 1000000, 'December', '#91E3E3', '#85E0E0', '#B0EAEB');
            default:
                return <View> </View>;
        }
    }
    return (
        <ScrollView style={{ marginHorizontal: 20 }}>
            <View style={styles.header}>
                <Button color="white" style={{ backgroundColor: 'blue' }} >Thống kê lương</Button>
                <Button color="white" style={{ backgroundColor: 'orange' }} onPress={() => navigation.navigate('ListSalary', { listdata })}>Chi tiết lương</Button>
            </View>
            <View>
                <Card style={styles.card}>
                    <Card.Content style={{backgroundColor:'#fac172'}}>
                        <Title>Cumulative salary</Title>
                        <Paragraph>{Salary / 1000000} Million</Paragraph>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content style={{backgroundColor:'#89d5c9'}}>
                        <Title>Total hours worked</Title>
                        <Paragraph>{Salary / 1000000} Million</Paragraph>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content style={{backgroundColor:'#adc965'}}>
                        <Title>Total overtime hours</Title>
                        <Paragraph>{Salary / 1000000} Million</Paragraph>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content style={{backgroundColor:'#e25b45'}}>
                        <Title>Total number of days off</Title>
                        <Paragraph>{Salary / 1000000} Million</Paragraph>
                    </Card.Content>
                </Card>
            </View>
            <View>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
                    Thống kê lương 12 tháng
                </Text>
                <BarChart
                    showFractionalValue
                    showYAxisIndices
                    hideRules
                    noOfSections={10}
                    data={dataChart}
                    barWidth={40}
                    sideWidth={15}
                    side="right"
                />
            </View>
        </ScrollView>
    )
}

export default SalaryTable;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-around'
    },
    card: {
        marginVertical: 10,
    },

})