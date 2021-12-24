import React, { useState, useEffect, useContext } from "react";
import { ScrollBlock, ScrollView, StyleSheet, Dimensions, TouchableOpacity, View } from "react-native";
import { argonTheme, tabs } from "../../constants";
import { IconButton, Colors, Text, TextInput } from 'react-native-paper';
import Axios from "../../functions/BaseUrl";
import SelectDropdown from 'react-native-select-dropdown';
import { AccountContext } from '../../context/AccountContext';

const { width, height } = Dimensions.get('window');
export default function OverTimeApplications() {
    const account = useContext(AccountContext);
    const { EmployeeID, FullName } = account.employees.Employee;
    const [timeEnd, settimeEnd] = useState("");
    const [timeStart, settimeStart] = useState("");
    const [data, setData] = useState([]);
    const [dataRegister, setDataRegister] = useState({
        EmployeeID: EmployeeID,
        StateID: 1,
        OverTimeID: "",
        Note: "",
        CreatedBy: FullName,
    });
    useEffect(() => {
        getOverTime().then((res) => {
            const result = res.filter(item => item.Overtime.IsActive === true);
            setData(result);
        });
    }, []);

    async function getOverTime() {
        const res = await Axios.get('Organization/OverTime');
        return res.data;
    }

    const handleSubmit = () => {
        Axios.post('Application/OverTimeApplications', dataRegister)
            .then((res) => {
                if (res.data.Status === 200) {
                    alert(res.data.Message);
                } else {
                    alert('Data not update');
                }
            })
    }
    return (
        <ScrollView>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Overtime Application</Text>
                    <Text style={styles.text}>Select shift overtime</Text>
                    <SelectDropdown
                        data={data}
                        onSelect={(selectedItem) => {
                            settimeStart(selectedItem.Overtime.StartTime),
                                settimeEnd(selectedItem.Overtime.EndTime),
                                dataRegister.OverTimeID = selectedItem.Overtime.OverTimeID
                        }}
                        dropdown icon position="left"
                        buttonStyle={{
                            width: '100%',
                            backgroundColor: '#ff9800',
                            alignItems: 'center',
                            paddingVertical: 12,
                            borderRadius: 10,
                            elevation: 3,
                        }}
                        buttonTextAfterSelection={(selectedItem) => {
                            return selectedItem.Overtime.OverTimeName
                        }}
                        rowTextForSelection={(item) => {
                            return item.Overtime.OverTimeName
                        }}
                    />
                </View>
                <View style={{ marginVertical: 15, padding: 10, borderWidth: 1 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Overtime infomation</Text>
                    <Text style={styles.text}>Start time</Text>
                    <View style={styles.time} >
                        <View style={{ alignSelf: 'center' }} >
                            <TextInput size={16} color="#32325D"
                                backgroundColor="white"
                                placeholder="Select Time"
                                value={timeStart}
                            >
                            </TextInput>
                        </View>
                        <View>
                            <IconButton
                                icon="clock"
                                color="#ff9800"
                                onPress={() => handleSetShow()}
                            />
                        </View>
                    </View>
                    <Text style={styles.text}>End time</Text>
                    <View style={styles.time} >
                        <View style={{ alignSelf: 'center' }} >
                            <TextInput size={16} color="#32325D"
                                backgroundColor="white"
                                placeholder="Select Time"
                                value={timeEnd}
                            >
                            </TextInput>
                        </View>
                        <View>
                            <IconButton
                                icon="clock"
                                color="#1273de"
                                onPress={() => handleSetShow()}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }} >Note </Text>
                    <View style={{ marginTop: 20 }} >
                        <TextInput
                            multiline
                            numberOfLines={6}
                            label="Note"
                            onChangeText={text => dataRegister.Note = text}
                            mode="outlined"
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.createButton} color="info" onPress={() => handleSubmit()}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE} style={{ textAlign: 'center' }}>
                            Send Application
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
        marginVertical: 10,
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
        marginVertical: 10,
    },
    createButton: {
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#ff6900',
        padding: 15,
    },
    containerStyle: {

        flex: 1,

        marginHorizontal: 20,

        justifyContent: 'center',

    },

})
