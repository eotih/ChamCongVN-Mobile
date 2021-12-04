import React from "react";
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity } from "react-native";
import data from "../../constants/datatest";
import CardHistory from "../../components/CardHistory"

class Timekeepinghistory extends React.Component {
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
export default Timekeepinghistory;