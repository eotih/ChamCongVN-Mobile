import React, { useState, useEffect, useRef } from "react";
import { ScrollBlock, ScrollView, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";
import { Button, Select, Input, Header, Switch } from "../components";
import axios from "axios";
import { IconButton, Colors } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextField, FilledTextField, OutlinedTextField } from 'rn-material-ui-textfield'

const { width, height } = Dimensions.get('window');
function DonxinNP() {
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
    <Block >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30, width }}>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block  >
            <Text h5>Xin nghỉ</Text>
            <Block style={{ marginVertical: theme.SIZES.BASE }} >
              <Text >Chọn loại nghỉ </Text>
              <Select style={styles.select} onChangeText={(val) => this.updateInputVal(val,)}
                options={["Việc cá nhân", "Nghỉ hàng tháng"]}
              />
            </Block>
            <Block style={{ marginVertical: theme.SIZES.BASE }} >
              <Text >Chọn số ngày nghỉ</Text>
              <Select style={styles.select} onChangeText={(val) => this.updateInputVal(val,)}
                options={["Nghỉ 1 ngày", "Nghỉ 2 ngày"]}
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
                  onPress={() => setShow(true)}
                />
              </Block>

            </Block>
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
          </Block >
          <Block style={{ marginTop: 20 }}>
            <Text h5 >Lý do </Text>
            <Block style={{ borderWidth: 1, marginTop: 20 }} >
              <TextInput
                multiline
                numberOfLines={8}
                placeholder="Nhập lý do xin nghỉ"
              >
              </TextInput>
            </Block>
          </Block>
          <Block  >
            <TouchableOpacity style={styles.createButton} color="info"  >
              <Text bold size={14} color={argonTheme.COLORS.WHITE} style={{textAlign: 'center'}}>
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
})
export default DonxinNP;