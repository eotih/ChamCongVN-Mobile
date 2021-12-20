import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import Images from "../constants/Images";
import { DrawerItem as DrawerCustomItem, Select } from '../components';

function CustomDrawerContent({ drawerPosition, navigation, profile, focused, state, ...rest }) {
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
            <Text style={styles.text} >
              Chức vụ:
            </Text>
            <Text style={styles.text} >
              Phòng ban:
            </Text>
          </Block>
        </Block>
        <Image styles={styles.logo} source={Images.ArgonLogo} />
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <DrawerCustomItem title="Home" focused={state.index === 0 ? true : false} navigation={navigation} />
          <DrawerCustomItem title="Profile" focused={state.index === 1 ? true : false} navigation={navigation} />
          <Block flex style={{ marginVertical: 8, paddingHorizontal: 8 }}>
            <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
          </Block>
          <DrawerCustomItem title="New Application" focused={state.index === 2 ? true : false} navigation={navigation} />
          <DrawerCustomItem title="Quản Lý Đơn Từ" focused={state.index === 3 ? true : false} navigation={navigation} />
          <DrawerCustomItem title="Quản Lý Báo Cáo" focused={state.index === 4 ? true : false} navigation={navigation} />
          <Block flex style={{ marginVertical: 8, paddingHorizontal: 8 }}>
            <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
          </Block>
          <DrawerCustomItem title="Chấm Công" focused={state.index === 5 ? true : false} navigation={navigation} />
          <DrawerCustomItem title="Lịch Sử Chấm Công" focused={state.index === 6 ? true : false} navigation={navigation} />

          <Block flex style={{ marginVertical: 8, paddingHorizontal: 8 }}>
            <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
          </Block>
          <DrawerCustomItem title="Thông Báo" focused={state.index === 7 ? true : false} navigation={navigation} />
          <DrawerCustomItem title="Bảng Lương" focused={state.index === 8 ? true : false} navigation={navigation} />
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