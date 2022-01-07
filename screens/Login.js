import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text
} from "react-native";
import { Images, argonTheme } from "../constants";
import useToken from "../services/useToken";
import axios from "../functions/BaseUrl";
import { Card, TextInput, Button, IconButton, Avatar } from 'react-native-paper';


function Login({ navigation }) {
  const { setToken } = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const handleShowPassword = () => {
    setIsHidePassword((show) => !show);
  };
  const handleLogin = () => {
    setToken("");
    setIsLoading(true);
    const { email, password } = account;
    if (email == "" || password == "") {
      alert("Please fill all fields");
      setIsLoading(false);
    } else {
      axios.post("Organization/Login", account)
        .then((res) => {
          const { Status, Message } = res.data;
          if (Status === 200) {
            alert("Đăng nhập thành công");
            setToken(Message);
            navigation.navigate("App");
          } else {
            setIsLoading(false);
            alert("Wrong email or password");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar hidden />
        <ImageBackground
          source={Images.Onboarding}
          style={{ height, width, zIndex: 1 }}
        >
          <View>
            <Image source={Images.Logo} style={styles.logo} />
          </View>
          <View style={styles.padded}>
            <View style={{ zIndex: 2, justifyContent: 'space-around' }}>
              <View style={styles.title}>
                <View>
                  <Text style={styles.text}>
                    Chấm Công VN
                  </Text>
                </View>
              </View>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <View center>
                  <TextInput
                    style={styles.input}
                    label="Email"
                    value={account.email}
                    onChangeText={(text) => setAccount({ ...account, email: text })}
                  />
                  <TextInput
                    label="Password"
                    style={styles.input}
                    secureTextEntry={isHidePassword}
                    right={<TextInput.Icon name={isHidePassword ? 'eye' : 'eye-off'} onPress={handleShowPassword} />}
                    value={account.password}
                    onChangeText={(text) => setAccount({ ...account, password: text })}
                  />
                  <Button style={styles.input} loading={isLoading} mode="contained" onPress={() => handleLogin()}>
                    Login
                  </Button>
                </View>
              </KeyboardAvoidingView>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  padded: {
    paddingHorizontal: 30,
    position: "relative",
    bottom: 15,
    zIndex: 2,
    flex: 1,
    justifyContent: 'space-between'
  },
  button: {
    width: width - 70,
    height: height / 20,
    marginTop: 30,
    backgroundColor: 'white'
  },
  logo: {
    width: width / 2,
    height: height / 3.5,
    zIndex: 2,
    position: 'relative',
    marginTop: height / 4,
    alignSelf: 'center',
  },
  title: {
    marginTop: '10%'
  },
  subTitle: {
    marginTop: 20,
  },
  input: {
    margin: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  text: {
    fontSize: 42,
    fontWeight: "bold",
    color: 'white',
    paddingBottom: 20,
    textAlign: 'center'
  }
});

export default Login;