import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity, Button, Modal, } from "react-native";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import TimeKeeperHistory from "../../components/TimeKeepers/TimeKeeperHistory";
import moment from "moment";
import DateTimePicker from '@react-native-community/datetimepicker';
import { IconButton, Colors } from 'react-native-paper';
import { GetAllTimeKeepingByEmployeeID } from '../../functions/TimeKeeper';


function TimekeepingHistory() {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState();
  const [dayEnd, setDayEnd] = useState();
  const [timeKeeper, setTimeKeeper] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [show, setShow] = useState(false);
  const [showIOS, setShowIOS] = useState();
  useEffect(() => {
    GetAllTimeKeepingByEmployeeID(1).then(res => {
      setTimeKeeper(res)
      setDataFilter(res)
    })
  }, []);

  const onHandleChangeDateTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    const selectedDay = moment(currentDate).format('LL');
    setDay(selectedDay);
    setDate(currentDate);
  };
  const onHandleEndTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    const selectedDay = moment(currentDate).format('LL');
    setDayEnd(selectedDay);
    filterData(currentDate);
    setDate(currentDate);
  };
  const filterData = (condition) => {
    const result = dataFilter.filter(res => moment(res.checkin.CreatedAt).format('YYYY-MM-DD') <= moment(condition).format('YYYY-MM-DD') && moment(date).format('YYYY-MM-DD') <= moment(res.checkin.CreatedAt).format('YYYY-MM-DD'));
    setTimeKeeper(result);
  }
  const calendarSelect = (calendar) => {
    if (calendar === "Start") {
      handleSetShow(onHandleChangeDateTime);
    }
    else {
      handleSetShow(onHandleEndTime);
    }
  }
  const handleSetShow = (typeSelect) => {
    // if platform is ios show datepicker for ios
    if (Platform.OS === 'ios') {
      setShow(true)
      setShowIOS(
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
                onChange={typeSelect}
                style={styles.ios}
              />
            </View>
          </View>
        </Modal>
      )
    }
    else {
      setShow(true)
      setShowIOS(<DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode='date'
        is24Hour={false}
        display={
          Platform.OS === "ios" ? "spinner" : "default"
        }
        onChange={typeSelect}
        style={styles.ios}
      />);
    }
  }

  return (
    <>
      <View style={styles.filter}>
        <IconButton style={styles.icon}
          icon="calendar"
          size={32}
          onPress={() => calendarSelect("Start")}
        />
        <Text size={16} color="#32325D" style={styles.input}
          placeholder="Select Date"
          onPress={() => calendarSelect("Start")}
        >
          {day ? day : "Please select date"}
        </Text>
      </View>
      <View style={styles.filter}>
        <IconButton style={styles.icon}
          icon="calendar"
          size={32}
          onPress={() => calendarSelect("End")}
        />
        <Text size={16} color="#32325D" style={styles.input}
          placeholder="Select Date"
          onPress={() => calendarSelect("End")}
        >
          {dayEnd ? dayEnd : "Please select date"}
        </Text>
        {show && showIOS}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {timeKeeper.map((item, index) => (
          <TimeKeeperHistory key={index} data={item} />
        ))}
      </ScrollView>

    </>
  );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
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
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    width: width - 100,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
})
export default TimekeepingHistory;