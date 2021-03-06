import React, { useState, BackHandler, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  TouchableOpacity,
  Modal,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import { Card, Title, Text, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { accountContext } from "../context/Hooks";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getEmployees } from "../functions/Employee";
import jwtDecode from "jwt-decode";

const { width, height } = Dimensions.get("screen");

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataEmp, setDataEmp] = useState([]);
  useEffect(() => {
    const jsonValue = AsyncStorage.getItem('token', (err, result) => {
      const decoded = jwtDecode(result);
      const EmployeeID = decoded.nameid[2];
      getEmployees(EmployeeID).then(response => { setDataEmp(response); setLoading(false) });
    })
  }, [])
  if (loading) {
    return (
      // set loading in center of screen
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../assets/imgs/logo.png")}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Loading...</Text>
      </View>
    );
  }
  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          {dataEmp && (<View style={styles.info}>
            <View style={{ alignItems: "center" }}>
              <Image
                style={{
                  width: width / 4,
                  height: height / 7,
                  borderRadius: 10,
                  marginBottom: 20,
                }}
                source={{ uri: dataEmp.EmployeeImage }}
              ></Image>
            </View>
            <View style={styles.spaceBetween}>
              <Text style={styles.textTitleInfo}>T??n:</Text>
              <Text style={styles.textInfo}>{dataEmp.EmployeeName}</Text>
            </View>
            <View style={styles.spaceBetween}>
              <Text style={styles.textTitleInfo}>V??? tr??:</Text>
              <Text style={styles.textInfo}>{dataEmp.PositionName}</Text>
            </View>
            <View style={styles.spaceBetween}>
              <Text style={styles.textTitleInfo}>Ph??ng ban:</Text>
              <Text style={styles.textInfo}>{dataEmp.DepartmentName}</Text>
            </View>
            <View style={styles.spaceBetween}>
              <Text style={styles.textTitleInfo}>Nh??m:</Text>
              <Text style={styles.textInfo}>{dataEmp.GroupName}</Text>
            </View>
            <View style={styles.spaceBetween}>
              <Text style={styles.textTitleInfo}>C??ng vi???c:</Text>
              <Text style={styles.textInfo}>{dataEmp.WorkName}</Text>
            </View>
          </View>)}
          <View
            style={{
              backgroundColor: "white",
              paddingBottom: 30,
              padding: 10,
            }}
          >
            <View style={styles.card}>
              <View style={styles.spaceBetween}>
                <View style={{ flexDirection: "row", width: '70%' }}>
                  <Icon style={styles.icon} name="camera" color="red"></Icon>
                  <View>
                    <Title>
                      Check-in statistics
                    </Title>
                    <Text>Check-in infomation</Text>
                  </View>
                </View>
                <View>
                  <IconButton
                    onPress={() => navigation.navigate("Statistics")}
                    size={38}
                    icon="arrow-right-circle"
                  ></IconButton>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.spaceBetween}>
                <View style={{ flexDirection: "row", width: '70%' }}>
                  <Icon
                    style={styles.icon}
                    name="wpforms"
                    color="#00bcd4"
                  ></Icon>
                  <View>
                    <Title>
                      Absent applications
                    </Title>
                    <Text>2 ????n</Text>
                  </View>
                </View>
                <View>
                  <IconButton
                    onPress={() => navigation.navigate("Management Application")}
                    size={38}
                    icon="arrow-right-circle"
                  ></IconButton>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.spaceBetween}>
                <View style={{ flexDirection: "row", width: '70%' }}>
                  <Icon
                    style={styles.icon}
                    name="wpforms"
                    color="#000000"
                  ></Icon>
                  <View>
                    <Title>
                      Overtime application
                    </Title>
                    <Text>2 ????n</Text>
                  </View>
                </View>
                <View>
                  <IconButton
                    onPress={() => navigation.navigate("Management Application")}
                    size={38}
                    icon="arrow-right-circle"
                  ></IconButton>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.spaceBetween}>
                <View style={{ flexDirection: "row", width: '70%' }}>
                  <Icon
                    style={styles.icon}
                    name="briefcase"
                    color="#e91e63"
                  ></Icon>
                  <View>
                    <Title>Seniority</Title>
                    <Text>36 ng??y</Text>
                  </View>
                </View>
                <View>
                  <IconButton
                    onPress={() => setModalVisible(true)}
                    size={38}
                    icon="arrow-right-circle"
                  ></IconButton>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.spaceBetween}>
                <View style={{ flexDirection: "row", width: '70%' }}>
                  <Icon
                    style={styles.icon}
                    name="camera"
                    color="#9c27b0"
                  ></Icon>
                  <View>
                    <Title>Summary</Title>
                    <Text>Summary infomation</Text>
                  </View>
                </View>
                <View>
                  <IconButton
                    onPress={() => setModalVisible(true)}
                    size={38}
                    icon="arrow-right-circle"
                  ></IconButton>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Modal
              style={{ backgroundColor: "white" }}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Card
                style={{
                  marginTop: height / 3,
                  backgroundColor: "#89d5c9",
                  marginHorizontal: 20,
                }}
              >
                <ImageBackground source={{
                  uri: 'https://i.pinimg.com/564x/91/d8/16/91d8168b2659797cb9471d6e0796120c.jpg',
                }}
                  style={{ height: height / 2 }}>

                  <IconButton
                    style={styles.iconButton}
                    icon="window-close"
                    onPress={() => setModalVisible(!modalVisible)}
                    color="white"
                  />
                  <View style={styles.avatarContainer}>
                    <Image
                      source={{
                        uri: "https://i.pinimg.com/564x/91/d8/16/91d8168b2659797cb9471d6e0796120c.jpg",
                      }}
                      style={styles.avatar}
                    />
                  </View>
                  <Text style={styles.textName}>Ho va ten</Text>
                  <Text
                    style={{ fontSize: 18, textAlign: "center", color: "white" }}
                  >
                    C???m ??n b???n ???? ????ng h??nh c??ng c??ng ty
                  </Text>
                  <View
                    style={{
                      alignSelf: "center",
                      marginVertical: 20,
                      color: "white",
                    }}
                  >
                    <Text style={{ color: "white" }}>T???ng s??? ng??y l??m vi???c</Text>
                    <Text style={{ textAlign: "center", color: "white" }}>
                      36 ng??y
                    </Text>
                  </View>
                </ImageBackground>
              </Card>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fac172",
  },
  card: {
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
  icon: {
    fontSize: 24,
    alignSelf: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
  avatarContainer: {
    position: "relative",
    alignSelf: "center",
    marginTop: -80,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 62,
    borderWidth: 0,
  },
  iconButton: {
    alignSelf: "flex-end",
  },
  textName: {
    fontSize: 26,
    textAlign: "center",
    marginVertical: 20,
    color: "white",
  },
  orange: {
    color: "#fac172",
  },
  info: {
    flexDirection: "column",
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "white",
    paddingHorizontal: 30,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInfo: {
    fontSize: 18,
    paddingVertical: 5,
  },
  textTitleInfo: {
    fontSize: 18,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
