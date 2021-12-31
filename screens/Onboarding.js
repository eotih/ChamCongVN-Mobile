import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from "react-native";
const { height, width } = Dimensions.get("screen");
import {Button} from 'react-native-paper'
import Images from "../constants/Images";
import useToken from "../services/useToken";

function Onboarding({ navigation }) {
  const { token, setToken } = useToken();
  return (
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
        <View style={{ zIndex: 2,justifyContent: 'space-around'}}>
          <View style={styles.title}>
            <View>
              <Text style={{ fontSize: 48, fontWeight: "bold", color: 'white', textAlign: 'center'}}>
                ChamCongVN
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>
                GIẢI PHÁP CHẤM CÔNG ONLINE.
              </Text>
            </View>
          </View>
          <View center>
            <Button
              style={styles.button}
              // onPress={() => token ? navigation.navigate("App") : navigation.navigate("Login")}
              onPress={() =>  navigation.navigate("App") }
            >
              <Text style={{fontSize: 18, color: 'black'}}>BẮT ĐẦU</Text>
            </Button>
          </View>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}

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
    height: height/20,
    marginTop: 30,
    backgroundColor: 'white'
  },
  logo: {
    width: width/1.5,
    height: height/2.6,
    zIndex: 2,
    position: 'relative',
    marginTop:height/4,
    alignSelf: 'center',
  },
  title: {
    marginTop: '10%'
  },
  subTitle: {
    marginTop: 20,
  }
});

export default Onboarding;
