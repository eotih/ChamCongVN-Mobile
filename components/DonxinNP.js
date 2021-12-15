import React, { useState, useEffect, useRef } from "react";
import { ScrollBlock, ScrollView, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";
import { axios } from "../constants/BaseUrl";
import { Button, Select, Input, Header, Switch } from "../components";
import { IconButton, Colors } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";

const { width, height } = Dimensions.get('window');
function DonxinNP() {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState();
  const [show, setShow] = useState(false);
  const [showPicker, setShowPicker] = useState();
  const [data, setData] = useState({
    EmployeeID: 1,
    AbsentType: '',
    AbsentDate: '',
    Reason: '',
    NumberOfDays: '',
    StateID: 1,
    CreatedBy: "Trần Thanh Tú",
  });

  const handleSubmit = () =>{
    console.log(data)
    // axios.post("Application/AddOrEditAbsentApplications",{data})
    // .then(response => console.log(response))
  }
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
    console.log(data)
  };
  return (
    <Block >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30, width }}>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block  >
            <Text h5>Xin nghỉ</Text>
            <Block style={{ marginVertical: theme.SIZES.BASE }} >
              <Text >Chọn loại nghỉ </Text>
              <Select data={data} typeSelect="AbsentDate" style={styles.select}
                options={["Việc cá nhân", "Nghỉ hàng tháng"]}
              />
            </Block>
            <Block style={{ marginVertical: theme.SIZES.BASE }} >
              <Text >Chọn số ngày nghỉ</Text>
              <Select data={data} typeSelect="NumberOfDays" style={styles.select}
                options={["1 Ngày", "2 Ngày", "3 Ngày", "4 Ngày"]}
              />
            </Block>
          </Block>
          <Block style={styles.all} >
            <Text h5 >Chọn ngày xin nghỉ</Text>
            <Block style={styles.day}  >
              <Block style={styles.textInput}>
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
                  onPress={() => handleSetShow()}
                />
              </Block>
            </Block>
            {show && showPicker}
          </Block >
          <Block style={{ marginTop: 20 }}>
            <Text h5 >Lý do </Text>
            <Block style={{ borderWidth: 1, marginTop: 20 }} >
              <TextInput
                multiline
                numberOfLines={8}
                placeholder="Nhập lý do xin nghỉ"
                onChangeText={(text) => data.Reason = text}
              />
            </Block>
          </Block>
          <Block  >
            <TouchableOpacity style={styles.createButton} color="info" onPress={() => handleSubmit()}>
              <Text bold size={14} color={argonTheme.COLORS.WHITE} style={{ textAlign: 'center' }}>
                Gửi Yêu Cầu
              </Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </ScrollView>
    </Block >
  );
}
const styles = StyleSheet.create({
  all: {
    marginTop: 5,
  },
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
    paddingHorizontal: theme.SIZES.BASE
  },
  day: {
    marginTop: 7,
    flexDirection: 'row',
    borderWidth: 1,
    fontSize: 18,
    justifyContent: 'space-between'
  },
  textInput: {
    alignSelf: "center",
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
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',

  },
  modalTitle: {
    fontSize: theme.SIZES.BASE,
    fontWeight: '500',
  },
  modalBody: {
    flex: 1,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE,

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
export default DonxinNP;