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
import axios from 'axios';
import { HeaderHeight } from "../../constants/utils";
import { Button, Input } from "../../components";


export default class MatKhau extends React.Component {
  render() {
    const { navigation, route } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width }}
      >
        <Text size={22} style={{textAlign: 'center'}}> Bạn muốn thay đổi mật khẩu</Text>
        <Block flex style={styles.profileCard}>

          <Block style={styles.text}>
            <Input size={16} color="#32325D" style={styles.input}
              placeholder="Nhập mật khẩu cũ"
              iconContent={
                <Icon style={{marginRight: 5}} name="key" size={26} color="#00CCCC" />
              }>
            </Input>
          </Block>
          <Block style={styles.text}>
            <Input size={16} color="#32325D" style={styles.input}
              placeholder="Nhập mật khẩu mới"
              iconContent={
                <Icon style={{marginRight: 5}} name="key" size={26} color="#00CCCC" />
              }>
            </Input>
          </Block>
          <Block style={styles.text}>
            <Input size={16} color="#32325D" style={styles.input}
              placeholder="Nhập mật khẩu mới"
              iconContent={
                <Icon style={{marginRight: 5}} name="key" size={26} color="#00CCCC" />
              }>
            </Input>
          </Block>
          <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
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
    width: width/1.2,
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