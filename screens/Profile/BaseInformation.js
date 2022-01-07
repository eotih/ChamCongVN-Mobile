import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Button,
  Image,
  View,
  ScrollView,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Images, argonTheme } from "../../constants";
import { HeaderHeight } from "../../constants/utils";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getEmployees } from "../../functions/Employee";
import { GetAccountByID } from "../../functions/TimeKeeper"
import jwtDecode from "jwt-decode";

const thumbMeasure = (width - 48 - 32) / 3;
const { width, height } = Dimensions.get("screen");
function BaseInformation({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [dataEmp, setDataEmp] = useState([]);
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [accountID, setAccountID] = useState('');
  useEffect(() => {
    const jsonValue = AsyncStorage.getItem('token', (err, result) => {
      const decoded = jwtDecode(result);
      const EmployeeID = decoded.nameid[2];
      const MaND = decoded.nameid[2];
      setAccountID(MaND);
      getEmployees(EmployeeID).then(response => setDataEmp(response));
      GetAccountByID(MaND).then(res => { setName(res.Employee.FullName); setPwd(res.Account.Password); setLoading(false)});
    })
  }, [])
  const {
    Employee,
    FullName,
    PositionName,
    GroupName,
    WorkName,
    DepartmentName,
  } = dataEmp;
  const renderInformation = () => {
    return (
      <ScrollView>
        <View style={styles.profile}>
          {Employee && (<View>
            <ImageBackground
              source={Images.ProfileBackground}
              style={styles.profileContainer}
              imageStyle={styles.profileBackground}
            >
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ width, marginTop: "25%" }}
              >
                <View style={styles.profileCard}>
                  <View style={styles.avatarContainer}>
                    <Image
                      source={{ uri: Employee.Image }}
                      style={styles.avatar}
                    />
                  </View>
                  <View middle style={styles.nameInfo1}>
                    <Text style={{ fontSize: 26 }} color="#32325D">
                      {FullName}
                    </Text>
                  </View>
                  <View>
                    <View style={styles.nameInfo}>
                      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                        Thông tin cá nhân{" "}
                      </Text>
                      <View style={styles.card}>
                        <View style={styles.text}>
                          <Icon
                            name="user"
                            size={24}
                            color="#00CCCC"
                            style={{ marginLeft: 10, marginTop: -3, paddingBottom: 10, }}
                          />
                          <Text
                            size={18}
                            color="#32325D"
                            style={{ marginLeft: 13 }}
                          >
                            NickName: {Employee.NickName}
                          </Text>
                        </View>
                        <View style={styles.text}>
                          <Icon
                            name="phone"
                            size={24}
                            color="#00CCCC"
                            style={{ marginLeft: 10, marginTop: -3, paddingBottom: 10, }}
                          />
                          <Text
                            size={18}
                            color="#32325D"
                            style={{ marginLeft: 10 }}
                          >
                            Số điện thoại: {Employee.Phone}
                          </Text>
                        </View>
                        <View style={styles.text}>
                          <Icon
                            name="user"
                            size={24}
                            color="#00CCCC"
                            style={{ marginLeft: 10, marginTop: -3, paddingBottom: 10, }}
                          />
                          <Text
                            size={18}
                            color="#32325D"
                            style={{ marginLeft: 13 }}
                          >
                            Giới tính: {Employee.Gender}
                          </Text>
                        </View>
                        <View style={styles.text}>
                          <Icon
                            name="globe"
                            size={24}
                            color="#00CCCC"
                            style={{ marginLeft: 10, marginTop: -3, paddingBottom: 10, }}
                          />
                          <Text
                            size={18}
                            color="#32325D"
                            style={{ marginLeft: 10 }}
                          >
                            Địa chỉ: {Employee.Address}
                          </Text>
                        </View>
                      </View>
                      <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10, }}>
                        Thông tin công việc{" "}
                      </Text>
                      <View style={styles.card}>
                        <View style={styles.text}>
                          <Icon
                            name="calendar"
                            size={24}
                            color="#00CCCC"
                            style={{ marginLeft: 10, marginTop: -3, paddingBottom: 10, }}
                          />
                          <Text
                            size={18}
                            color="#32325D"
                            style={{ marginLeft: 10 }}
                          >
                            Tên công việc: {WorkName}
                          </Text>
                        </View>
                        <View style={styles.text}>
                          <Icon
                            name="users"
                            size={24}
                            color="#00CCCC"
                            style={{ marginLeft: 10, marginTop: -3, paddingBottom: 10, }}
                          />
                          <Text
                            size={18}
                            color="#32325D"
                            style={{ marginLeft: 10 }}
                          >
                            Nhóm: {GroupName}
                          </Text>
                        </View>
                        <View style={styles.text}>
                          <Icon
                            name="user"
                            size={24}
                            color="#00CCCC"
                            style={{ marginLeft: 10, marginTop: -3, paddingBottom: 10, }}
                          />
                          <Text
                            size={18}
                            color="#32325D"
                            style={{ marginLeft: 15 }}
                          >
                            Chức vụ: {PositionName}
                          </Text>
                        </View>
                        <View style={styles.text}>
                          <Icon
                            name="briefcase"
                            size={24}
                            color="#00CCCC"
                            style={{ marginLeft: 10, marginTop: -3, paddingBottom: 10, }}
                          />
                          <Text
                            size={18}
                            color="#32325D"
                            style={{ marginLeft: 10 }}
                          >
                            Phòng ban: {DepartmentName}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={styles.Button}
                      onPress={() =>
                        navigation.navigate("Account", { MaND: accountID, Name: name, password: pwd })
                      }
                    >
                      <Text
                        size={18}
                        style={{ textAlign: "center" }}
                        color="white"
                      >
                        Đổi mật khẩu
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </ImageBackground>
          </View>)}
        </View>
      </ScrollView>
    );
  };

  if (loading) {
    return (
      // set loading in center of screen
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../../assets/imgs/logo.png")}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Loading...</Text>
      </View>
    );
  }
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width }}
      >
        {dataEmp ? renderInformation() : <View></View>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1,
  },
  profileContainer: {
    width: width,
    padding: 0,
    zIndex: 1,
  },
  profileBackground: {
    width: width,
    height: height / 2,
  },
  profileCard: {
    // position: "relative",
    padding: 20,
    marginHorizontal: 15,
    marginTop: 65,
    marginBottom: 30,
    borderRadius: 12,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 2,
  },
  card: {
    borderRadius: 12,
    backgroundColor: "white",
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginVertical: 10,
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80,
    alignSelf: "center",
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 3,
    borderColor: "white",
  },
  nameInfo: {
    marginTop: 20,
    alignItems: "flex-start",
  },
  text: {
    flexDirection: "row",
    width: width / 1.2,
    padding: 10,
    marginTop: 5,
  },
  nameInfo1: {
    marginTop: 5,
    alignSelf: "center",
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  Button: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#00CCFF",
    padding: 10,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
});

export default BaseInformation;
