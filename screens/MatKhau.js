import React from 'react';
import {  Text, StyleSheet, Dimensions, View, SafeAreaView, TextInput } from 'react-native';
import axios from 'axios';

export default class MatKhau extends React.Component {

    constructor() {
        super();
        this.state = {
            Account: [],
        }
    }
    onChangeText(){
        console.log("hahahaha")
    }
    componentDidMount() {
        console.log(this.props.route.params.MaND)
        axios.get("https://api.chamcongvn.com/Api/User/getbyIdtaikhoan?id="+ this.props.route.params.MaND)
            .then(response => {
                this.setState({
                    Account: response.data
                });
            })
    }
  render() {
    const { navigation } = this.props;
    

    return (
        <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeText}
          value={this.state.Account.Username}
        />
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeText}
          value={this.state.Account.Password}
          placeholder="useless placeholder"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

});
