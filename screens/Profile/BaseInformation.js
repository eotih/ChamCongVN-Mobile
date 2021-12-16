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
import Axios from "../../constants/BaseUrl";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Images, argonTheme } from "../../constants";
import * as ImagePicker from 'expo-image-picker';
import ReactFileReader from 'react-file-reader';
import { HeaderHeight } from "../../constants/utils";

const thumbMeasure = (width - 48 - 32) / 3;
const { width, height } = Dimensions.get("screen");
const today = new Date().getFullYear();
var a = "1"
class ThongTinCaNhan extends React.Component {
    constructor() {
        super();
        this.state = {
            User: [],
        }
    }

    async getInfoEmployee(ID) {
        const res = await Axios.get('Employee/GetEmployeeByID?ID=' + ID);
        return res.data;
    }
    componentDidMount() {
        this.getInfoEmployee(a).then((res) => {
            this.setState({
                User: res,
                Avatar: res.Employee.Image,
                FullName: res.Employee.FullName,
                NickName: res.Employee.NickName,
                Gender: res.Employee.Gender,
                WorkName: res.WorkName,
                GroupName: res.GroupName,
                PositionName: res.PositionName,
                DepartmentName: res.DepartmentName,
                Address: res.Employee.Address,
                Phone: res.Employee.Phone,
            })
        });
    }


    renderThongTinCN = () => {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <View  style={styles.profile}>
                    <View >
                        <ImageBackground
                            source={Images.ProfileBackground}
                            style={styles.profileContainer}
                            imageStyle={styles.profileBackground}
                        >
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                style={{ width, marginTop: '25%' }}
                            >
                                <View  style={styles.profileCard}>
                                    <View middle style={styles.avatarContainer}>
                                        <Image
                                            source={{ uri: this.state.Avatar }}
                                            style={styles.avatar}
                                        />
                                    </View>
                                    <View middle style={styles.nameInfo1}>
                                        <Text color="#32325D">
                                            {this.state.FullName}
                                        </Text>
                                    </View>
                                    <View >
                                        <View style={styles.nameInfo}>
                                            <Text h6 >Thông tin cá nhân </Text>
                                            <View style={styles.card}>
                                                <View style={styles.text}>
                                                    <Icon name="user" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                    <Text size={18} color="#32325D" style={{ marginLeft: 13 }}>
                                                        NickName: {this.state.NickName}
                                                    </Text>
                                                </View>
                                                <View style={styles.text}>
                                                    <Icon name="phone" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                    <Text size={18} color="#32325D" style={{ marginLeft: 10 }}>
                                                        Số điện thoại: {this.state.Phone}
                                                    </Text>
                                                </View>
                                                <View style={styles.text}>
                                                    <Icon name="user" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                    <Text size={18} color="#32325D" style={{ marginLeft: 13 }}>
                                                        Giới tính: {this.state.Gender}
                                                    </Text>
                                                </View>
                                                <View style={styles.text}>
                                                    <Icon name="globe" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                    <Text size={18} color="#32325D" style={{  marginLeft: 10 }}>
                                                        Địa chỉ: {this.state.Address}
                                                    </Text>
                                                </View>
                                            </View>
                                            <Text h6 >Thông tin công việc </Text>
                                            <View style={styles.card}>

                                                <View style={styles.text}>
                                                    <Icon name="calendar" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                    <Text size={18} color="#32325D" style={{ marginLeft: 10 }}>
                                                        Tên công việc: {this.state.WorkName}
                                                    </Text>
                                                </View>
                                                <View style={styles.text}>
                                                    <Icon name="users" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                    <Text size={18} color="#32325D" style={{ marginLeft: 10 }}>
                                                        Nhóm: {this.state.GroupName}
                                                    </Text>
                                                </View>
                                                <View style={styles.text}>
                                                    <Icon name="user" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                    <Text size={18} color="#32325D" style={{ marginLeft: 15 }}>
                                                        Chức vụ: {this.state.PositionName}
                                                    </Text>
                                                </View>
                                                <View style={styles.text}>
                                                    <Icon name="briefcase" size={24} color="#00CCCC" style={{ marginLeft: 10 }} />
                                                    <Text size={18} color="#32325D" style={{ marginLeft: 10 }}>
                                                        Phòng ban: {this.state.DepartmentName}
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
                    </View>
                </View>
            </ScrollView>
        )
    }

    render() {
        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30, width }}>
                    {this.renderThongTinCN()}
                </ScrollView>
            </View>
        );
    }
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
        marginTop: -80
    },
    avatar: {
        width: 124,
        height: 124,
        borderRadius: 62,
        borderWidth: 0
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
        marginVertical:10,
        borderColor: '#CCCCCC'
    },
    nameInfo1: {
        marginTop: 5,
        flexDirection: 'row'
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


export default ThongTinCaNhan;