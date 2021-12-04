import React from "react";
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity } from "react-native";
import { GetAllTimeKeepingByEmployeeID } from "../../functions/TimeKeeper";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import CardHistory from "../../components/CardHistory"

class TimekeepingHistory extends React.Component {
  constructor() {
    super();
    this.state = {
      Time: [],
    }
  }
  componentDidMount() {
    GetAllTimeKeepingByEmployeeID(1).then(res => {
      this.setState({
        Time: res
      })
    })
  }
  render() {
    return (<ScrollView>
      {this.state.Time.map(data => <CardHistory
        key={data.$id}
        data={data}
      />)}
    </ScrollView>
    );
  }
}
export default TimekeepingHistory;