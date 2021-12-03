import React from "react";
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity } from "react-native";
import data from "../../constants/datatest";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import CardHistory from "../../components/CardHistory"

class TimekeepingHistory extends React.Component {
  render() {
    return (<ScrollView>
      {data.map(data => <CardHistory
        key={data.id}
        data={data}
      />)}
    </ScrollView>
    );
  }
}
export default TimekeepingHistory;