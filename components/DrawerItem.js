import React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from 'react-native-vector-icons/FontAwesome';
import argonTheme from "../constants/Theme";

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Home":
        return (
          <Icon
            name="home"
            size={18}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "Lịch Sử Chấm Công":
        return (
          <Icon
            name="history"
            size={18}
            color="#525F7F"
          />
        );
      case "Quản Lý Đơn Từ":
        return (
          <Icon
            name="clipboard"
            size={18}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "Chấm Công":
        return (
          <Icon
            name="camera"
            size={18}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
        case "Thông Báo":
        return (
          <Icon
            name="bell"
            size={18}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "Phiếu Yêu Cầu":
        return (
          <Icon
            name="align-justify"
            size={18}
            color={focused ? "white" : argonTheme.COLORS.WARNING}
          />
        );
      case "Base Information":
        return (
          <Icon
            name="user"
            size={18}
            color={focused ? "white" : argonTheme.COLORS.INFO}
          />
        );
      case "Quản Lý Báo Cáo":
        return (
          <Icon
            name="user-circle"
            size={18}
            color={focused ? "white" : argonTheme.COLORS.INFO}
          />
        );
      case "Đăng Xuất":
        return (<Icon
          name="sign-out"
          size={18}
          color={focused ? "white" : "rgba(0,0,0,0.5)"}
        />);
      case "Log out":
        return <Icon />;
      default:
        return null;
    }
  };

  render() {
    const { focused, title, navigation } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() =>
          title == "Đăng Xuất"
            ? Linking.openURL(
                "https://demos.creative-tim.com/argon-pro-react-native/docs/"
              ).catch(err => console.error("An error occurred", err))
            : navigation.navigate(title)
        }
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : "rgba(0,0,0,0.5)"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;
