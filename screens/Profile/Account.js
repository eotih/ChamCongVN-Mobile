import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
} from 'react-native';
const { height, width } = Dimensions.get('screen');
import BaseUrl from '../../functions/BaseUrl';
import { GetAccountByID } from "../../functions/TimeKeeper"
import md5 from "md5"

import { TextInput, Button, Text } from 'react-native-paper';

export default class MatKhau extends React.Component {
  constructor() {
    super();
    this.state = {
      OldPassword: '1',
      OldPasswordInput: '',
      NewPassword: '',
      NewPassword2: '',
      FullName: '',
    }
  }
  getMD5(password) {
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
  }
  handleSubmit(event) {
    if (this.state.OldPassword !== this.state.OldPasswordInput) {
      alert("Invalid Olđ Password!")
    }
    else {
      if (this.state.NewPassword !== this.state.NewPassword2) {
        alert("The password does not match.")
      }
      else {
        var newpassword = md5(this.state.NewPassword);
        BaseUrl.post('Organization/PasswordAccount/' + 1, {
          AccountID: 1,
          Password: newpassword,
          UpdatedBy: this.state.FullName,
        })
          .then(res => {
            if (res.data.Status === 'Updated') {
              alert(res.data.Message);
            } else {
              alert('Data not update');
            }
          })
      }
    }
  }
  componentDidMount() {
    GetAccountByID(1).then(res => {
      const password = this.getMD5(res.Password)
      this.setState({
        OldPassword: password,
        FullName: this.props.route.params.TenND
      })
    })
  }

  render() {
    const { navigation, route } = this.props;
    return (
      <ScrollView
      >
        <View style={styles.card}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Bạn muốn thay đổi mật khẩu</Text>
          <View >
            <TextInput style={styles.text}
              label="Nhập mật khẩu cũ"
              mode="outlined"
              activeOutlineColor="black"
              onChangeText={text => this.setState({ OldPasswordInput: text })}>
            </TextInput>
            <TextInput style={styles.text}
              label="Nhập mật khẩu cũ"
              mode="outlined"
              onChangeText={text => this.setState({ OldPasswordInput: text })}>
            </TextInput>
            <TextInput style={styles.text}
              label="Nhập mật khẩu cũ"
              mode="outlined"
              onChangeText={text => this.setState({ OldPasswordInput: text })}>
            </TextInput>
            <View>
              <Button style={styles.commandButton} onPress={() => this.handleSubmit()}>
                <Text style={{ color: "white" }}>Submit</Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    // position: "relative",
    padding: 15,
    marginHorizontal: 20,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'white',
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
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