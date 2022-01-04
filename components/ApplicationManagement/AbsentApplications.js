import React, { useState, useContext } from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity, View, Text } from "react-native";
import { IconButton, Colors, Card, Title, Paragraph } from 'react-native-paper';
import moment from "moment";


export default function AbsentApplications({ data }) {
    return (
        <ScrollView style={styles.container}>
            {data.map((item, index) =>
                <Card style={styles.cardContainer} key={index}> 
                    <Card.Content>
                        <View style={{ borderBottomWidth: 1 }}>
                            {item.StateID === 1 ?
                                <Title style={{ color: '#fbc02d', alignSelf: 'flex-end' }}>Pending</Title>
                                : item.StateID === 2 ?
                                    <Title style={{ color: '#388e3c', alignSelf: 'flex-end' }}>Approved</Title> :
                                    <Title style={{ color: 'red', alignSelf: 'flex-end' }}>Not Approved</Title>
                            }

                            <Paragraph style={styles.paragraph}>{moment(item.CreatedAt).format('DD-MM-YYYY')}</Paragraph>
                        </View>
                        <View style={styles.cardDetails}>
                            <Text style={styles.text} >
                                Type absent:
                            </Text>
                            <Text style={styles.text} >
                                {item.AbsentType}
                            </Text>
                        </View>
                        <View style={styles.cardDetails}>
                            <Text style={styles.text} >
                                Number of days:
                            </Text>
                            <Text style={styles.text}>
                                {item.NumberOfDays} days
                            </Text>
                        </View>
                        <View style={styles.cardDetails}>
                            <Text style={styles.text} >
                            Reason:
                            </Text>
                            <Text style={styles.text}>
                                {item.Reason}
                            </Text>
                        </View>
                    </Card.Content>
                </Card>)}
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
