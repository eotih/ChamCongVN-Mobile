import React, { useState, useEffect, useRef } from "react";
import { ScrollBlock, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity, TextInput, Modal } from "react-native";
import { Button, Card, Title, Paragraph, Text, IconButton } from 'react-native-paper';


const { width, height } = Dimensions.get('window');
export default function SalaryTable() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView style={{ marginVertical: 20, marginHorizontal: 20 }}>

            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <IconButton style={styles.iconButton}
                                icon="window-close"
                                onPress={() => setModalVisible(!modalVisible)}
                            />
                            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: 'center' }}>Thông tin chi tiết lương</Text>
                            <View style={styles.modalDetails}>
                                <View>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                </View>
                                <View>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                </View>
                            </View>
                            <View style={styles.total}>
                                <Text style={styles.modalText}>TỔng tiền</Text>
                                <Text style={styles.modalText}>30000000</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.all}>
                <Card style={styles.card}>
                    <Card.Content style={{ alignItems: 'center' }} >
                        <Title >Tháng 1</Title>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }} >Tổng thực nhận</Text>
                        <Paragraph >10 triệu</Paragraph>
                    </Card.Content>
                    <Card.Actions  >
                        <Button style={styles.buttonDetail} color="white" onPress={() => setModalVisible(true)} >Chi tiết</Button>
                    </Card.Actions>
                </Card>
                <Card style={styles.card}>
                    <Card.Content style={{ alignItems: 'center' }} >
                        <Title >Tháng 2</Title>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }} >Tổng thực nhận</Text>
                        <Paragraph >10 triệu</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button style={styles.buttonDetail} color="white" onPress={() => setModalVisible(true)} >Chi tiết</Button>
                    </Card.Actions>
                </Card>
            </View>
            <View style={styles.all}>
                <Card style={styles.card}>
                    <Card.Content style={{ alignItems: 'center' }} >
                        <Title >Tháng 3</Title>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }} >Tổng thực nhận</Text>
                        <Paragraph >10 triệu</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button style={styles.buttonDetail} color="white" onPress={() => setModalVisible(true)} >Chi tiết</Button>
                    </Card.Actions>
                </Card>
                <Card style={styles.card}>
                    <Card.Content style={{ alignItems: 'center' }} >
                        <Title >Tháng 4</Title>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }} >Tổng thực nhận</Text>
                        <Paragraph >10 triệu</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button style={styles.buttonDetail} color="white" onPress={() => setModalVisible(true)} >Chi tiết</Button>
                    </Card.Actions>
                </Card>
            </View>
            <View style={styles.all}>
                <Card style={styles.card}>
                    <Card.Content style={{ alignItems: 'center' }} >
                        <Title >Tháng 5</Title>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }} >Tổng thực nhận</Text>
                        <Paragraph >10 triệu</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button style={styles.buttonDetail}  color="white" onPress={() => setModalVisible(true)} >Chi tiết</Button>
                    </Card.Actions>
                </Card>
                <Card style={styles.card}>
                    <Card.Content style={{ alignItems: 'center' }} >
                        <Title >Tháng 6</Title>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }} >Tổng thực nhận</Text>
                        <Paragraph >10 triệu</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button style={styles.buttonDetail}  color="white" onPress={() => setModalVisible(true)} >Chi tiết</Button>
                    </Card.Actions>
                </Card>
            </View>
            <View style={styles.all}>
                <Card style={styles.card}>
                    <Card.Content style={{ alignItems: 'center' }} >
                        <Title >Tháng 7</Title>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }} >Tổng thực nhận</Text>
                        <Paragraph >10 triệu</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button style={styles.buttonDetail}  color="white" onPress={() => setModalVisible(true)} >Chi tiết</Button>
                    </Card.Actions>
                </Card>
                <Card style={styles.card}>
                    <Card.Content style={{ alignItems: 'center' }} >
                        <Title >Tháng 8</Title>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }} >Tổng thực nhận</Text>
                        <Paragraph >10 triệu</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button style={styles.buttonDetail}  color="white" onPress={() => setModalVisible(true)} >Chi tiết</Button>
                    </Card.Actions>
                </Card>
            </View>
            <View style={styles.all}>
                <Card style={styles.card}>
                    <Card.Content style={{ alignItems: 'center' }} >
                        <Title >Tháng 9</Title>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }} >Tổng thực nhận</Text>
                        <Paragraph >10 triệu</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button style={styles.buttonDetail}  color="white" onPress={() => setModalVisible(true)} >Chi tiết</Button>
                    </Card.Actions>
                </Card>
                <Card style={styles.card}>
                    <Card.Content style={{ alignItems: 'center' }} >
                        <Title >Tháng 10</Title>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }} >Tổng thực nhận</Text>
                        <Paragraph >10 triệu</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button style={styles.buttonDetail}  color="white" onPress={() => setModalVisible(true)} >Chi tiết</Button>
                    </Card.Actions>
                </Card>
            </View>
            <View style={styles.all}>
                <Card style={styles.card}>
                    <Card.Content style={{ alignItems: 'center' }} >
                        <Title >Tháng 11</Title>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }} >Tổng thực nhận</Text>
                        <Paragraph >10 triệu</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button style={styles.buttonDetail}  color="white" onPress={() => setModalVisible(true)} >Chi tiết</Button>
                    </Card.Actions>
                </Card>
                <Card style={styles.card}>
                    <Card.Content style={{ alignItems: 'center' }} >
                        <Title >Tháng 12</Title>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }} >Tổng thực nhận</Text>
                        <Paragraph >10 triệu</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button style={styles.buttonDetail}  color="white" onPress={() => setModalVisible(true)} >Chi tiết</Button>
                    </Card.Actions>
                </Card>
            </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    card: {
        width: width / 2.5,
        height: height / 4.5,
        borderWidth: 1,
    },
    all: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-between'
    },
    centeredView: {
        flex: 1,
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    buttonDetail: {
        borderRadius: 10,
        backgroundColor: "orange",
        marginHorizontal: 25,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginVertical: 10,
        fontSize: 16,
    },
    modalDetails: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
    },
    iconButton:{
        alignSelf: 'flex-end'
    },

})