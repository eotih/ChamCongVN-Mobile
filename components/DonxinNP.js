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
    <Block flex center>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30, width }}>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block style={styles.all} >
            <Text >Họ tên nhân viên</Text>
            <Block style={styles.text} >
              <Icon name="user"
              color="#0066FF"
                size={24} />
              <Text size={16}></Text>
            </Block>
          </Block>
          <Block style={styles.all} >
            <Text >Chức vụ</Text>
            <Block style={styles.text} >
              <Icon name="users"
                size={24} />
              <Text size={16}> AAAAAA</Text>
            </Block>
          </Block>
          <Block style={styles.all} >
            <Text >Phòng ban</Text>
            <Block  style={styles.text} >
            <Icon name="briefcase"
                size={24} />
              <Text size={16}> AAAAAA</Text>
            </Block>
          </Block>
          <Block row style={{ justifyContent: 'space-between', marginTop: 20 }} >

            <Block >
              <Text >Chọn Loại Nghỉ</Text>
              <Select style={styles.select} onChangeText={(val) => this.updateInputVal(val, 'TieuDeNghi')}
                options={["Việc cá nhân", "Nghỉ hàng tháng"]}
              />
            </Block>

            <Block >
              <Text >Chọn số ngày nghỉ</Text>
              <Select style={styles.select} onChangeText={(val) => this.updateInputVal(val, 'TieuDeNghi')}
                options={["Nghỉ 1 ngày", "Nghỉ 2 ngày"]}
              />
            </Block>
          </Block>
          <Block style={styles.all} >
            <Text h7 >Chọn ngày bắt đầu nghỉ</Text>
            <Block style={styles.day} >
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
            <Text >Lý do xin nghỉ phép </Text>
            <Block style={{ borderWidth: 1, marginTop: 20 }} >
              <TextInput
                multiline={true}
                numberOfLines={6}
                size={16} color="#32325D"
              >
              </TextInput>
            </Block>
          </Block>
          <Block style={styles.createButton} >
            <Button color="info"  >
              <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                Gửi Yêu Cầu
              </Text>
            </Button>
          </Block>
        </Block>
      </ScrollView>
    </Block >
  );
}
const styles = StyleSheet.create({
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2
  },
  all: {
    marginTop: 10,
  },
  createButton: {
    alignItems: 'center',
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
    marginTop: 7,
    width: width / 2.5,
    backgroundColor: "#3366CC"
  },
})
export default DonxinNP;