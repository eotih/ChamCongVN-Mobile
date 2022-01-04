import React, { useState, useContext } from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity, View } from "react-native";
import Axios from "../../functions/BaseUrl";
import { Select } from "..";
import { IconButton, Colors } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import { TextInput, Text, Switch } from 'react-native-paper';
import { AccountContext } from '../../context/AccountContext';

const { width, height } = Dimensions.get('window');
export default function AbsentApplications() {
  const account = useContext(AccountContext);
  const { EmployeeID, FullName } = account.employees.Employee;
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState();
  const [show, setShow] = useState(false);
  const [showPicker, setShowPicker] = useState();
  const [data, setData] = useState({
    EmployeeID: EmployeeID,
    AbsentType: '',
    AbsentDate: '',
    Reason: '',
    NumberOfDays: '',
    StateID: 1,
    CreatedBy: FullName,
  });
  const handleSetShow = () => {
    if (Platform.OS === 'ios') {
      setShow(true)
      setShowPicker(
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
        >
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Date</Text>
              <TouchableOpacity
                onPress={() => setShow(false)}
              >
                <IconButton
                  icon="close"
                  size={32}
                  color={Colors.black}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalBody}>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='date'
                is24Hour={false}
                display={
                  Platform.OS === "ios" ? "spinner" : "default"
                }
                onChange={onChange}
                style={styles.ios}
              />
            </View>
          </View>
        </Modal>
      )
    }
    else {
      setShow(true)
      setShowPicker(<DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode='date'
        is24Hour={false}
        display={
          Platform.OS === "ios" ? "spinner" : "default"
        }
        onChange={onChange}
        style={styles.ios}
      />);
    }
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    const selectedDay = moment(currentDate).format("LL");
    setDay(selectedDay);
    setDate(currentDate);
    data.AbsentDate = currentDate;
  };
  const handleSubmit = () => {
    Axios.post('Application/AbsentApplications', data)
      .then((res) => {
        if (res.data.Status === 200) {
          alert(res.data.Message);
        } else {
          alert(res.data.Message);
        }
      })
  }
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (value) => setIsEnabled(value);
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30, width }}>
        <View style={{ paddingHorizontal: 20 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Infomation</Text>
            <View style={{ marginVertical: 20 }} >
              <Text >Absent type</Text>
              <Select data={data} typeSelect="AbsentDate" style={styles.select}
                options={["Paid Leave", "UnPaid Leave"]}
              />
            </View>
            <View style={styles.all} >
              <Text>Select start days</Text>
              <View style={styles.day}  >
                <View>
                  <TextInput style={{ height: 45 }} size={16} color="#32325D"
                    placeholder="Select day"
                    backgroundColor="white"
                    value={day}
                    underlineColor="white"
                    activeUnderlineColor="white"
                  >
                  </TextInput>
                </View>
                <View>
                  <IconButton
                    icon="calendar"
                    color={Colors.red500}
                    onPress={() => handleSetShow()}
                  />
                </View>
              </View>
              {show && showPicker}
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'center' }}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }} >Số ngày nghỉ</Text>
              <Switch style={{ marginLeft: 10, marginTop: -5 }}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            {isEnabled ? <View style={{ marginVertical: 15 }} >
              <TextInput label="Vui lòng nhập"
                mode="outlined"
                onChangeText={(text) => data.NumberOfDays = text}
              >
              </TextInput>
            </View> :
              <View style={{ marginVertical: 15 }} >
                <Select data={data} typeSelect="NumberOfDays" style={styles.select}
                  options={[1 + " day", 2 + " day", 3 + " day", 4 + " day"]}
                />
              </View>}
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }} >Note</Text>
            <View style={{ marginTop: 20 }} >
              <TextInput
                multiline
                numberOfLines={8}
                label="Enter reason for absence"
                onChangeText={(text) => data.Reason = text}
                mode="outlined"
              />
            </View>
          </View>
          <View  >
            <TouchableOpacity style={styles.createButton} color="info" onPress={() => handleSubmit()}>
              <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>
                Send Application
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ >
  );
}
const styles = StyleSheet.create({
  createButton: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#ff6900',
    padding: 10,
  },
  text: {
    marginTop: 7,
    borderWidth: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 10
  },
  day: {
    marginVertical: 20,
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 50
  },
  select: {
    marginTop: 10,
    borderWidth: 1,
  },
  modal: {
    width: width,
    height: height / 2.5,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  modalTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
  modalBody: {
    flex: 1,
  },
  ios: {
    width: width,
    height: height / 3,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    backgroundColor: '#222',

  },
})