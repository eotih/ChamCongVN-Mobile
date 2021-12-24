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
            const datafilter = salary.filter(item => item.Year === year);
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
                return styleDataChart(salary / 1000000, 'May', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 2:
                return styleDataChart(salary / 1000000, 'May', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 3:
                return styleDataChart(salary / 1000000, 'May', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 4:
                return styleDataChart(salary / 1000000, 'May', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 5:
                return styleDataChart(salary / 1000000, 'May', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 6:
                return styleDataChart(salary / 1000000, 'May', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 7:
                return styleDataChart(salary / 1000000, 'May', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 8:
                return styleDataChart(salary / 1000000, 'May', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 9:
                return styleDataChart(salary / 1000000, 'May', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 10:
                return styleDataChart(salary / 1000000, 'May', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 11:
                return styleDataChart(salary / 1000000, 'May', '#91E3E3', '#85E0E0', '#B0EAEB');
            case 12:
                return styleDataChart(salary / 1000000, 'May', '#91E3E3', '#85E0E0', '#B0EAEB');
            default:
                return <View> </View>;
        }
    }
    return (
        <ScrollView style={{ marginHorizontal: 20 }}>
            <View style={styles.header}>
                <Button color="white" style={{ backgroundColor: 'blue' }} >Thống kê lương</Button>
                <Text style={{ fontSize: 27 }}>||</Text>
                <Button color="white" style={{ backgroundColor: 'orange' }} onPress={() => navigation.navigate('ListSalary', {listdata})}>Chi tiết lương</Button>
            </View>
            <View style={styles.card}>
                <Card>
                    <Card.Content>
                        <Title>Cumulative salary</Title>
                        <Paragraph>{Salary/1000000} Million</Paragraph>
                        <Title>Total Working Hours</Title>
                        <Paragraph>{totalTime} hours</Paragraph>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Title>Số lần tăng ca</Title>
                        <Paragraph>10 lần</Paragraph>
                        <Title>Số ngày nghỉ</Title>
                        <Paragraph>20 ngày</Paragraph>
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
        marginVertical: 20
    },
    card: {
        marginVertical: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

})