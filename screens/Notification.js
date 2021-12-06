import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
export default function Noti() {
  const notificationListener = useRef();
  const responseListener = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      registerForPushNotificationsAsync().then();
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      });
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      });
      var today = new Date();
    
      if (today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() === "11:51:30") {
        schedulePushNotification();
      }
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Thông Báo Chấm Công</Text>
      </View>
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Checkin Bờ râu 📬",
      sound: 'soundthongbao.wav',
      body: 'Đến thời gian check in',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 1, channelId: 'default' },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }
  
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      sound: 'soundthongbao.wav',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  return token;
}
