import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, ScrollView, Modal, } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton, Portal, Provider, Button, Card } from 'react-native-paper';



function SimplePie( {data}) {
    const [modalVisible, setModalVisible] = useState(false);
    const { Salary, TotalOvertimeSalary, TotalLaudatory, TotalDeduction} = data[0]
    const pieData = [
        { value: Salary, color: '#177AD5' },
        { value: TotalOvertimeSalary, color: '#79D2DE' },
        { value: TotalLaudatory, color: '#ED6665' },
        { value: TotalDeduction, color: 'black' },
    ];
    return (
        <View >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Biểu đồ chi tiết lương
            </Text>
            <View style={{ flexDirection: 'row' }} >
                <PieChart
                    donut
                    textColor="black"
                    innerRadius={70}
                    showTextBackground
                    textBackgroundColor="white"
                    textBackgroundRadius={22}
                    data={pieData}
                />
                <View>
                    <IconButton style={styles.iconButton}
                        icon="lightbulb"
                        color='blue'
                        onPress={() => setModalVisible(true)}
                    />
                </View>
            </View>
            <View>
                <Modal style={{ backgroundColor: 'white' }}
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modalContainer} >
                        <View style={{ marginLeft: 40, alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Chú thích </Text>
                            <IconButton style={styles.iconButton}
                                icon="window-close"
                                onPress={() => setModalVisible(!modalVisible)}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }} >
                            <View style={{ marginHorizontal: 15 }}>
                                <Icon size={26}
                                    name="circle"
                                    color="#177AD5" />
                                <Icon size={26}
                                    name="circle"
                                    color="#79D2DE" />
                                <Icon size={26}
                                    name="circle"
                                    color="#ED6665" />
                                <Icon size={26}
                                    name="circle"
                                    color="black" />
                            </View>
                            <View>
                                <Text style={styles.text}>Lương cơ bản</Text>
                                <Text style={styles.text}>Lương tăng ca</Text>
                                <Text style={styles.text}>Tiền Thưởng</Text>
                                <Text style={styles.text}>Tiền khấu trừ</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
    },
    modalContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        width: width / 1.8,
        paddingVertical: 10,
        marginTop: height / 3.5,
        marginRight: 30,
        alignSelf: 'flex-end',
        position: 'relative'
    },
    iconButton: {
        alignSelf: 'flex-end'
    },
})
export default SimplePie;