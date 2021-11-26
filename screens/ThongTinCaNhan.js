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
    ScrollView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Images, argonTheme } from "../constants";
import * as ImagePicker from 'expo-image-picker';
import ReactFileReader from 'react-file-reader';
import { HeaderHeight } from "../constants/utils";

const thumbMeasure = (width - 48 - 32) / 3;
const { width, height } = Dimensions.get("screen");
var a = "NV02"
class ThongTinCaNhan extends React.Component {
    imageHandler = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            this.setState({ Hinhanh: e.target.result })
        }
    };
    constructor() {
        super();
        this.state = {
            User: [],
        }
    }
    handleFiles = (files) => {
        console.log(files.base64)
    }
    componentDidMount() {
        axios.get("https://api.chamcongvn.com/Api/NhanVien/getNhanVienbyId?manv=" + a)
            .then(response => {
                this.setState({
                    User: response.data
                });
            })
    }
    // SuaNhanVien = () => {
    //     axios.post("https://api.chamcongvn.com/Api/User/UpdateThongTinCaNhan", {
    //         MaNV: this.state.MaNV,
    //         HoNV: this.state.HoNV,
    //         TenNV: this.state.TenNV,
    //         Nickname: this.state.Nickname,
    //         GioiTinh: this.state.GioiTinh,
    //         Hinhanh: this.state.Hinhanh,
    //         Ngaysinh: this.state.Ngaysinh,
    //         Noisinh: this.state.Noisinh,
    //         Honnhan: this.state.Honnhan,
    //         Diachi: this.state.Diachi,
    //         Tamtru: this.state.Tamtru,
    //         Dienthoaididong: this.state.Dienthoaididong,
    //         Email: this.state.Email,
    //         SoCMND: this.state.SoCMND,
    //         Ngaycap: this.state.Ngaycap,
    //         Noicap: this.state.Noicap,
    //         Ngayvaolam: this.state.Ngayvaolam,
    //         Suckhoe: this.state.Suckhoe,
    //         Chieucao: this.state.Chieucao,
    //         Cannang: this.state.Cannang,
    //         Tinhtrang: this.state.Tinhtrang,
    //         Quoctich: this.state.Quoctich,
    //         Dantoc: this.state.Dantoc,
    //         TonGiao: this.state.TonGiao,
    //         MaBangcap: this.state.MaBangcap,
    //         Machuyenmon: this.state.Machuyenmon,
    //         MaToNhom: this.state.MaToNhom,
    //         Machucvu: this.state.Machucvu,
    //         Macongviec: this.state.Macongviec,
    //         Maphongban: this.state.Maphongban,
    //         BHXH: this.state.BHXH,
    //         BHYT: this.state.BHYT,
    //         BHTN: this.state.BHTN,
    //         Phicongdoan: this.state.Phicongdoan,
    //         GhiChu: this.state.GhiChu,
    //         UpdatedByUser: a.Username,
    //         UpdatedByDate: this.state.UpdatedByDate
    //     })
    //         .then(json => {
    //             if (json.data.Status === 'Updated') {
    //                 console.log(json.data.Status);
    //                 Alert.alert("Sửa Dữ Liệu Thành Công");
    //             } else {
    //                 alert('Data not Saved');
    //             }
    //         })
    // }
    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    renderThongTinCN = () => {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <Block flex style={styles.profile}>
                    <Block flex>
                        <ImageBackground
                            source={Images.ProfileBackground}
                            style={styles.profileContainer}
                            imageStyle={styles.profileBackground}
                        >
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                style={{ width, marginTop: '25%' }}
                            >
                                <Block flex style={styles.profileCard}>
                                    <Block middle style={styles.avatarContainer}>
                                        <Image
                                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                                            style={styles.avatar}
                                        />
                                    </Block>
                                    <Block middle style={styles.nameInfo1}>
                                        <Text bold size={28} color="#32325D">
                                            Họ và tên, Tuổi
                                        </Text>
                                    </Block>
                                    <Block flex>
                                        <Block middle style={styles.nameInfo}>
                                            <Block style={styles.text}>
                                            <Icon name="user" style={styles.icon} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 5 }}
                                                    multiline>
                                                    Nick Name:
                                                </Text>
                                            </Block>

                                            <Block style={styles.text}>
                                            <Icon name="envelope" style={styles.icon} color="#00CCCC" />

                                                <Text size={16} color="#32325D" style={{ marginTop: 5, marginLeft: 5 }}>
                                                    Email:
                                                </Text>
                                            </Block>
                                            <Block style={styles.text}>
                                            <Icon name="mobile" style={styles.icon} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 5 }}>
                                                    SDT:
                                                </Text>
                                            </Block>
                                            <Block style={styles.text}>
                                            <Icon name="user" style={styles.icon} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 5 }}>
                                                    Giới Tính:
                                                </Text>
                                            </Block>
                                            <Block style={styles.text}>
                                            <Icon name="map-marker" style={styles.icon} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 5 }}>
                                                    Que quan:
                                                </Text>
                                            </Block>
                                            <Block style={styles.text}>
                                            <Icon name="calendar" style={styles.icon} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 5 }}>
                                                    Ngay sinh:
                                                </Text>
                                            </Block>
                                            <Block style={styles.text}>
                                            <Icon name="calendar" style={styles.icon} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 5 }}>
                                                    Ngay vao lam:
                                                </Text>
                                            </Block>
                                            <Block style={styles.text}>
                                            <Icon name="user" style={styles.icon} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 5 }}>
                                                    Chuc vu:
                                                </Text>
                                            </Block>
                                            <Block style={styles.text}>
                                            <Icon name="suitcase" style={styles.icon} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 5, marginLeft: 5 }}>
                                                    Phong ban:
                                                </Text>
                                            </Block>
                                        </Block>
                                    </Block>
                                    <Block style={styles.info}>
                                            <Block>
                                                <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
                                                    <Text >Edit thông tin</Text>
                                                </TouchableOpacity>
                                            </Block>

                                            <Block>
                                                <TouchableOpacity style={styles.commandButton1} onPress={() => { }}>
                                                    <Text style={styles.panelButtonTitle}>Đổi mật khẩu</Text>
                                                </TouchableOpacity>
                                            </Block>
                                        

                                    </Block>
                                </Block>
                            </ScrollView>
                        </ImageBackground>
                    </Block>
                </Block>
            </ScrollView>
        )
    }

    render() {
        return (
            <Block flex center>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30, width }}>
                    {this.renderThongTinCN()}
                </ScrollView>
            </Block>
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
        height: height,
        padding: 0,
        zIndex: 1
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
        alignContent:'stretch',
        width:width/3
    },
    commandButton1: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#0033CC',
        alignItems: 'center',
        marginTop: 10,
        alignContent:'stretch',
        marginLeft: 80,
        width:width/3
    },
    profileBackground: {
        width: width,
        height: height / 2
    },
    profileCard: {
        // position: "relative",
        padding: theme.SIZES.BASE,
        marginHorizontal: theme.SIZES.BASE,
        marginTop: 65,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 2
    },
    avatarContainer: {
        position: "relative",
        marginTop: -80
    },
    button: {
        width: width / 2,
        fontSize: 20,
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
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: "center",
        width: thumbMeasure,
        height: thumbMeasure
    },
    info: {
        flexDirection: "row",
    },
    icon: {
        fontSize: 28,
        width: 25,
        height: 30,
    },
    panelButtonTitle:{
        color: "white",
    }
});


export default ThongTinCaNhan;