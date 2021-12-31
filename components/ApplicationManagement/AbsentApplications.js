import React, { useState, useContext } from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity, View, Text } from "react-native";
import { IconButton, Colors, Card, Title, Paragraph } from 'react-native-paper';


export default function AbsentApplications() {
    return (
        <ScrollView style={styles.container}>
            <View >
                <Card style={styles.cardContainer}>
                    <Card.Content>
                        <View style={{ borderBottomWidth: 1 }}>
                            <Title style={{ color: '#388e3c', alignSelf: 'flex-end' }}>Đã Duyệt</Title>
                            <Paragraph style={styles.paragraph}>Thời gian gửi đơn</Paragraph>
                        </View>
                        <View style={styles.cardDetails}>
                            <Text style={styles.text} >
                                Loại nghỉ:
                            </Text>
                            <Text style={styles.text} >
                                Nghỉ việc cá nhân
                            </Text>
                        </View>
                        <View style={styles.cardDetails}>
                            <Text style={styles.text} >
                                Thời gian xin nghỉ:
                            </Text>
                            <Text style={styles.text}>
                                12/12/2000
                            </Text>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            Lý do:
                        </Text>
                    </Card.Content>
                </Card>
                <Card style={styles.cardContainer}>
                    <Card.Content>
                        <View style={{ borderBottomWidth: 1 }}>
                            <Title style={{ color: '#fbc02d', alignSelf: 'flex-end' }}>Chờ Duyệt</Title>
                            <Paragraph style={styles.paragraph}>Ngày gửi đơn</Paragraph>
                        </View>

                        <View style={styles.cardDetails}>
                            <Text style={styles.text}>
                                Loại nghỉ:
                            </Text>
                            <Text style={styles.text}>
                                Nghỉ theo tháng
                            </Text>
                        </View>
                        <View style={styles.cardDetails}>
                            <Text style={styles.text} >
                                Thời gian xin nghỉ:
                            </Text>
                            <Text style={styles.text}>
                                12/12/2000
                            </Text>
                        </View>
                        <Text style={styles.text}>
                            Lý do:
                        </Text>

                    </Card.Content>
                </Card>
                <Card style={styles.cardContainer}>
                    <Card.Content>
                        <View style={{ borderBottomWidth: 1 }}>
                            <Title style={{ color: '#e25b45', alignSelf: 'flex-end' }}>Từ Chối</Title>
                            <Paragraph style={styles.paragraph}>Ngày gửi đơn</Paragraph>
                        </View>
                        <View style={styles.cardDetails}>
                            <Text style={styles.text} >
                                Loại nghỉ:
                            </Text>
                            <Text style={styles.text}>
                                Nghỉ trong năm
                            </Text>
                        </View>
                        <View style={styles.cardDetails}>
                            <Text style={styles.text} >
                                Thời gian xin nghỉ:
                            </Text>
                            <Text style={styles.text}>
                                12/12/2000
                            </Text>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            Lý do:
                        </Text>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20,
    },
    cardContainer: {
        marginVertical: 20,
        borderRadius: 20,
        borderColor: '#ff9800',
        borderWidth: 1,
        backgroundColor: '#89d5c9'
    },
    paragraph: {
        alignSelf: 'flex-end',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingVertical: 10,
        marginVertical: 10,
    },
})
