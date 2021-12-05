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
import { Block, Text, theme } from "galio-framework";
import axios from 'axios';
import { HeaderHeight } from "../../constants/utils";
import { Button, Input } from "../../components";

const thumbMeasure = (width - 48 - 32) / 3;

export default class ThongTinHoSo extends React.Component {

  constructor() {
    super();
    this.state = {
      User: [],
    }
  }

  handleSubmit(event) {
    console.log(this.state.User)
    // axiosBaseURL.post('API/AddOrEditOrder', {
    //   IdProduct: this.state.IdProduct,
    //   IdUser: this.state.IdUser,
    //   IdState: this.state.IdState,
    //   IdPayment: this.state.IdPayment,
    //   Address: this.state.Address,
    //   Details: this.state.Details,
    //   Price: this.state.Price,
    //   Quantity: this.state.Quantity,
    //   PriceSale: this.state.PriceSale,
    //   Total: this.state.Total,
    // })
    //   .then(res => {
    //     if (res.data.Status === 'Success') {
    //       alert('Đặt thành công!!');
    //     } else {
    //       alert('Đặt thất bại');
    //     }
    //   })
  }
  componentDidMount(){
    this.setState({
      User: this.props.route.params.Employee
    })
  }


  render() {
    const { navigation, route } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width }}
      >
        <Block flex style={styles.profileCard}>
          <Block middle style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              style={styles.avatar}
            />
          </Block>
          <Block middle style={styles.nameInfo1}>
            <Text bold size={26} color="#32325D">
              Họ và tên
            </Text>
          </Block>
          <Block flex>
            <Block middle style={styles.nameInfo}>
              <Block style={styles.text}>
                <Input size={16} color="#32325D" style={styles.input}
                  placeholder="Nick Name"
                  iconContent={
                    <Icon style={{ marginRight: 5 }} name="user" size={26} color="#00CCCC" />
                  }>
                </Input>
              </Block>
              <Block style={styles.text}>
                <Input size={16} color="#32325D" style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  iconContent={
                    <Icon style={{ marginRight: 5 }} name="envelope" size={26} color="#00CCCC" />
                  }>
                </Input>
              </Block>
              <Block style={styles.text}>
                <Input size={16} color="#32325D" style={styles.input}
                  placeholder="SDT"
                  keyboardType="number-pad"
                  iconContent={
                    <Icon style={{ marginRight: 5 }} name="phone" size={26} color="#00CCCC" />
                  }>
                </Input>
              </Block>
              <Block style={styles.text}>
                <Input size={16} color="#32325D" style={styles.input}
                  placeholder="Dịa chỉ"
                  keyboardType="number-pad"
                  onChangeText={text => this.setState({ User: text })}
                  iconContent={
                    <Icon style={{ marginRight: 5 }} name="map-marker" size={26} color="#00CCCC" />
                  }>
                </Input>
              </Block>
            </Block>
          </Block>
          <Block style={styles.info}>
            <Block
              middle
              row
              space="evenly"
              style={{ marginTop: 20, paddingBottom: 24 }}
            >
            </Block>
          </Block>
          <TouchableOpacity style={styles.commandButton} onPress={() => this.handleSubmit()}>
            <Text style={styles.textButton} >SUBMIT</Text>
          </TouchableOpacity>
        </Block>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  textButton:{
    fontSize:18,
    color: 'white'
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderRadius: 15,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
    borderWidth: 0.5
  },
  info: {
    paddingHorizontal: 40
  },
  input: {
    width: width / 1.2,
  },
  avatarContainer: {
    position: "relative",
    marginTop: -60,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 20,
    alignItems: "flex-start",
  },
  text: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  nameInfo1: {
    marginTop: 5,
    flexDirection: 'row'
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});
