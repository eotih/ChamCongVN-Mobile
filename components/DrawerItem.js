import React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from 'react-native-vector-icons/FontAwesome';
import argonTheme from "../constants/Theme";
import useToken from "../services/useToken";

function DrawerItem({ focused, title, navigation }) {
  const renderIcon = () => {

    switch (title) {
      case "Home":
        return (
          <Icon
            name="home"
            size={18}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "Timekeeping History":
        return (
          <Icon
            name="history"
            size={18}
            color="#525F7F"
          />
        );
      case "Management Application":
        return (
          <Icon
            name="clipboard"
            size={18}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "Timekeeping":
        return (
          <Icon
            name="camera"
            size={18}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "Notification":
        return (
          <Icon
            name="bell"
            size={18}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "New Application":
        return (
          <Icon
            name="align-justify"
            size={18}
            color={focused ? "white" : argonTheme.COLORS.WARNING}
          />
        );
      case "Profile":
        return (
          <Icon
            name="user"
            size={18}
            color={focused ? "white" : argonTheme.COLORS.INFO}
          />
        );
        case "Salary Table":
          return (
            <Icon
              name="credit-card"
              size={18}
              color="#388e3c"
            />
          );
      case "Log Out":
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

  const { removeToken } = useToken();

  const containerStyles = [
    styles.defaultStyle,
    focused ? [styles.activeStyle, styles.shadow] : null
  ];

  return (
    <TouchableOpacity
      style={{ height: 60 }}
      onPress={() => {
        if (title === "Log Out") {
          removeToken();
          navigation.navigate("Login");
        } else if (title === "Log out") {
          removeToken();
          navigation.navigate("Login");
        } else {
          navigation.navigate(title);
        }
      }}
    >
      <Block flex row style={containerStyles}>
        <Block middle flex={0.1} style={{ marginRight: 5 }}>
          {renderIcon()}
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