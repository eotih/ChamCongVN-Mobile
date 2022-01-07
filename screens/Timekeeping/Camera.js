import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  View,
} from "react-native";
import * as Device from "expo-device";
import * as Location from "expo-location";
import { Camera } from "expo-camera";
import * as Network from "expo-network";
import publicIP from "react-native-public-ip";
import * as FaceDetector from "expo-face-detector";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { SafeAreaView } from "react-native-safe-area-context";
import MaskedView from "@react-native-community/masked-view";
import axios from "../../functions/BaseUrl";
import { Card } from "react-native-paper";

export default function checkCamera() {
  const [valueStatus, setValueStatus] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [deviceInfo, setDeviceInfo] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [IP, setPublicIP] = useState("");
  const [employees, setEmployees] = useState([]);
  const [fillCircle, setFillCircle] = useState(0);
  const [image, setImage] = useState("");
  const [ipOrganization, setIpOrganization] = useState("");
  const ref = useRef(null);
  const { Employee, EmployeeID, DepartmentName, PositionName } = employees;

  useEffect(() => {
    getPermissionCameraAsync();
    getPermissionLocationAsync();
    getPublicIP();
    getDeviceInfo();
    getLocationInfo();
    getIpOrganization();
    setLoading(true);
  }, [valueStatus]);

  const getInfoEmployee = async (id) => {
    const response = await axios.get(`Employee/Employee/${id}`);
    const data = response.data;
    setEmployees(data);
    { data ? setModalVisible(true) : setModalVisible(false) }
    { data ? setLoading(true) : setLoading(false) }
  }
  const getPermissionLocationAsync = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
  };
  const getPermissionCameraAsync = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === valueStatus);
  };
  const getDeviceInfo = () => {
    setDeviceInfo(Device.modelName);
  };
  const getLocationInfo = async () => {
    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  };
  const getPublicIP = async () => {
    publicIP()
      .then((ip) => {
        setPublicIP(ip);
      })
      .catch((error) => {
        console.log(error);
        // 'Unable to get IP address.'
      });
  };
  const takePhoto = async () => {
    if (ref.current) {
      const options = { quality: 0.7, base64: true };
      const data = await ref.current.takePictureAsync(options);
      const source = data.base64;
      setImage(source);
      const response = {
        Latitude: latitude,
        Longitude: longitude,
        PublicIP: IP,
        Device: deviceInfo,
        Image: source,
      };
      authPermission(response);
    }
  };
  const faceRecognition = async (object) => {
    const formData = new FormData();
    formData.append("base64", object.Image);
    const res = await axios.post(
      `${ipOrganization}nhandienkhuonmat`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const { name } = res.data;
    console.log(name.split(" ")[0]);
    if (name && name !== "Unknown") {
      object.EmployeeID = name.split(" ")[0];
      const res = await axios.post(
        "TimeKeeper/CheckTime",
        object,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { Status } = res.data;
      if (Status !== 200) {
        alert("Bạn đã chấm công rồi");
        navigate('Home');
      } else {
        getInfoEmployee(object.EmployeeID);

      }
    } else {
      console.log("Unknown");
    }
    // { name ? setModalVisible(true) : setModalVisible(false) }
    // { name ? setLoading(true) : setLoading(false) }
    // setName(name);
  };
  const authPermission = async (object) => {
    const res = await axios.post(
      "TimeKeeper/AuthPermission",
      object,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { Status } = res.data;
    if (Status === 200) {
      faceRecognition(object);
    } else {
      alert("Vui lòng chấm công lại");
    }
  };
  const getIpOrganization = async () => {
    const res = await axios.get(`Organization/Organization`);
    const { PythonIP } = res.data[0];
    setIpOrganization(PythonIP);
  }
  const handleFacesDetected = ({ faces }) => {
    if (faces.length !== 1) {
      return;
    }
    const face = faces[0];
    // Check if face in circle setFillCircle(fillCircle + 10)
    const { bounds } = face;
    const { origin, size } = bounds;
    const { x, y, width, height } = origin;
    const { width: faceWidth, height: faceHeight } = size;
    const centerX = x + faceWidth / 2;
    const centerY = y + faceHeight / 2;
    const radius = Dimensions.get("window").width / 2;
    const isInCircle =
      (centerX - radius) ** 2 + (centerY - radius) ** 2 < radius ** 2;
    if (isInCircle) {
      setFillCircle(fillCircle + 10);
      if (fillCircle < 10) {
        takePhoto();
      }
      if (fillCircle > 100) {
        setLoading(false);
      }
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Click vào đây để bật máy ảnh"
          onPress={() => setValueStatus("granted")}
        />
      </View>
    );
  }

  if (!loading) {
    return (
      // set loading in center of screen
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../../assets/imgs/logo.png")}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Loading...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <MaskedView
        style={StyleSheet.absoluteFill}
        maskElement={<View style={styles.mask} />}
      >
        {fillCircle == 100 ?
          <Image
            style={styles.image}
            source={{ uri: "data:image/image/png;base64," + image }} />
            
          :<Camera
            style={StyleSheet.absoluteFill}
            ref={ref}
            type={Camera.Constants.Type.front}
            onFacesDetected={handleFacesDetected}
            faceDetectorSettings={{
              mode: FaceDetector.Constants.Mode.fast, // ignore faces in the background
              detectLandmarks: FaceDetector.Constants.Landmarks.none,
              runClassifications: FaceDetector.Constants.Classifications.all,
              minDetectionInterval: 125,
              tracking: false
            }}
          >
            <View style={{marginTop: PREVIEW_RECT.minY * 7 }}></View>
              <AnimatedCircularProgress
                style={styles.circularProgress}
                fill={fillCircle}
                size={PREVIEW_SIZE}
                width={10}
                backgroundWidth={7}
                tintColor="#fea621"
                backgroundColor="#e8e8e8"
              />
          </Camera>}
      </MaskedView>

      {employees.length !== 0 ?
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.instructionsContainer}>
            <Card
              style={styles.cardPopUp}
            >
              <View style={styles.viewPopUp}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Thông tin nhân viên</Text>
                <View style={styles.viewTextDisplay}>
                  <Text style={styles.textPopUp}>Mã nhân viên: {EmployeeID}</Text>
                  <Text style={styles.textPopUp}>Tên nhân viên: {Employee.FullName}</Text>
                  <Text style={styles.textPopUp}>Vị trí: {DepartmentName}</Text>
                  <Text style={styles.textPopUp}>Chức vụ: {PositionName}</Text>
                </View>
                <TouchableOpacity
                  style={styles.buttonPopUp}
                  onPress={() => {
                    // go home screen
                    navigate('Home');
                    setModalVisible(!modalVisible)
                    // clear data
                    setImage('')
                    setFillCircle(0)
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Xác nhận</Text>
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        </Modal> : null}
    </SafeAreaView>
  );
}

const { width: windowWidth, height: windowHeight } = Dimensions.get("window")
const PREVIEW_SIZE = windowWidth * 0.9
const PREVIEW_RECT = {
  minX: (windowWidth - PREVIEW_SIZE) / 2,
  minY: (windowWidth - PREVIEW_SIZE) / 2,
  maxX: (windowWidth + PREVIEW_SIZE) / 2,
  maxY: (windowWidth + PREVIEW_SIZE) / 2,
  width: PREVIEW_SIZE,
  height: PREVIEW_SIZE
}
const styles = StyleSheet.create({
  // get window width
  cardPopUp: {
    width: windowWidth,
    height: windowHeight / 5,
    backgroundColor: '#ffebcf',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewPopUp: {
    width: windowWidth,
    height: windowHeight / 2,
    backgroundColor: '#ffebcf',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonPopUp: {
    width: windowWidth - 20,
    height: 50,
    backgroundColor: '#fea621',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textPopUp: {
    fontSize: 20,
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  viewTextDisplay: {
    // Overlay the view on top of the card
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 20,

  },
  mask: {
    borderRadius: PREVIEW_SIZE / 2,
    height: PREVIEW_SIZE,
    width: PREVIEW_SIZE,
    marginTop: PREVIEW_RECT.minY * 8,
    alignSelf: "center",
    backgroundColor: "white"
  },
  circularProgress: {
    top: PREVIEW_RECT.minY,
    left: PREVIEW_RECT.minX,
    width: PREVIEW_SIZE,
    height: PREVIEW_SIZE,
    justifyContent: "center",
  },
  instructionsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: PREVIEW_RECT.minY + PREVIEW_SIZE
  },
  image: {
    width: PREVIEW_SIZE.minY,
    height: PREVIEW_SIZE,
    marginTop: PREVIEW_RECT.minY * 8,
  },

})