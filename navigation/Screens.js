import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import Home from "../screens/Home";
import BaseInformation from "../screens/Profile/BaseInformation";
import Account from "../screens/Profile/Account";
import Onboarding from "../screens/Onboarding";
import Statistics from "../screens/Statistics";

// import Profile from "../screens/Profile";
import checkCamera from "../screens/Timekeeping/Camera"
import Application from "../screens/Application/Application"
import Login from "../screens/Login";
import Notification from "../screens/Notification"
import ApplicationManagement from "../screens/Application/Manage";
//salarytable
import Salarytable from "../screens/Salary/SalaryTable"
import ListSalary from "../screens/Salary/ListSalary";
import useToken from "../services/useToken";
// drawer
import CustomDrawerContent from "./Menu";
import Timekeepinghistory from "../screens/Timekeeping/Timekeepinghistory";
// header for screens
import { Header } from "../components";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TimekeepinghistoryStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Timekeeping History"
        component={Timekeepinghistory}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Timekeeping History"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }

        }}
      />
    </Stack.Navigator>
  );
}
function ProfileStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={BaseInformation}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Password"
              back
              black
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}
function ApplicationmanagementStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Management Application"
        component={ApplicationManagement}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Management Application" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}
function SalarytableStack(props) {
  return (

    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Salary Table"
        component={Salarytable}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Salary statistics" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="ListSalary"
        component={ListSalary}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="ListSalary"
              back
              black
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}
function ApplicationStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Application"
        component={Application}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Application" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}
function checkCameraStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Timekeeping"
        component={checkCamera}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Check-in/out" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="checkCameraaa"
        component={checkCamera}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}
function NotificationStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Notification"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}
export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              account='{account.employees}'
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Statistics"
        component={Statistics}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Thống kê checkin"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
        }}
      />
      <Stack.Screen
        name="Management Application"
        component={ApplicationManagement}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Management Application"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
        }}
      />
    </Stack.Navigator>
  );

}
export function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="New Application" component={ApplicationStack} />
      <Drawer.Screen name="Management Application" component={ApplicationmanagementStack} />
      <Drawer.Screen name="Timekeeping" component={checkCameraStack} />
      <Drawer.Screen name="Timekeeping History" component={TimekeepinghistoryStack} />
      <Drawer.Screen name="Notification" component={NotificationStack} />
      <Drawer.Screen name="Salary Table" component={SalarytableStack} />
    </Drawer.Navigator>
  );
}

