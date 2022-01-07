import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
} from 'react-native';
const { height, width } = Dimensions.get('screen');
import BaseUrl from '../../functions/BaseUrl';
import { GetAccountByID } from "../../functions/TimeKeeper"

import { TextInput, Button, Text } from 'react-native-paper';

export default function MatKhau({ route }) {
  const [data, setData] = useState({
    OldPassword: '',
    FullName: '',
    OldPasswordInput: '',
    NewPassword: '',
    NewPassword2: '',
    AccountID: '',
  });

  useEffect(() => {
    const id = route.params.MaND;
    GetAccountByID(id).then(res => {
      const password = getMD5(res.Password)
      data.OldPassword = password;
      data.AccountID = id;
      data.FullName = res.Employee.FullName;
    })
  }, []);

  const getMD5 = (password) => {
    var ReverseMd5 = require('reverse-md5');
    var rev = ReverseMd5({
      lettersUpper: false,
      lettersLower: true,
      numbers: true,
      special: false,
      whitespace: true,
      maxLen: 12
    })
    return (rev(password).str);
  };

  const handleSubmit = (event) => {
    if (data.OldPassword !== data.OldPasswordInput) {
      alert("Invalid Olđ Password!")
    }
    else {
      if (data.NewPassword !== data.NewPassword2) {
        alert("The password does not match.")
      }
      else {
        console.log(data.NewPassword)
        BaseUrl.put('Organization/Account/Password/' + data.AccountID, {
          AccountID: data.AccountID,
          Password: data.NewPassword,
          UpdatedBy: data.FullName,
        })
          .then(res => {
            if (res.data.Status === 200) {
              alert(res.data.Message);
            } else {
              alert(res.data.Message);
            }
          })
      }
    }
  };

  return (
    <ScrollView
    >
      <View style={styles.card}>
        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: 'center' }}>Bạn muốn thay đổi mật khẩu</Text>
        <View >
          <TextInput style={styles.text}
            label="Nhập mật khẩu cũ"
            mode="outlined"
            activeOutlineColor="black"
            value={data.OldPasswordInput}
            onChangeText={(text) => setData({ ...data, OldPasswordInput: text })}>
          </TextInput>
          <TextInput style={styles.text}
            label="Nhập mật khẩu mới"
            mode="outlined"
            value={data.NewPassword}
            onChangeText={(text) => setData({ ...data, NewPassword: text })}>
          </TextInput>
          <TextInput style={styles.text}
            label="Nhập lại mật khẩu"
            mode="outlined"
            value={data.NewPassword2}
            onChangeText={(text) => setData({ ...data, NewPassword2: text })}>
          </TextInput>
          <View>
            <Button style={styles.commandButton} onPress={() => handleSubmit()}>
              <Text style={{ color: "white" }}>Submit</Text>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    // position: "relative",
    padding: 15,
    marginHorizontal: 20,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'white',
  },
  text: {
    marginTop: 20
  },
  commandButton: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 20,
  },

});