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
    const today = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    return (
        <ScrollView>
            <Block style={styles.card}>
                <Block style={styles.cardHeader}>
                    <Block style={styles.cardHeaderLeft}>
                        <Text style={styles.cardHeaderText}>{date.getDate()}</Text>
                    </Block>
                    <Block style={styles.cardHeaderRight}>
                        <Text style={styles.cardHeaderText}>{date.getDate()}</Text>
                        <Text style={styles.cardHeaderText}>{(date.getMonth() + 1) + "/" + date.getFullYear()}</Text>
                    </Block>
                </Block>
                <Block style={styles.cardContent}>
                    <Block style={styles.cardContentRow}>
                        <Image source={{ uri: checkin.image }} style={styles.cardContentImage} />
                        <Block style={styles.cardContentText}>
                            <Text style={styles.cardContentTextTitle}>{checkin.Name}</Text>
                            <Text style={styles.cardContentTextSubtitle}>{checkin.Email}</Text>
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
        paddingVertical: theme.SIZES.BASE,
        paddingHorizontal: theme.SIZES.BASE * 2,
        borderBottomWidth: 1,
        backgroundColor: 'orange',
        borderColor: '#ddd'
    },
    cardHeaderLeft: {
        flex: 1,
        alignItems: 'flex-start',
        fontSize: 20,
        justifyContent: 'center',
        paddingLeft: theme.SIZES.BASE
    },
    cardHeaderRight: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: theme.SIZES.BASE
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
        paddingVertical: theme.SIZES.BASE * 2,
        paddingHorizontal: theme.SIZES.BASE * 2,
        height: height * 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});