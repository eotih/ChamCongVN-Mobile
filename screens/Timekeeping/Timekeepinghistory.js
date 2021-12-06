import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity, Button, Modal, } from "react-native";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import CardHistory from "../../components/CardHistory";
import { Input } from "../../components";
import moment from "moment";
import DateTimePicker from '@react-native-community/datetimepicker';
import { IconButton, Colors } from 'react-native-paper';
import { GetAllTimeKeepingByEmployeeID } from '../../functions/TimeKeeper';
import { set } from 'react-native-reanimated';


function TimekeepingHistory() {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState();
  const [timeKeeper, setTimeKeeper] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [show, setShow] = useState(false);
  const [showIOS, setShowIOS] = useState(false);
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
    filterData(selectedDay);
    setDate(currentDate);
  };
  const filterData = (condition) => {
    const result = dataFilter.filter(res => moment(res.checkin.CreatedAt).format('LL') == condition);
    setTimeKeeper(result);
  }
  const handleSetShow = () => {
    // if platform is ios show datepicker for ios
    if (Platform.OS === 'ios') {
      setShow(true);
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
                  onChange={onHandleChangeDateTime}
                  style={styles.ios}
                />
              </View>
            </View>
          </Modal>
        )
    }
    else {
      setShow(true);
      setShowIOS(<DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode='date'
        is24Hour={false}
        display={
          Platform.OS === "ios" ? "spinner" : "default"
        }
        onChange={onHandleChangeDateTime}
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
          onPress={() => handleSetShow()}
        />
        <Text size={16} color="#32325D" style={styles.input}
          placeholder="Select Date"
          onPress={() => handleSetShow()}
        >
          {day ? day : "Select Date"}
        </Text>
        {show && showIOS}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
          {timeKeeper.map((item, index) => (
            <CardHistory key={index} data={item} />
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
    fontWeight: 'bold',

  },
  modalBody:{
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