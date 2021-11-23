import React from "react";
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar, TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    Image,
    View,
    ScrollView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import axios from 'axios';
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import * as ImagePicker from 'expo-image-picker';
import ReactFileReader from 'react-file-reader';
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
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30, width }}>
                <View style={{ marginTop: 10, marginLeft: 10 }}>
                    <Text>Họ Tên: {this.state.User.HoNV} {this.state.User.TenNV}</Text>
                    <Image style={{ width: '100%', height: 300 }}
                        source={{ uri: this.state.User.Hinhanh }} />
                    <Text>Nickname: {this.state.User.enditi}</Text>
                    <Text>Giới Tính: {this.state.User.GioiTinh}</Text>
                    <Text>DOB: {this.state.User.Ngaysinh}</Text>
                    <Text>Ngày vào làm: {this.state.User.Ngayvaolam}</Text>
                </View>
            </ScrollView >
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
    group: {
        paddingTop: theme.SIZES.BASE * 2
    },
    title: {
        paddingBottom: theme.SIZES.BASE,
        paddingHorizontal: theme.SIZES.BASE * 2,
        marginTop: 44,
        color: argonTheme.COLORS.HEADER
    },
    socialConnect: {
        backgroundColor: argonTheme.COLORS.WHITE,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#8898AA"
    },
    socialButtons: {
        width: 140,
        height: 40,
        backgroundColor: "#fff",
        shadowColor: argonTheme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1
    },
    socialTextButtons: {
        color: argonTheme.COLORS.PRIMARY,
        fontWeight: "800",
        fontSize: 14
    },
    inputIcons: {
        marginRight: 12
    },
    passwordCheck: {
        paddingLeft: 15,
        paddingTop: 13,
        paddingBottom: 30
    },
    createButton: {
        width: width * 0.5,
        marginTop: 25
    }
});

export default ThongTinCaNhan;