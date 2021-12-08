import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
const { height, width } = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/FontAwesome';
import { Images, argonTheme } from '../../constants';
import { Block, Text, theme } from "galio-framework";
import BaseUrl from '../../constants/BaseUrl';
import { HeaderHeight } from "../../constants/utils";
import { Button, Input } from "../../components";


export default class MatKhau extends React.Component {
  constructor() {
    super();
    this.state = {
      OldPassword: 'abc',
      OldPasswordInput: '',
      NewPassword: '',
      NewPassword2: '',
    }
  }
  handleSubmit(event) {
    if (this.state.OldPassword !== this.state.OldPasswordInput) {
      console.log("Nhập sai rồi nhập lại đi")
    }
    else {
      console.log(this.state.OldPasswordInput)
    }
    // axiosBaseURL.post('API/AddOrEditOrder', {
    // })
    //   .then(res => {
    //     if (res.data.Status === 'Success') {
    //       alert('Đặt thành công!!');
    //     } else {
    //       alert('Đặt thất bại');
    //     }
    //   })
  }

  render() {
    const { navigation, route } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width }}
      >
        <Text size={22} style={{ textAlign: 'center' }}> Bạn muốn thay đổi mật khẩu</Text>
        <Block flex style={styles.profileCard}>

          <Block style={styles.text}>
            <Input size={16} color="#32325D" style={styles.input}
              placeholder="Nhập mật khẩu cũ"
              onChangeText={text => this.setState({ OldPasswordInput: text })}
              iconContent={
                <Icon style={{ marginRight: 5 }} name="key" size={26} color="#00CCCC" />
              }>
            </Input>
          </Block>
          <Block style={styles.text}>
            <Input size={16} color="#32325D" style={styles.input}
              placeholder="Nhập mật khẩu mới"
              onChangeText={text => this.setState({ NewPassword: text })}
              iconContent={
                <Icon style={{ marginRight: 5 }} name="key" size={26} color="#00CCCC" />
              }>
            </Input>
          </Block>
          <Block style={styles.text}> 
            <Input size={16} color="#32325D" style={styles.input}
              placeholder="Nhập lại mật khẩu mới"
              onChangeText={text => this.setState({ NewPassword2: text })}
              iconContent={
                <Icon style={{ marginRight: 5 }} name="key" size={26} color="#00CCCC" />
              }>
            </Input>
          </Block>
          <TouchableOpacity style={styles.commandButton} onPress={() => this.handleSubmit()}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
  },
  input: {
    width: width / 1.2,
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },

});
