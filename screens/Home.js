import React, { useState } from 'react';
import { StyleSheet, Dimensions, ScrollView, View, TouchableOpacity, Modal, Image, ImageBackground } from 'react-native';
import { Card, Title, Text, IconButton } from 'react-native-paper';
import Notifications from '../screens/Notification'
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('screen');

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.info}>
            <View>
              <Text style={styles.textInfo}>
                Đào Quốc Bảo
              </Text>
              <Text style={styles.textInfo}>
                Nhân vien kế toán
              </Text>
              <Text style={styles.textInfo}>
                Phòng nhân sự
              </Text>
              <Text style={styles.textInfo}>
                Nhóm 10
              </Text>
              <Text style={styles.textInfo}>
                Phòng nhân sự
              </Text>
            </View>
            <Image style={{ width: width / 3, height: height / 6, marginTop: 20 }}
              source={require("../assets/imgs/logo.png")}>
            </Image>
          </View>

          <View>
            <Card>
              <View style={styles.card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon style={styles.icon}
                      name="camera"
                      color="red">
                    </Icon>
                    <View>
                      <Title style={{ textAlign: 'center' }}>Check-in statistics</Title>
                      <Text>Check-in infomation</Text>
                    </View>
                  </View>
                  <View>
                    <IconButton
                      onPress={() => navigation.navigate('Statistics')}
                      size={38}
                      icon="arrow-right-circle">
                    </IconButton>
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon style={styles.icon}
                      name="wpforms"
                      color="#00bcd4">
                    </Icon>
                    <View>
                      <Title style={{ textAlign: 'center' }}>Absent applications</Title>
                      <Text>2 đơn</Text>
                    </View>
                  </View>
                  <View>
                    <IconButton
                      onPress={() => navigation.navigate('Quản Lý Đơn Từ')}
                      size={38}
                      icon="arrow-right-circle">
                    </IconButton>
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon style={styles.icon}
                      name="wpforms"
                      color="#000000">
                    </Icon>
                    <View>
                      <Title style={{ textAlign: 'center' }}>Overtime application</Title>
                      <Text>2 đơn</Text>
                    </View>

                  </View>
                  <View >
                    <IconButton
                      onPress={() => navigation.navigate('Quản Lý Đơn Từ')}
                      size={38}
                      icon="arrow-right-circle">
                    </IconButton>
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon style={styles.icon}
                      name="briefcase"
                      color="#e91e63">
                    </Icon>
                    <View>
                      <Title style={{ textAlign: 'center' }}>Seniority</Title>
                      <Text>36 ngày</Text>
                    </View>

                  </View>
                  <View>
                    <IconButton
                      onPress={() => setModalVisible(true)}
                      size={38}
                      icon="arrow-right-circle">
                    </IconButton>
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon style={styles.icon}
                      name="camera"
                      color="#9c27b0">
                    </Icon>
                    <View>
                      <Title>Summary</Title>
                      <Text>Summary infomation</Text>
                    </View>
                  </View>
                  <View style={{ marginLeft: 95, alignSelf: 'center' }}>
                    <IconButton
                      onPress={() => setModalVisible(true)}
                      size={38}
                      icon="arrow-right-circle">
                    </IconButton>
                  </View>
                </View>
              </View>
            </Card>
          </View>
          <View>
            <Modal style={{ backgroundColor: 'white' }}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            ><Card style={{ marginTop: height / 3, backgroundColor: '#89d5c9', marginHorizontal: 20 }}>
                {/* <ImageBackground source={{
                  uri: 'https://i.pinimg.com/564x/91/d8/16/91d8168b2659797cb9471d6e0796120c.jpg',
                }}
                style={{height:height/2}}> */}

                <IconButton style={styles.iconButton}
                  icon="window-close"
                  onPress={() => setModalVisible(!modalVisible)}
                  color="white"
                />
                <View style={styles.avatarContainer}>
                  <Image
                    source={{
                      uri: 'https://i.pinimg.com/564x/91/d8/16/91d8168b2659797cb9471d6e0796120c.jpg',
                    }}
                    style={styles.avatar}
                  />
                </View>
                <Text style={styles.textName}>Ho va ten</Text>
                <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Cảm ơn bạn đã đòng hành cùng công ty</Text>
                <View style={{ alignSelf: 'center', marginVertical: 20, color: 'white' }}>
                  <Text style={{ color: 'white' }}>Tổng số ngày làm việc</Text>
                  <Text style={{ textAlign: 'center', color: 'white' }}>36 ngày</Text>
                </View>
                {/* </ImageBackground> */}
              </Card>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#89d5c9'
  },
  card: {
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: '#89d5c9'
  },
  icon: {
    fontSize: 24,
    alignSelf: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  avatarContainer: {
    position: "relative",
    alignSelf: 'center',
    marginTop: -80
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 62,
    borderWidth: 0,
  },
  iconButton: {
    alignSelf: 'flex-end'
  },
  textName: {
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 20,
    color: 'white',
  },
  orange: {
    color: '#fac172'
  },
  info: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 30,
    marginHorizontal: 30,
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginBottom: 30
  },
  textInfo: {
    fontSize: 18,
    paddingVertical: 5,
  },

});
