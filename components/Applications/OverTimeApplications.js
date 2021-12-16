import React, { useState, useEffect, useRef } from "react";
import { ScrollBlock, ScrollView, StyleSheet, Dimensions, TouchableOpacity, View } from "react-native";
// Galio components
// Argon themed components
import { argonTheme, tabs } from "../../constants";
import { IconButton, Colors, Text, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";

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
            <View style={{ paddingHorizontal: 20 }}>

                <View style={{ marginTop: 20 }}>
                    <Text style={{fontSize: 18,fontWeight: "bold"}}>Đơn Xin tăng ca</Text>
                    <Text style={styles.text}>Chọn ngày tăng ca</Text>
                    <View style={styles.day} >
                        <View style={{ alignSelf: 'center' }} >
                            <TextInput size={16} color="#32325D"
                                backgroundColor="white"
                                placeholder="Select Date"
                                value={day}
                            >
                            </TextInput>
                        </View>
                        <View>
                            <IconButton
                                icon="calendar"
                                color={Colors.red500}
                                onPress={() => setShow(true)}
                            />
                        </View>

                    </View>
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
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{fontSize: 18,fontWeight: "bold"}}>Khoảng thời gian tăng ca</Text>
                    <Text style={styles.text}>Giờ bắt đầu</Text>
                    <View style={styles.time} >
                        <View style={{ alignSelf: 'center' }} >
                            <TextInput size={16} color="#32325D"
                                backgroundColor="white"
                                placeholder="Select Time"
                                value={day}
                            >
                            </TextInput>
                        </View>
                        <View>
                            <IconButton
                                icon="clock"
                                color="#ff9800"
                                onPress={() => setShow(true)}
                            />
                        </View>
                    </View>
                    <Text style={styles.text}>Giờ kết thúc</Text>
                    <View style={styles.time} >
                        <View style={{ alignSelf: 'center' }} >
                            <TextInput size={16} color="#32325D"
                                backgroundColor="white"
                                placeholder="Select Time"
                                value={day}
                            >
                            </TextInput>
                        </View>
                        <View>
                            <IconButton
                                icon="clock"
                                color="#1273de"
                                onPress={() => setShow(true)}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }} >Lý do </Text>
                    <View style={{ marginTop: 20 }} >
                        <TextInput
                            multiline
                            numberOfLines={6}
                            label="Nhập lý do xin nghỉ"
                            onChangeText={(text) => data.Reason = text}
                            mode="outlined"
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.createButton} color="info"  >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE} style={{ textAlign: 'center' }}>
                            Gửi Yêu Cầu
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    day: {
        marginTop: 7,
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: 'white'
    },
    time: {
        marginTop: 15,
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: 'white'
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20
    },
    text: {
        marginTop: 15,
    },
    createButton: {
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#ff6900',
        padding: 15,
    },

})
