import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Dimensions, View, TextInput, } from "react-native";
import data from "../../constants/datatest";
import { Button as GaButton, theme } from "galio-framework";
import CardHistory from "../../components/CardHistory";
import moment from "moment";
import DateTimePicker from '@react-native-community/datetimepicker';
import { IconButton, Colors } from 'react-native-paper';


function TimekeepingHistory() {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState();
  const [dataCICO, setdataCICO] = useState(data);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(false)
  }, [show]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    const selectedDay = moment(currentDate).format("LL");
    setDay(selectedDay);
    filterData(selectedDay);
    setDate(currentDate);
  };
  const filterData = (condition) => {
    const result = data.filter(res => moment(res.checkin.CreatedDate).format("LL") == condition);
    setdataCICO(result);
  }

  return (
    <>
      <View style={styles.filter}>
         <TextInput size={16} color="#32325D" style={styles.input}
          placeholder="Select Date"
          value={day}
        >
        </TextInput>
        <IconButton
          icon="calendar"
          color={Colors.red500}
          size={32}
          onPress={() => setShow(true)}
        />
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
      <ScrollView>
        {dataCICO.map(data => <CardHistory
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
    
    marginHorizontal: theme.SIZES.BASE,
    borderColor: "blue",
  },
  input: {
    marginLeft: 10,
  },
})
export default TimekeepingHistory;