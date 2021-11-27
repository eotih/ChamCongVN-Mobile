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
    imageHandler = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            this.setState({ Hinhanh: e.target.result })
        }
    };

    handleFiles = (files) => {
        console.log(files.base64)
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
                                            source={{ uri: this.state.Avatar }}
                                            style={styles.avatar}
                                        />
                                    </Block>
                                    <Block middle style={styles.nameInfo1}>
                                        <Text bold size={28} color="#32325D">
                                            {this.state.FullName}
                                        </Text>
                                    </Block>
                                    <Block flex>
                                        <Block middle style={styles.nameInfo}>
                                            <Block style={styles.text}>
                                                <Icon name="user" size={32} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 15 }}>
                                                    {this.state.NickName}
                                                </Text>
                                            </Block>
                                            <Block style={styles.text}>
                                                <Icon name="phone" size={32} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 15 }}>
                                                    {this.state.Phone}
                                                </Text>
                                            </Block>
                                            <Block style={styles.text}>
                                                <Icon name="user" size={32} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 25 }}>
                                                    {this.state.Gender}
                                                </Text>
                                            </Block>
                                            <Block style={styles.text}>
                                                <Icon name="globe" size={32} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 15 }}>
                                                    {this.state.Address}
                                                </Text>
                                            </Block>
                                            <Block style={styles.text}>
                                                <Icon name="calendar" size={32} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 15 }}>
                                                    {this.state.WorkName}
                                                </Text>
                                            </Block>
                                            <Block style={styles.text}>
                                                <Icon name="calendar" size={32} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 15 }}>
                                                    {this.state.GroupName}
                                                </Text>
                                            </Block>
                                            <Block style={styles.text}>
                                                <Icon name="user" size={32} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 25 }}>
                                                    {this.state.PositionName}
                                                </Text>
                                            </Block>
                                            <Block style={styles.text}>
                                                <Icon name="briefcase" size={32} color="#00CCCC" />
                                                <Text size={16} color="#32325D" style={{ marginTop: 10, marginLeft: 15 }}>
                                                    {this.state.DepartmentName}
                                                </Text>
                                            </Block>
                                        </Block>
                                    </Block>
                                    <Block style={styles.info}>
                                        <Block>
                                            <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('Profile', {Employee: this.state.User})}>
                                                <Text >Edit thông tin</Text>
                                            </TouchableOpacity>
                                        </Block>

                                        <Block>
                                            <TouchableOpacity style={styles.commandButton1} onPress={() => navigation.navigate('Account', { MaND: 'A3' })}>
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
    info: {
        paddingHorizontal: 40
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
    }
});


export default ThongTinCaNhan;