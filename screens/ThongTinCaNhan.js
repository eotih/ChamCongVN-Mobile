import React from "react";
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar, TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    Image,
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
    // pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //       mediaTypes: ImagePicker.MediaTypeOptions.All,
    //       allowsEditing: true,
    //       aspect: [4, 3],
    //       quality: 1,
    //     });
    //     if (!result.cancelled) {
    //     let reader = new FileReader();
    //     reader.readAsDataURL(result.uri);
    //     reader.onload = (e) => {
    //         let abc =  e.target.result;
    //     }
    //       //this.setState({Hinhanh: result.uri});
    //     }
    //   };
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
            MaNV: '',
            HoNV: '',
            TenNV: '',
            Nickname: '',
            GioiTinh: '',
            Hinhanh: '',
            Ngaysinh: '',
            Noisinh: '',
            Honnhan: '',
            Diachi: '',
            Tamtru: '',
            Dienthoaididong: '',
            Email: '',
            SoCMND: '',
            Ngaycap: '',
            Noicap: '',
            Ngayvaolam: '',
            Suckhoe: '',
            Chieucao: '',
            Cannang: '',
            Tinhtrang: '',
            Quoctich: '',
            Dantoc: '',
            TonGiao: '',
            MaBangcap: '',
            Machuyenmon: '',
            MaToNhom: '',
            Machucvu: '',
            Macongviec: '',
            Maphongban: '',
            BHXH: '',
            BHYT: '',
            BHTN: '',
            Phicongdoan: '',
            GhiChu: '',
            UpdatedByUser: '',
            UpdatedByDate: '',
        }
    }
    handleFiles = (files) => {
        console.log(files.base64)
      }
    componentDidMount() {
        axios.get("https://api.chamcongvn.com/Api/NhanVien/getNhanVienbyId?manv=" + a)
            .then(response => {
                this.setState({
                    MaNV: response.data.MaNV,
                    HoNV: response.data.HoNV,
                    TenNV: response.data.TenNV,
                    Nickname: response.data.Nickname,
                    GioiTinh: response.data.GioiTinh,
                    Hinhanh: response.data.Hinhanh,
                    Ngaysinh: response.data.Ngaysinh,
                    Noisinh: response.data.Noisinh,
                    Honnhan: response.data.Honnhan,
                    Diachi: response.data.Diachi,
                    Tamtru: response.data.Tamtru,
                    Dienthoaididong: response.data.Dienthoaididong,
                    Email: response.data.Email,
                    SoCMND: response.data.SoCMND,
                    Ngaycap: response.data.Ngaycap,
                    Noicap: response.data.Noicap,
                    Ngayvaolam: response.data.Ngayvaolam,
                    Suckhoe: response.data.Suckhoe,
                    Chieucao: response.data.Chieucao,
                    Cannang: response.data.Cannang,
                    Tinhtrang: response.data.Tinhtrang,
                    Quoctich: response.data.Quoctich,
                    Dantoc: response.data.Dantoc,
                    TonGiao: response.data.TonGiao,
                    MaBangcap: response.data.MaBangcap,
                    Machuyenmon: response.data.Machuyenmon,
                    MaToNhom: response.data.MaToNhom,
                    Machucvu: response.data.Machucvu,
                    Macongviec: response.data.Macongviec,
                    Maphongban: response.data.Maphongban,
                    BHXH: response.data.BHXH,
                    BHYT: response.data.BHYT,
                    BHTN: response.data.BHTN,
                    Phicongdoan: response.data.Phicongdoan,
                    GhiChu: response.data.GhiChu,
                    UpdatedByUser: response.data.UpdatedByUser,
                    UpdatedByDate: response.data.UpdatedByDate,
                });
            })
    }
    SuaNhanVien = () => {
        axios.post("https://api.chamcongvn.com/Api/User/UpdateThongTinCaNhan", {
            MaNV: this.state.MaNV,
            HoNV: this.state.HoNV,
            TenNV: this.state.TenNV,
            Nickname: this.state.Nickname,
            GioiTinh: this.state.GioiTinh,
            Hinhanh: this.state.Hinhanh,
            Ngaysinh: this.state.Ngaysinh,
            Noisinh: this.state.Noisinh,
            Honnhan: this.state.Honnhan,
            Diachi: this.state.Diachi,
            Tamtru: this.state.Tamtru,
            Dienthoaididong: this.state.Dienthoaididong,
            Email: this.state.Email,
            SoCMND: this.state.SoCMND,
            Ngaycap: this.state.Ngaycap,
            Noicap: this.state.Noicap,
            Ngayvaolam: this.state.Ngayvaolam,
            Suckhoe: this.state.Suckhoe,
            Chieucao: this.state.Chieucao,
            Cannang: this.state.Cannang,
            Tinhtrang: this.state.Tinhtrang,
            Quoctich: this.state.Quoctich,
            Dantoc: this.state.Dantoc,
            TonGiao: this.state.TonGiao,
            MaBangcap: this.state.MaBangcap,
            Machuyenmon: this.state.Machuyenmon,
            MaToNhom: this.state.MaToNhom,
            Machucvu: this.state.Machucvu,
            Macongviec: this.state.Macongviec,
            Maphongban: this.state.Maphongban,
            BHXH: this.state.BHXH,
            BHYT: this.state.BHYT,
            BHTN: this.state.BHTN,
            Phicongdoan: this.state.Phicongdoan,
            GhiChu: this.state.GhiChu,
            UpdatedByUser: a.Username,
            UpdatedByDate: this.state.UpdatedByDate
        })
            .then(json => {
                if (json.data.Status === 'Updated') {
                    console.log(json.data.Status);
                    Alert.alert("Sửa Dữ Liệu Thành Công");
                } else {
                    alert('Data not Saved');
                }
            })
    }
    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    renderThongTinCN = () => {
        const { navigation } = this.props;
        return (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30, width }}>
                <Block flex middle >
                    <Block safe flex middle>
                        <Block style={styles.group}>
                            <Block flex={0.17} middle>
                                <Block middle width={width * 0.8} >
                                <ReactFileReader fileTypes={[".csv",".zip"]} base64={true} multipleFiles={false} handleFiles={this.handleFiles}>
                                    <TouchableOpacity>
                                        <Image source={{ uri: this.state.Hinhanh }} style={{ width: 120, height: 150 }} />
                                    </TouchableOpacity>
                                    </ReactFileReader>
                                </Block>
                                <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                                    <Text>Họ Nhân Viên</Text>
                                    <Input
                                        onChangeText={(val) => this.updateInputVal(val, 'HoNV')} value={this.state.HoNV}
                                    />
                                </Block>
                                <Block width={width * 0.8} >
                                    <Text>Tên Nhân Viên</Text>
                                    <Input
                                        borderless
                                        onChangeText={(val) => this.updateInputVal(val, 'TenNV')} value={this.state.TenNV}
                                    />
                                </Block>
                                <Block width={width * 0.8} >
                                    <Text>Nickname</Text>
                                    <Input
                                        borderless
                                        onChangeText={(val) => this.updateInputVal(val, 'Nickname')} value={this.state.Nickname}
                                    />
                                </Block>
                                <Block width={width * 0.8} >
                                    <Text>Số Điện Thoại</Text>
                                    <Input
                                        borderless
                                        onChangeText={(val) => this.updateInputVal(val, 'Dienthoaididong')} value={this.state.Dienthoaididong}
                                    />
                                </Block>
                                <Block width={width * 0.8} >
                                    <Text>Địa Chỉ</Text>
                                    <Input
                                        borderless
                                        onChange={this.onChangeDiachi} value={this.state.Diachi}
                                    />
                                </Block>

                                <Block middle>
                                    <Button color="info" style={styles.createButton} onPress={this.SuaNhanVien}>
                                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                            CẬP NHẬP
                                        </Text>
                                    </Button>
                                </Block>

                            </Block>
                        </Block>
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