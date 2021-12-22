import React from 'react';
import { View, Text, Dimensions,StyleSheet } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import Icon from 'react-native-vector-icons/FontAwesome';

function SimplePie () {
    const pieData = [
        { value: 1000, color: '#177AD5' },
        { value: 3000, color: '#79D2DE' },
        { value: 2600, color: '#ED6665' },
        { value: 2600, color: 'black' },
    ];
    return (
        <View style={{flex: 1,justifyContent: 'center'}} >
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Biểu đồ chi tiết lương
            </Text>
            <PieChart
                donut
                showText
                textColor="black"
                innerRadius={70}
                showTextBackground
                textBackgroundColor="white"
                textBackgroundRadius={22}
                data={pieData}
            />
            <View style={{ flexDirection: 'row', borderWidth: 1, width:width/2, marginVertical:10}}>
                <View style={{ marginRight: 10 }}>
                    <Icon size={26}
                        name="circle"
                        color="#177AD5" />
                    <Icon size={26}
                        name="circle"
                        color="#79D2DE" />
                    <Icon size={26}
                        name="circle"
                        color="#ED6665" />
                    <Icon size={26}
                        name="circle"
                        color="#177AD5" />
                </View>
                <View>
                    <Text style={styles.text}>Lương cơ bản</Text>
                    <Text style={styles.text}>Thưởng tăng ca</Text>
                    <Text style={styles.text}>Thưởng ngày lễ</Text>
                    <Text style={styles.text}>Lương cơ bản</Text>
                </View>
            </View>
        </View>
    );
};
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    text:{
        fontSize: 18,
    },
})
export default SimplePie;