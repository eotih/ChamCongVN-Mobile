import React from "react";
import { ScrollView, StyleSheet, Dimensions, View, Image, TouchableOpacity, Text } from "react-native";
// Galio components
import moment from "moment";

export default function TimeKeeperHistory({ data }) {
    const { EmployeeName, Department, CheckInImage, CheckOutImage, CheckInCreatedAt, CheckOutCreatedAt, CheckInDevice, CheckOutDevice, CheckInStatus, CheckOutStatus } = data
    const date = new Date(CheckInCreatedAt)
    const test = moment(date).format('dddd');
    const day = moment(date).format('DD');
    const monthYear = moment(date).format('MMMM YYYY');
    const totalTime = moment(CheckOutCreatedAt).diff(moment(CheckInCreatedAt), 'hours')
    const getTime = (time) => {
        moment.locale('en');
        return moment(time).format('LT');
    }
    return (
        <ScrollView>
            <View style={styles.card}>
                <View style={[(CheckInStatus == "Đi muộn" && CheckOutStatus == "Về sớm")
                    ? styles.cardHeaderLateAndSoon : (CheckInStatus == "Đi muộn" || CheckOutStatus == "Về sớm")
                        ? styles.cardHeaderLate : styles.cardHeader]}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.cardHeaderLeft}>
                            <Text style={styles.day}>{day}</Text>
                        </View>
                        <View style={styles.cardHeaderRight}>
                            <Text style={styles.cardHeaderText}>{test}</Text>
                            <Text style={styles.cardHeaderText}>{monthYear}</Text>
                        </View>
                    </View>
                    <View style={styles.cardHeaderRightRight}>
                        <Text style={styles.cardHeaderTextRight}>{CheckInStatus} /</Text>
                        <Text style={styles.cardHeaderTextRight}>{CheckOutStatus}</Text>
                    </View>
                </View>
                <View style={styles.cardContent}>
                    <View style={styles.cardContentLeft}>
                        <View>
                            <Image style={styles.cardContentImage} source={{ uri: "data:image/jpeg;base64," + CheckInImage }} />
                        </View>
                        <View>
                            <Image style={styles.cardContentImage} source={{ uri: "data:image/jpeg;base64," + CheckOutImage }} />
                        </View>
                    </View>
                    <View style={styles.cardContentRight}>
                        <View style={styles.cardContentRightLeft}>
                            <Text style={styles.cardContentRightTopText}>Giờ chấm công:</Text>
                            <Text style={styles.cardContentRightTopText}>Giờ ra về:</Text>
                            <Text style={styles.cardContentRightTopText}>Tổng giờ làm:</Text>
                            <Text style={styles.cardContentRightTopText}>Device check in:</Text>
                            <Text style={styles.cardContentRightTopText}>Device check out:</Text>
                        </View>
                        <View style={styles.cardContentRightRight}>
                            <Text style={styles.cardContentRightTopText}>{getTime(CheckInCreatedAt)}</Text>
                            <Text style={styles.cardContentRightTopText}>{getTime(CheckOutCreatedAt)}</Text>
                            <Text style={styles.cardContentRightTopText}>{totalTime + ' Tiếng'}</Text>
                            <Text style={styles.cardContentRightTopText}> {CheckInDevice} </Text>
                            <Text style={styles.cardContentRightTopText}> {CheckOutDevice} </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    card: {
        width: width - 20,
        margin: 10,
        backgroundColor: "white",
        marginVertical: 15,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        elevation: 2,
        overflow: 'hidden',
    },
    cardHeader: {
        padding: 8,
        borderBottomWidth: 1,
        backgroundColor: 'green',
        borderColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardHeaderLateAndSoon: {
        padding: 8,
        borderBottomWidth: 1,
        backgroundColor: 'red',
        borderColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardHeaderLate: {
        padding: 8,
        borderBottomWidth: 1,
        backgroundColor: 'orange',
        borderColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardHeaderLeft: {
        paddingLeft: 15,
    },
    day: {
        fontSize: 36,
        color: 'white',
    },
    cardHeaderRight: {
        paddingLeft: 15,
    },
    cardHeaderText: {
        fontSize: 18,
        color: 'white',
    },
    cardHeaderRightRight: {
        paddingRight: 15,
        alignSelf: 'center',
    },
    cardHeaderTextRight: {
        fontSize: 18,
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
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContentRightLeft: {
        marginVertical: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    cardContentRightRight: {
        marginVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    cardContentRightTopText: {
        color: '#333',
        fontSize: 18
    },
});