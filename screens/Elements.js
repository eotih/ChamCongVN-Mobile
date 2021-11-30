import React from "react";
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";
import datatest from "../constants/datatest";
import CardHistory from "../components/CardHistory"

const { width } = Dimensions.get("screen");

class Elements extends React.Component {
  render() {
    return (<ScrollView>
      {datatest.map(data => <CardHistory
        key={data.Date}
        Date={data.Date}
        image={data.image}
        TimeCheckin={data.TimeCheckin}
        TimeCheckout={data.TimeCheckout}
        DeviceCheckin={data.DeviceCheckin}
        DeviceCheckout={data.DeviceCheckout}
      />)}
    </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  Card: {
    // position: "relative",
    marginHorizontal: theme.SIZES.BASE,
    borderRadius: 15,
    marginTop: 15,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  Orange: {
    backgroundColor: 'orange',
    flexDirection: 'row',
    borderRadius: 6,
    alignItems: 'center',
  },
  blue: {
    backgroundColor: '#00CCFF',
    flexDirection: 'row',
    borderRadius: 6,
    alignItems: 'center',
  },
  date: {
    marginLeft: 30,
    fontSize: 20,
    textAlign: 'center',
  },
  type: {
    backgroundColor: 'white',
    marginLeft: 187,
    fontSize: 20
  },
  typelate: {
    backgroundColor: 'white',
    marginLeft: 217,
    fontSize: 20
  },
  avatarContainer: {
    flexDirection: 'row'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 62,
    borderWidth: 0,
    alignSelf: 'center'
  },
  details: {
    marginLeft: 15,
  },
  time: {
    marginLeft: 55
  },
});
export default Elements;