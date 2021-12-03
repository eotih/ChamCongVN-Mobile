import React from "react";
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";
import { Button, Select, Icon, Input, Header, Switch } from "../components";

export default function CardHistory({ data }) {
    const { checkin, checkout } = data
    const date = new Date()
    const totalTime = checkout.CreatedDate - checkin.CreatedDate
    return (
        <ScrollView>
            <Block style={styles.card}>
                <Block style={styles.cardHeader}>
                    <Block style={styles.cardHeaderLeft}>
                        <Text style={styles.day}>{date.getDate()}</Text>
                    </Block>
                    <Block style={styles.cardHeaderRight}>
                        <Text style={styles.cardHeaderText}>{date.getDate()}</Text>
                        <Text style={styles.cardHeaderText}>{(date.getMonth() + 1) + "/" + date.getFullYear()}</Text>
                    </Block>
                </Block>
                <Block style={styles.cardContent}>
                    <Block style={styles.cardContentLeft}>
                        <Image style={styles.cardContentImage} source={{ uri: checkin.Image }} />
                        <Image style={styles.cardContentImage} source={{ uri: checkout.Image }} />
                    </Block>
                    <Block style={styles.cardContentRight}> 
                        <Block style={styles.cardContentRightLeft}>
                            <Text style={styles.cardContentRightTopText}>Giờ chấm công:</Text>
                            <Text style={styles.cardContentRightTopText}>Giờ ra về:</Text>
                            <Text style={styles.cardContentRightTopText}>Tổng giờ làm:</Text>
                            <Text style={styles.cardContentRightTopText}>Device check in:</Text>
                            <Text style={styles.cardContentRightTopText}>Device check out:</Text>
                        </Block>
                        <Block style={styles.cardContentRightRight}>
                            <Text style={styles.cardContentRightTopText}>{checkin.CreatedDate}</Text>
                            <Text style={styles.cardContentRightTopText}>{checkout.CreatedDate}</Text>
                            <Text style={styles.cardContentRightTopText}>{totalTime}</Text>
                            <Text style={styles.cardContentRightTopText}>{checkin.Device}</Text>
                            <Text style={styles.cardContentRightTopText}>{checkout.Device}</Text>
                        </Block>
                    </Block>
                </Block>
            </Block>
        </ScrollView>

    );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    card: {
        width: width - 20,
        margin: 10,
        backgroundColor: theme.COLORS.WHITE,
        marginVertical: theme.SIZES.BASE,
        borderRadius: theme.SIZES.BASE,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        elevation: 2,
        overflow: 'hidden',
    },
    cardHeader: {
        borderBottomWidth: 1,
        backgroundColor: 'orange',
        borderColor: '#ddd',
        flexDirection: 'row',
    },
    cardHeaderLeft: {
        paddingLeft: theme.SIZES.BASE,
    },
    day: {
        fontSize: 36
    },
    cardHeaderRight: {
        paddingLeft: theme.SIZES.BASE,
    },
    cardHeaderText: {
        fontSize: 16
    },
    cardTitle: {
        fontSize: theme.SIZES.BASE * 1.5,
        fontWeight: 'bold',
        color: argonTheme.COLORS.HEADER
    },
    cardSubtitle: {
        fontSize: theme.SIZES.BASE,
        color: argonTheme.COLORS.PRIMARY
    },
    cardContent: {
        // Image with content row
        flexDirection: 'row',
        padding: theme.SIZES.BASE,
        paddingBottom: 0,
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        borderColor: '#ddd'

    },
    cardContentLeft: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: theme.SIZES.BASE
    },
    cardContentText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333'
    },
    cardContentImage: {
        width: 124,
        height: 124,
        borderRadius: 62,
        borderWidth: 0
        
    },
    cardContentRight: {
        flex: 1,
        width: width / 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: theme.SIZES.BASE
    },
    cardContentRightLeft: {


    },
    cardContentRightRight: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: theme.SIZES.BASE
    },
    cardContentRightTopText: {
        color: '#333'
    },
});