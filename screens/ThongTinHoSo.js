import React from 'react';
import {  Text, StyleSheet, Dimensions, View } from 'react-native';
const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants';
import axios from 'axios';
import { HeaderHeight } from "../constants/utils";

export default class ThongTinHoSo extends React.Component {
  render() {
    const { navigation, route } = this.props;
    return (
     <View> 
       <Text>Thông Tin Hồ Sơ</Text> 
     </View>
    );
  }
}

const styles = StyleSheet.create({

});
