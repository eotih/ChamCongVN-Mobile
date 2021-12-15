import React, { useState, useEffect, useRef } from "react";
import { ScrollBlock, ScrollView, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../../constants";
import { Button, Select, Input, Header, Switch } from "..";
import axios from "axios";
import { IconButton, Colors } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
export default function OverTimeApplications() {
    const [date, setDate] = useState(new Date());
    const [day, setDay] = useState();
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(false)
    }, [show]);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        const selectedDay = moment(currentDate).format("LL");
        setDay(selectedDay);
        setDate(currentDate);
    };
    return (
        <ScrollView>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>

                <Block style={{ marginTop: theme.SIZES.BASE }}>
                    <Text h6>Đơn Xin tăng ca</Text>
                    <Text style={styles.text}>Chọn ngày tăng ca</Text>
                    <Block style={styles.day} >
                        <Block style={{alignSelf: 'center'}} >
                            <TextInput size={16} color="#32325D"
                                placeholder="Select Date"
                                value={day}
                            >
                            </TextInput>
                        </Block>
                        <Block>
                            <IconButton
                                icon="calendar"
                                color={Colors.red500}
                                onPress={() => setShow(true)}
                            />
                        </Block>

                    </Block>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode='date'
                            is24Hour={false}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </Block>
                <Block style={{ marginTop: 15 }}>
                    <Text h6>Khoảng thời gian tăng ca</Text>
                    <Text style={styles.text}>Giờ bắt đầu</Text>
                    <Block style={styles.time} >
                        <Block style={{alignSelf: 'center'}} >
                            <TextInput size={16} color="#32325D"
                                placeholder="Select Time"
                                value={day}
                            >
                            </TextInput>
                        </Block>
                        <Block>
                            <IconButton
                                icon="clock"
                                color="#ff9800"
                                onPress={() => setShow(true)}
                            />
                        </Block>
                    </Block>
                    <Text style={styles.text}>Giờ kết thúc</Text>
                    <Block style={styles.time} >
                        <Block style={{alignSelf: 'center'}} >
                            <TextInput size={16} color="#32325D"
                                placeholder="Select Time"
                                value={day}
                            >
                            </TextInput>
                        </Block>
                        <Block>
                            <IconButton
                                icon="clock"
                                color="#1273de"
                                onPress={() => setShow(true)}
                            />
                        </Block>
                    </Block>
                </Block>
                <Block style={{ marginTop: theme.SIZES.BASE }}>
                    <Text h6>Lý do</Text>
                    <TextInput style={styles.textInput} placeholder="Nhập lý do tăng ca"
                        multiline={true}
                        numberOfLines={6}>
                    </TextInput>
                </Block>
                <Block  >
                    <TouchableOpacity style={styles.createButton} color="info"  >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE} style={{ textAlign: 'center' }}>
                            Gửi Yêu Cầu
                        </Text>
                    </TouchableOpacity>
                </Block>
            </Block>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    day: {
        marginTop: 7,
        flexDirection: 'row',
        borderWidth: 1,
        fontSize: 18,
        justifyContent: 'space-between',
        borderRadius: 10
    },
    time: {
        marginTop: 15,
        flexDirection: 'row',
        borderWidth: 1,
        fontSize: 18,
        justifyContent: 'space-between',
        borderRadius: 10
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10
    },
    text: {
        marginTop: theme.SIZES.BASE,
    },
    createButton: {
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#ff6900',
        padding: 15,
      },
      
})
