import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View, TouchableOpacity } from 'react-native';
import { Card, Title, Text, Paragraph, IconButton } from 'react-native-paper';
import Notifications from './Notification'
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('screen');

export default function Statistics() {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: 'center' }}>
                            Tháng 1
                        </Text>
                        <Card style={styles.cardContainer} >
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Icon style={styles.icon} name="history" color="#388e3c">
                                    </Icon>
                                <Card.Content >
                                    <Title>Đúng giờ</Title>
                                    <Paragraph>checkin đúng giờ 5 lần</Paragraph>
                                </Card.Content>
                            </View>
                        </Card>
                        <Card style={styles.cardContainer} >
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Icon style={styles.icon} name="history" color="#00bcd4">
                                    </Icon>
                                <Card.Content >
                                    <Title>Muộn giờ</Title>
                                    <Paragraph>checkin muộn giờ 5 lần</Paragraph>
                                </Card.Content>
                            </View>
                        </Card>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: 'center' }}>
                            Tháng 2
                        </Text>
                        <Card style={styles.cardContainer} >
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Icon style={styles.icon} name="history">
                                    </Icon>
                                <Card.Content >
                                    <Title>Đúng giờ</Title>
                                    <Paragraph>checkin đúng giờ 5 lần</Paragraph>
                                </Card.Content>
                            </View>
                        </Card>
                        <Card style={styles.cardContainer} >
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Icon style={styles.icon} name="history">
                                    </Icon>
                                <Card.Content >
                                    <Title>Muộn giờ</Title>
                                    <Paragraph>checkin muộn giờ 5 lần</Paragraph>
                                </Card.Content>
                            </View>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    cardContainer: {
        borderWidth: 0.5,
        marginVertical: 10,
    },
    icon: {
        fontSize: 24,
        marginVertical: 20,
        marginLeft: 30,
    },
})
