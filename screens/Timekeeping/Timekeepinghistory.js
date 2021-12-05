import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity, Button } from "react-native";
import data from "../../constants/datatest";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import CardHistory from "../../components/CardHistory";
import { Input } from "../../components";
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from "moment";
import DateTimePicker from '@react-native-community/datetimepicker';


function TimekeepingHistory() {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState();
  const [dataCICO, setdataCICO] = useState(data);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(false)
    console.log(day)
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

  return (<View>
    <View>
      <Input size={16} color="#32325D" style={{ width: 400 }}
        placeholder="select date"
        value={day}
      />
      <TouchableOpacity  onPress={() => setShow(true)}>
        <Icon name="calendar" size={32} color="#00CCCC" />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={false}
          display="spinner"
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
  </View>
  );
}
export default TimekeepingHistory;