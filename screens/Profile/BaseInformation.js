import React from "react";
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar, TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    Button,
    Image,
    View,
    ScrollView,
    Text
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Images, argonTheme } from "../../constants";
import { HeaderHeight } from "../../constants/utils";
import { AccountContext } from "../../context/AccountContext";

const thumbMeasure = (width - 48 - 32) / 3;
const { width, height } = Dimensions.get("screen");
function BaseInformation({ navigation }) {
    const account = React.useContext(AccountContext);
    const { Employee, Image, FullName, PositionName, GroupName, WorkName, DepartmentName } = account;
    const { NickName, Phone, Gender, Address } = Employee;

    const renderInformation = () => {
        return (
            <ScrollView>
                <View style={styles.profile}>
                    <View >
                        {account && account.Employee && account.Employee.NickName &&
                            <ImageBackground
                                source={Images.ProfileBackground}
                                style={styles.profileContainer}
                                imageStyle={styles.profileBackground}
                            >
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                    style={{ width, marginTop: '25%' }}
                                >
                                    <View style={styles.profileCard}>
                                        {/* <View style={styles.avatarContainer}>
                                            <Image
                                                source={{ uri: Image }}
                                                style={styles.avatar}
                                            />
                                        </View> */}
                                        <View middle style={styles.nameInfo1}>
                                            <Text style={{ fontSize: 26 }} color="#32325D">
                                                {FullName}
                                            </Text>
                                        </View>
                                        <View >
                                            <View style={styles.nameInfo}>
                                                <Text style={{ fontSize: 18, fontWeight: "bold" }} >Thông tin cá nhân </Text>
                                                <View style={styles.card}>
                                                    <View style={styles.text}>
                                                        <Icon name="user" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                        <Text size={18} color="#32325D" style={{ marginLeft: 13 }}>
                                                            NickName: {NickName}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.text}>
                                                        <Icon name="phone" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                        <Text size={18} color="#32325D" style={{ marginLeft: 10 }}>
                                                            Số điện thoại: {Phone}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.text}>
                                                        <Icon name="user" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                        <Text size={18} color="#32325D" style={{ marginLeft: 13 }}>
                                                            Giới tính: {Gender}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.text}>
                                                        <Icon name="globe" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                        <Text size={18} color="#32325D" style={{ marginLeft: 10 }}>
                                                            Địa chỉ: {Address}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <Text style={{ fontSize: 18, fontWeight: "bold" }} >Thông tin công việc </Text>
                                                <View style={styles.card}>

                                                    <View style={styles.text}>
                                                        <Icon name="calendar" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                        <Text size={18} color="#32325D" style={{ marginLeft: 10 }}>
                                                            Tên công việc: {WorkName}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.text}>
                                                        <Icon name="users" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                        <Text size={18} color="#32325D" style={{ marginLeft: 10 }}>
                                                            Nhóm: {GroupName}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.text}>
                                                        <Icon name="user" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                        <Text size={18} color="#32325D" style={{ marginLeft: 15 }}>
                                                            Chức vụ: {PositionName}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.text}>
                                                        <Icon name="briefcase" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                        <Text size={18} color="#32325D" style={{ marginLeft: 10 }}>
                                                            Phòng ban: {DepartmentName}
                                                        </Text>
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                        <View>
                                            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Account', { MaND: 'A3' })}>
                                                <Text size={18} style={{ textAlign: 'center' }} color="white">Đổi mật khẩu</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ScrollView>
                            </ImageBackground>
                        }
                    </View>
                </View>
            </ScrollView>
        )
    }

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30, width }}>
                {renderInformation()}
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    profile: {
        marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
        // marginBottom: -HeaderHeight * 2,
        flex: 1
    },
    profileContainer: {
        width: width,
        padding: 0,
        zIndex: 1,
    },
    profileBackground: {
        width: width,
        height: height / 2
    },
    profileCard: {
        // position: "relative",
        padding: 15,
        marginHorizontal: 15,
        marginTop: 65,
        borderRadius: 12,
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 2,
        borderWidth: 2
    },
    card: {
        borderRadius: 12,
        backgroundColor: 'white',
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 2,
        borderWidth: 1,
        marginVertical: 10,
    },
    avatarContainer: {
        position: "relative",
        marginTop: -80,
        alignSelf: 'center'

    },
    avatar: {
        width: 124,
        height: 124,
        borderRadius: 62,
        borderWidth: 0,
    },
    nameInfo: {
        marginTop: 20,
        alignItems: "flex-start",
    },
    text: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        width: width / 1.2,
        borderRadius: 10,
        marginVertical: 10,
        borderColor: '#CCCCCC'
    },
    nameInfo1: {
        marginTop: 5,
        alignSelf: 'center'
    },
    divider: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#E9ECEF"
    },
    Button: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#00CCFF',
        padding: 10,
    },
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: "center",
        width: thumbMeasure,
        height: thumbMeasure
    }
});


export default BaseInformation;