import React from "react";
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import moment from "moment";

export default function TimeKeeperHistory({ data }) {
    const { checkin, checkout } = data
    const date = new Date(checkin.CreatedAt)
    const test = moment(date).format('dddd');
    const day = moment(date).format('DD');
    const monthYear = moment(date).format('MMMM YYYY');
    const totalTime = moment(checkout.CreatedAt).diff(moment(checkin.CreatedAt), 'hours')
    const getTime = (time) => {
        moment.locale('en');
        return moment(time).format('LT');
    }
    return (
        <ScrollView>
            <Block style={styles.card}>
                <Block style={styles.cardHeader}>
                    <Block row>
                        <Block style={styles.cardHeaderLeft}>
                            <Text style={styles.day}>{day}</Text>
                        </Block>
                        <Block style={styles.cardHeaderRight}>
                            <Text style={styles.cardHeaderText}>{test}</Text>
                            <Text style={styles.cardHeaderText}>{monthYear}</Text>
                        </Block>
                    </Block>
                     <Block style={styles.cardHeaderRightRight}>
                        <Text style={styles.cardHeaderTextRight}>{checkin.Status} /</Text>
                        <Text style={styles.cardHeaderTextRight}>{checkout.Status}</Text>
                    </Block>
                </Block>
                <Block style={styles.cardContent}>
                    <Block style={styles.cardContentLeft}>
                        <View>
                            <Image style={styles.cardContentImage} source={{ uri: checkin.Image }} />
                        </View>
                        <View>
                            <Image style={styles.cardContentImage} source={{ uri: checkout.Image }} />
                        </View>
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
                            <Text style={styles.cardContentRightTopText}>{getTime(checkin.CreatedAt)}</Text>
                            <Text style={styles.cardContentRightTopText}>{getTime(checkout.CreatedAt)}</Text>
                            <Text style={styles.cardContentRightTopText}>{totalTime + ' Tiếng'}</Text>
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
        padding: theme.SIZES.BASE - 7,
        borderBottomWidth: 1,
        backgroundColor: 'orange',
        borderColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardHeaderLeft: {
        paddingLeft: theme.SIZES.BASE,
    },
    day: {
        fontSize: 36,
        color: 'white',
    },
    cardHeaderRight: {
        paddingLeft: theme.SIZES.BASE,
    },
    cardHeaderText: {
        fontSize: 16,
        color: 'white',
    },
    cardHeaderRightRight: {
        paddingRight: theme.SIZES.BASE,
        alignSelf: 'center',
    },
    cardHeaderTextRight: {
        fontSize: 16,
        color: 'white',
    },
    cardContent: {
        // Image with content row
        flexDirection: 'row',
        paddingBottom: 0,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    cardContentText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333'
    },
    cardContentImage: {
        width: width / 5,
        height: width / 5,
        marginVertical: 10,
        marginLeft: 10,
        borderRadius: 62,
    },
    cardContentLeft: {
        marginVertical: 10,
    },
    cardContentRight: {
        flex: 1,
        marginVertical: 10,
        paddingRight: theme.SIZES.BASE,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContentRightLeft: {
        marginVertical: 20,
        justifyContent: 'space-between',
        paddingHorizontal: theme.SIZES.BASE
    },
    cardContentRightRight: {
        marginVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    cardContentRightTopText: {
        color: '#333',
        fontSize: 14
    },
});