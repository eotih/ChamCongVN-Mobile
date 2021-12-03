import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import Images from "../constants/Images";
import { DrawerItem as DrawerCustomItem } from '../components';

function CustomDrawerContent({ drawerPosition, navigation, profile, focused, state, ...rest }) {
  const screens = [
    "Home",
    "Chấm Công", 
    "Base Information",  
    "Phiếu Yêu Cầu",
    "Quản Lý Đơn Từ",
    "Quản Lý Báo Cáo",
    "Lịch Sử Chấm Công",
    "Thông Báo",
  ];
  const screens2 = [
    "Home", 
    "Base Information",  
    "Phiếu Yêu Cầu",
    "Quản Lý Đơn Từ",
    "Quản Lý Báo Cáo",
    "Lịch Sử Chấm Công",
    "Thông Báo",
  ];
    //get current date time
    var today = new Date();
  return (
    <Block
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Block flex={0.06} style={styles.header}>
        <Block style={styles.all}>
          <Block middle style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              style={styles.avatar}
            />
          </Block>
          <Block>
            <Text bold style={styles.textname}  >
             Tên:
            </Text>
            <Text  style={styles.text} >
              Chức vụ:
            </Text>
            <Text  style={styles.text} >
              Phòng ban:
            </Text>
          </Block>
        </Block>
        <Image styles={styles.logo} source={Images.ArgonLogo} />
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {today.getHours() >= 8 && today.getHours() < 21 ? (
            screens.map((l, i) => {
              return (
                <DrawerCustomItem
                  key={i}
                  title={l}
                  navigation={navigation}
                  focused={state.index === i ? true : false}
                />
              );
            })
          ) : (
            screens2.map((l, i) => {
              return (
                <DrawerCustomItem
                  key={i}
                  title={l}
                  navigation={navigation}
                  focused={state.index === i ? true : false}
                />
              );
            })
          )}
          
          <Block flex style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}>
            <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
            <Text color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }}>DOCUMENTATION</Text>
          </Block>
          <DrawerCustomItem title="Đăng Xuất" navigation={navigation} />
        </ScrollView>
      </Block>
    </Block>
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
  textname: {
    fontSize: 22,
    color: 'black',
    marginLeft: 10
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 5,
    justifyContent: "center"
  }
});

export default CustomDrawerContent;