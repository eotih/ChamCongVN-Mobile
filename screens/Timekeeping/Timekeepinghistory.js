import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity, Button, TextInput, } from "react-native";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import CardHistory from "../../components/CardHistory";
import { Input } from "../../components";
import moment from "moment";
import DateTimePicker from '@react-native-community/datetimepicker';
import { IconButton, Colors } from 'react-native-paper';
import { GetAllTimeKeepingByEmployeeID } from '../../functions/TimeKeeper';


function TimekeepingHistory() {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState();
  const [timeKeeper, setTimeKeeper] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(false);
    GetAllTimeKeepingByEmployeeID(1).then(res => {
      setTimeKeeper(res)
      setDataFilter(res)
    })
  }, []);

  const onHandleChangeDateTime = (event, selectedDate) => {
    setShow(false);
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

  return (
    <>
      <View style={styles.filter}>
        <IconButton style={styles.icon}
          icon="calendar"
          size={32}
          onPress={() => setShow(true)}
        />
        <Text size={16} color="#32325D" style={styles.input}
          placeholder="Select Date"
          onPress={() => setShow(true)}
        >
          {day}
        </Text>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode='date'
            is24Hour={false}
            display="default"
            onChange={onHandleChangeDateTime}
          />
        )}
      </View>
      <ScrollView>
        {timeKeeper.map(data => <CardHistory
          key={data.id}
          data={data}
        />)}
      </ScrollView>
    </>
  );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    marginRight: theme.SIZES.BASE,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    backgroundColor: '#fff',
    paddingHorizontal: theme.SIZES.BASE,
    fontSize: theme.SIZES.FONT * 1,
    color: '#32325D',
  },
})
export default TimekeepingHistory;