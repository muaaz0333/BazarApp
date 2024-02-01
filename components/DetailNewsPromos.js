import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import NewsPromosNotification from './NewsPromosNotification';

const { height, width } = Dimensions.get('window')

const DetailNewsPromos = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>

            {/* Appbar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 , marginHorizontal: 24}}>
                <TouchableOpacity onPress={() => {navigation.navigate('NewsPromosNotification') }}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 88 }}>
                    <Text style={{ fontSize: 21, color: 'black', fontWeight: '700' }}>Promotion</Text>
                </View>
            </View>

            {/* UI */}
            <View style={{ padding: 15, width: width / 1.1, backgroundColor: '#FAF9FD', elevation: 5, borderRadius: 8, flexDirection: 'row', marginTop: 19, alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 17 }}>
                <View style={{ flex: 1, }}>
                    <Text style={{ fontSize: 22, color: '#54408C', fontWeight: 'bold', paddingLeft: 5, }}>50% Discount On All Desert</Text>
                    <Text style={{ fontSize: 18, color: '#54408C', paddingLeft: 5, fontWeight: '500' }}>Grab itu now!</Text>
                    <TouchableOpacity style={{ paddingLeft: 5, alignSelf: 'flex-start', marginTop: 14, }}
                    onPress={()=>navigation.navigate("CartConfirmOrder")}>
                        <Text style={[styles.btnordernow, { alignItems: 'center' }]}>Order Now</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../assets/Images/imageslider1.png')} />
                </View>
            </View>

            {/* Texts */}
            <View style={{ marginTop: 25 , marginHorizontal: 20}}>
                <View>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 19 }}>
                        Today 50% discount on all products in Chapter with online orders
                    </Text>

                </View>

                <View style={{ marginTop: 16 }}>
                    <Text style={{ fontSize: 15, fontWeight: '400', color:'grey' }}>
                        Excuse me... Who could ever resist a discount feast?
                    </Text>
                    <Image style={{ width: 25, height: 25 }} source={require('../assets/Icons/eyes.png')} />
                </View>

                <View style={{ marginTop: 16 }}>
                    <Text style={{ fontSize: 15, fontWeight: '400' , color:'grey'}}>
                        Hear me out . Today, October 21, 2021, Chapter has a 50% discount for any product. What are you waiting for, let's order now before it runs out.
                    </Text>
                </View>

                <View style={{ marginTop: 16 }}>
                    <Text style={{ fontSize: 15, fontWeight: '400' , color:'grey'}}>
                        All of the products are discounted, just order through
                        the Chapter app to enjoy this discount. From the
                        best to the best we have prepared for you, may you
                        always be happy when ordering at Chapter. Please
                        choose the best product you want.
                    </Text>
                </View>

                <View style={{ marginTop: 16 }}>
                    <Text style={{ fontSize: 15, fontWeight: '400', color:'grey' }}>
                        So, what's your call? Let's roll, order your comfort food now 😉
                    </Text>
                </View>


            </View>


        </View>
    )
}

export default DetailNewsPromos

const styles = StyleSheet.create({
    image: {
        width: 133,
        height: 163,
        borderRadius: 3.14,
        resizeMode: "cover"
    },
    btnordernow: {
        backgroundColor: '#54408C',
        textAlign: 'center',
        // width:150,
        // height:52,
        // marginLeft: 0,
        // marginRight: 24,
        color: 'white',
        borderRadius: 40,
        fontSize: 17,
        fontWeight: '600',
        paddingVertical: 8,
        paddingHorizontal: 24,

    },
})

