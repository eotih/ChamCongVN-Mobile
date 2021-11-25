import React from 'react';
import {  Text, StyleSheet, Dimensions, View, SafeAreaView, TextInput } from 'react-native';
import axios from 'axios';

export default class MatKhau extends React.Component {
  render() {
    const { navigation } = this.props;
    

    return (
        <ScrollView>
        <Block style={styles.text}>
                <Icon name="user" size={32} color="#00CCCC" />
                <TextInput size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 15 }}
                  placeholder="Nhập mật khẩu">

                </TextInput>
              </Block>
              <Block style={styles.text}>
                <Icon name="user" size={32} color="#00CCCC" />
                <TextInput size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 15 }}
                  placeholder="Nhập mật khẩu mới">

                </TextInput>
              </Block>
              <Block style={styles.text}>
                <Icon name="user" size={32} color="#00CCCC" />
                <TextInput size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 15 }}
                  placeholder="Nhập mật khẩu mới">

                </TextInput>
              </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
},

});
