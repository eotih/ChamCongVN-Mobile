import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import BaseInformation from "../screens/Profile/BaseInformation";
import Account from "../screens/Profile/Account";
import DSNguoiDung from "../screens/DSNguoiDung";
import Onboarding from "../screens/Onboarding";
import AbsentApplications from "../components/Applications/AbsentApplications"

// import Profile from "../screens/Profile";
import checkCamera from "../screens/Timekeeping/Camera"
import Application from "../screens/Application/Application"
import Register from "../screens/Register";
import Articles from "../screens/Articles";
import Notification from "../screens/Notification"
//salarytable
import Salarytable from "../screens/Salary/SalaryTable"
import ListSalary from "../screens/Salary/ListSalary";
// drawer
import CustomDrawerContent from "./Menu";
import Timekeepinghistory from "../screens/Timekeeping/Timekeepinghistory";

// header for screens
import { Header } from "../components";
import { argonTheme, tabs } from "../constants";


const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TimekeepinghistoryStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Lịch Sử Chấm Công"
        component={Timekeepinghistory}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Lịch Sử Chấm Công"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }

        }}
      />
      <Stack.Screen
        name="Elements"
        component={Timekeepinghistory}
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
          headerTransparent: true
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
              title="Thông Tin Cá Nhân"
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
              title="Account"
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
function ArticlesStack(props) {
  return (

    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Quản Lý Báo Cáo"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
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
        name="Bảng Lương"
        component={Salarytable}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Thông tin lương" navigation={navigation} scene={scene} />
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
            <Header title="Application" navigation={navigation} scene={scene}/>
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      {/* <Stack.Screen
        name="ChuaLam"
        component={DSNguoiDung}
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
          headerTransparent: true
        }}
      /> */}
    </Stack.Navigator>
  );
}
function checkCameraStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Chấm Công"
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
        name="Thông Báo"
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
      {/* <Stack.Screen
        name="Pro"
        component={Pro}
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
          
          headerTransparent: true
        }}
      /> */}
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
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Elements"
        component={Timekeepinghistory}
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
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}
// function EmplyeedetectionStack(props) {
//   return (
//     <Stack.Navigator mode="card" headerMode="screen">
//       <Stack.Screen
//         name="Thông Báo Chấm Công"
//         component={Emplyeedetection}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header title="Thông Báo Chấm Công" navigation={navigation} scene={scene} />
//           ),
//           cardStyle: { backgroundColor: "#F8F9FE" }
//         }}
//       />
//       <Stack.Screen
//         name="Elements"
//         component={Timekeepinghistory}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               title=""
//               back
//               white
//               transparent
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           headerTransparent: true
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Quản Lý Đơn Từ"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function AppStack(props) {
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
      <Drawer.Screen name="Quản Lý Đơn Từ" component={OnboardingStack} />
      <Drawer.Screen name="Quản Lý Báo Cáo" component={ArticlesStack} />
      <Drawer.Screen name="Chấm Công" component={checkCameraStack} />
      <Drawer.Screen name="Lịch Sử Chấm Công" component={TimekeepinghistoryStack} />
      <Drawer.Screen name="Thông Báo" component={NotificationStack} />
      <Drawer.Screen name="Bảng Lương" component={SalarytableStack} />
    </Drawer.Navigator>
  );
}

