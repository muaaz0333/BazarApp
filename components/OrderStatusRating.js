import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';


const OrderStatusRating = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, marginHorizontal: 24 }}>
            <View style={{ alignItems: 'center', marginTop: 70 }}>
                <Image source={require('../assets/Icons/success.png')} />
            </View>

            <View style={{ marginTop: 24 }}>
                <Text style={{ textAlign: 'center', fontWeight: '700', color: 'black', fontSize: 24 }}>
                    You Received The Order!
                </Text>
            </View>

            <View style={{ marginTop: 8 }}>
                <Text style={{ textAlign: 'center', fontSize: 16 , color:'grey'}}>
                    Order #2930541
                </Text>
            </View>



            <View style={{ backgroundColor: '#D7DBDD', marginTop: 30, paddingHorizontal: 24, paddingVertical: 32, borderRadius: 10 , elevation:8}}>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 21, color: '#54408C', fontWeight: '700' }}>
                        Tell us your feedback <Image source={require('../assets/Icons/hand.png')} />
                    </Text>
                </View>
                <View>
                    <Text style={{ textAlign: 'center', color: '#54408C', fontSize: 16, marginTop: 8 }}>
                        Lorem ipsum dolor sit amet consectetur. Dignissim magna vitae
                    </Text>
                </View>
                <View style={{ marginTop: 24, flexDirection: 'row', alignSelf: 'center' }}>
                    <Image style={{ width: 28, height: 28 }} source={require('../assets/Icons/StarYellow.png')} />
                    <Image style={{ marginLeft: 8, width: 28, height: 28 }} source={require('../assets/Icons/StarYellow.png')} />
                    <Image style={{ marginLeft: 8, width: 28, height: 28 }} source={require('../assets/Icons/StarYellow.png')} />
                    <Image style={{ marginLeft: 8, width: 28, height: 28 }} source={require('../assets/Icons/StarYellow.png')} />
                    <Image style={{ marginLeft: 8, tintColor: 'black', width: 26, height: 26 }} source={require('../assets/Icons/Star.png')} />
                </View>

                <View style={{marginTop:24}}>
                    <Text style={{textAlign:'center', color:'black', fontSize:15}}>
                        Write something for us!
                    </Text>
                </View>

            </View>



             {/* Button */}
             <View style={{ marginTop: 40 }}>
                <TouchableOpacity onPress={() => { navigation.navigate("Home")}}>
                    <Text style={styles.donebtn}>
                        Done
                    </Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

export default OrderStatusRating

const styles = StyleSheet.create({

    donebtn: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        backgroundColor: '#54408C',
        paddingVertical: 12,
        borderRadius: 30,
        fontWeight: '600'
    }
})