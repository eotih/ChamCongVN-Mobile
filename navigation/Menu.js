import React from "react";
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

const { width, height } = Dimensions.get('window')

function CustomDrawerContent({ drawerPosition, navigation, profile, focused, state, ...rest }) {
  return (
    <View
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/imgs/logoChamCongVN.png")} />
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
  logo: {
    position: "relative",
    alignSelf: "flex-start",
    width: width * 0.5,
    height: height * 0.1,
    resizeMode: "contain",
  },
  all: {
    flexDirection: 'row',
  },
  header: {
    height: height / 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
  }
});

export default CustomDrawerContent;