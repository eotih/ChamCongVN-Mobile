import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  TextInput,
} from "react-native";
import { Button, Input } from "../components";
import { Images, argonTheme } from "../constants";
import useToken from "../services/useToken";
import axios from "../functions/BaseUrl";
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'

const { width, height } = Dimensions.get("screen");

function Login({ navigation }) {
  const { setToken } = useToken();
  const [account, setAccount] = React.useState({
    email: "",
    password: "",
  });
  const login = () => {
    axios
      .post(`Organization/Login`, account)
      .then((res) => {
        if (res.data.Status === 200) {
          alert("Đăng nhập thành công");
          setToken(res.data.Message);
          navigation.navigate("App");
        } else {
          alert("Đăng nhập thất bại, vui lòng thử lại sau");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ScrollView>
      <View >
        <StatusBar hidden />
        <ImageBackground
          source={{ uri: 'https://4.bp.blogspot.com/-N0nLvYFDWXQ/VYJPitz6ecI/AAAAAAAABIg/jvYenaVkD3U/s1600/hinh-nen-iphone-4-nhung-bai-bien-dep-065-5.jpg' }}
          style={{ width:width, height:'100%', zIndex: 1 }}
        >
          <View style={styles.loginContainer} >
            <View style={{ marginTop: width /2, alignItems: 'center' }}>
              <Text style={{ fontSize: 36, color: 'white' }}>
                ChamCongVN
              </Text>
            </View>
            <View style={styles.cardContainer}>
              <Card style={styles.card}>
                <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }} >
                  Login to ChamCongVN
                </Text>
                <View style={styles.input}>
                  <Text style={styles.text}>
                    Email Address
                  </Text>
                  <Input
                    onChangeText={(text) => {
                      setAccount({ ...account, email: text });
                    }}
                    placeholder="Email"
                    iconContent={
                      <Icon
                        size={22}
                        color="#3366CC"
                        name="envelope"
                        style={styles.icon}
                      />
                    }
                  />
                </View>
                <View style={styles.input}>
                  <Text style={styles.text}>
                    Password
                  </Text>
                  <Input 
                  keyboardType="email"
                    password
                    onChangeText={(text) => {
                      setAccount({ ...account, password: text });
                    }}
                    placeholder="Password"
                    iconContent={
                      <Icon
                        size={22}
                        color="#3366CC"
                        name="lock"
                        style={styles.icon}
                      />
                    }
                  />
                </View>
                <View >
                  <Button
                    onPress={() => login()}
                    style={styles.createButton}
                  > 
                    <Text style={{fontSize: 18, fontWeight: "bold", color: 'white'}}>
                      LOGIN
                    </Text>
                  </Button>
                </View>
              </Card>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
  },
  cardContainer: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
  card: {
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: height /7
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    marginVertical: 20,
    borderRadius: 20,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 15,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#FF9933'
  },
});

export default Login;