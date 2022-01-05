import React, { useState, useEffect, useRef } from "react";
import { View, ScrollView, StyleSheet, Dimensions, Modal, FlatList } from "react-native";
import { Button, Card, Title, Paragraph, Text, IconButton } from 'react-native-paper';
import SimplePie from "../../components/PieChart"
const { width, height } = Dimensions.get('window');
export default function SalaryTable(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [listdata, setListdata] = useState(props.route.params.listdata);
    const [dataModal, setDataModal] = useState([]);
    useEffect(() => {

    }, [dataModal])
    const handleChooseMonth = (month) => {
        setModalVisible(true)
        const data = listdata.filter(result => result.Month === month);
        setDataModal(data)
    }
    return (
        <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
            <View>
                {dataModal.length > 0 && <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <ScrollView>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <IconButton style={styles.iconButton}
                                    icon="window-close"
                                    onPress={() => setModalVisible(!modalVisible)}
                                />
                                <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: 'center', marginBottom: 15, }}>
                                    Thông tin chi tiết lương
                                </Text>
                                <SimplePie data={dataModal} />
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Thông tin trong tháng </Text>
                                <View style={styles.modalDetails}>
                                    <View>
                                        <Text style={styles.modalText}>Tổng số giờ công</Text>
                                        <Text style={styles.modalText}>Số ngày nghỉ</Text>
                                        <Text style={styles.modalText}>Số giờ tăng ca</Text>
                                        <Text style={styles.modalText}>Tiền lương tăng ca</Text>
                                        <Text style={styles.modalText}>Tiền Tạm ứng</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.modalText}>{dataModal[0].Month}</Text>
                                        <Text style={styles.modalText}>2 Ngày</Text>
                                        <Text style={styles.modalText}>2 giờ</Text>
                                        <Text style={styles.modalText}>{dataModal[0].TotalOvertimeSalary}</Text>
                                        <Text style={styles.modalText}>{dataModal[0].TotalAdvance}</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Tổng thực nhận</Text>
                                <View style={styles.modalDetails}>
                                    <View>
                                        <Text style={styles.modalText}>Tổng Lương cơ bản</Text>
                                        <Text style={styles.modalText}>Tổng tiền thưởng</Text>
                                        <Text style={styles.modalText}>Tổng khấu trừ</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.modalText}>{dataModal[0].Salary}</Text>
                                        <Text style={styles.modalText}>{dataModal[0].TotalLaudatory}</Text>
                                        <Text style={styles.modalText}>{dataModal[0].TotalDeduction}</Text>
                                    </View>
                                </View>
                                <View style={styles.total}>
                                    <Text style={styles.modalText}>TỔng tiền</Text>
                                    <Text style={styles.modalText}>{dataModal[0].TotalSalary}</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </Modal>}
            </View>
            <View style={styles.all}>
                <FlatList
                    data={listdata}
                    horizontal={false}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <Card style={styles.card}>
                            <Card.Content style={{ alignItems: 'center' }} >
                                <Title >Tháng {item.Month}</Title>
                                <Text style={{ fontSize: 16, fontWeight: "bold" }} >Tổng thực nhận</Text>
                                <Paragraph >{item.TotalSalary}</Paragraph>
                            </Card.Content>
                            <Card.Actions style={{ alignSelf: 'center' }} >
                                <Button style={styles.buttonDetail} color="white" onPress={() => handleChooseMonth(item.Month)} >
                                    Chi tiết
                                </Button>
                            </Card.Actions>
                        </Card>
                    }
                    keyExtractor={item => `${item.Month}`}
                    contentContainer={styles.listContainer}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        width: width / 2.5,
        height: height / 4.5,
        borderWidth: 1,
        margin: 10,
        justifyContent: 'center'
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
        padding: 10,
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
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginVertical: 10,
        fontSize: 18,
        textAlign: "justify"
    },
    modalDetails: {
        flexDirection: "row",
        justifyContent: 'space-between',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
    },
    iconButton: {
        alignSelf: 'flex-end'
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#E6E6E6",
    },
    listContainer: {
        alignItems: 'center'
    },

})