import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity, Button } from "react-native";
import data from "../../constants/datatest";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import CardHistory from "../../components/CardHistory"
import DateTimePicker from '@react-native-community/datetimepicker';


function TimekeepingHistory() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(currentDate);
    setDate(currentDate);
  };

  return (<View>
    <Button onPress={() => setShow(true)} title="Show date picker!" />
    {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    <ScrollView>
      {data.map(data => <CardHistory
        key={data.id}
        data={data}
      />)}
    </ScrollView>
  </View>
  );
}
export default TimekeepingHistory;