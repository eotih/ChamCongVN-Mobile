import React from "react";
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";
import { Button, Select, Icon, Input, Header, Switch } from "../components";

const { width, height } = Dimensions.get('window');

export default function CardHistory({ Date, State, image, TimeCheckin, TimeCheckout, DeviceCheckin, DeviceCheckout }) {
    return <ScrollView>
        <View style={styles.Card}>
            <View style={styles.Orange}>
                <Text style={styles.date}>
                    {Date}
                </Text>
                <Text style={styles.typelate}>
                    {State}
                </Text>
            </View>
            <View middle style={styles.avatarContainer}>
                <Image
                    source={{ uri: image }}
                    style={styles.avatar}
                />
                <Block style={styles.details} >
                    <Text size={18}>
                        Giờ chấm công:
                    </Text>
                    <Text size={18}>
                        Giờ ra về:
                    </Text>
                    <Text size={18}>
                        Tổng giờ làm:
                    </Text>
                    <Text size={18}>
                        Device check in:
                    </Text>
                    <Text size={18} >
                        Device check out:
                    </Text>
                </Block>
                <Block style={styles.time} >
                    <Text size={18}>
                        {TimeCheckin}
                    </Text >
                    <Text size={18}>
                        {TimeCheckout}
                    </Text >
                    <Text size={18}>
                        Time
                    </Text>
                    <Text size={18}>
                        {DeviceCheckin}
                    </Text>
                    <Text size={18}>
                        {DeviceCheckin}
                    </Text>
                </Block>
            </View>
        </View>
    </ScrollView>
}
const styles = StyleSheet.create({
    Card: {
        // position: "relative",
        marginHorizontal: theme.SIZES.BASE,
        borderRadius: 15,
        marginTop: 15,
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
    },
    Orange: {
        backgroundColor: 'orange',
        flexDirection: 'row',
        borderRadius: 6,
        alignItems: 'center',
    },
    blue: {
        backgroundColor: '#00CCFF',
        flexDirection: 'row',
        borderRadius: 6,
        alignItems: 'center',
    },
    date: {
        marginLeft: 30,
        fontSize: 20,
        textAlign: 'center',
    },
    type: {
        backgroundColor: 'white',
        marginLeft: width / 2.2,
        fontSize: 20
    },
    typelate: {
        backgroundColor: 'white',
        marginLeft: width / 1.9,
        fontSize: 20
    },
    avatarContainer: {
        flexDirection: 'row'
    },
    avatar: {
        width: width / 5,
        height: width / 5,
        borderRadius: 62,
        borderWidth: 0,
        alignSelf: 'center'
    },
    details: {
        marginLeft: width / 25
    },
    time: {
        marginLeft: width / 9
    },
});