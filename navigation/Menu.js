import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  Text,
  Dimensions
} from "react-native";
import Images from "../constants/Images";
import { DrawerItem as DrawerCustomItem } from '../components';
import { accountContext } from '../context/Hooks';

const { width, height } = Dimensions.get('window')

function CustomDrawerContent({ drawerPosition, navigation, profile, focused, state, ...rest }) {
  const [account, setAccount] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const acc = await accountContext();
      setAccount(acc.employees);
      setIsLoading(false);
    }
    fetchData();
  }, [account])
  if(isLoading) {
    return null;
  }
  return (
    <View
    style={styles.container}
    forceInset={{ top: 'always', horizontal: 'never' }}
  >
    <View style={styles.header}>
      <View style={styles.all}>
        <View middle style={styles.avatarContainer}>
          {account.Employee && (
            <Image
              source={{ uri: account.Employee.Image }}
              style={styles.avatar}
            />
          )}
        </View>
        <View>
          <Text style={styles.textName}  >
            Tên: {account.Employee.FullName}
          </Text>
          <Text style={styles.text} >
            Chức vụ: {account.PositionName}
          </Text>
          <Text style={styles.text} >
            Phòng ban: {account.DepartmentName}
          </Text>
        </View>
      </View>
      <Image styles={styles.logo} source={Images.ArgonLogo} />
    </View>
    <SafeAreaView style={{ paddingLeft: 8, paddingRight: 14, flex: 1 }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <DrawerCustomItem title="Home" focused={state.index === 0 ? true : false} navigation={navigation} />
        <DrawerCustomItem title="Profile" focused={state.index === 1 ? true : false} navigation={navigation} />
        <View style={{ marginVertical: 8, paddingHorizontal: 8, flex: 1 }}>
          <View style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
        </View>
        <DrawerCustomItem title="New Application" focused={state.index === 2 ? true : false} navigation={navigation} />
        <DrawerCustomItem title="Quản Lý Đơn Từ" focused={state.index === 3 ? true : false} navigation={navigation} />
        <View style={{ marginVertical: 8, paddingHorizontal: 8, flex: 1 }}>
          <View style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
        </View>
        <DrawerCustomItem title="Chấm Công" focused={state.index === 5 ? true : false} navigation={navigation} />
        <DrawerCustomItem title="Lịch Sử Chấm Công" focused={state.index === 6 ? true : false} navigation={navigation} />

        <View style={{ marginVertical: 8, paddingHorizontal: 8, flex: 1 }}>
          <View style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
        </View>
        <DrawerCustomItem title="Thông Báo" focused={state.index === 7 ? true : false} navigation={navigation} />
        <DrawerCustomItem title="Bảng Lương" focused={state.index === 8 ? true : false} navigation={navigation} />
        <DrawerCustomItem title="Đăng Xuất" navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    position: "relative",
    alignSelf: "flex-start"
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 62,
    borderWidth: 0
  },
  all: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10
  },
  textName: {
    width: width / 2,
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    justifyContent: "center"
  }
});

export default CustomDrawerContent;