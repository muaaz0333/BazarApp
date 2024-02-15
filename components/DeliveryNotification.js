import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const DeliveryNotification = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, marginHorizontal: 24 }}>

            {/* Appbar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 }}>
                <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>
                <View style={{ marginRight: 95 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>Notification</Text>
                </View>
            </View>

            {/* Current */}
            <View style={{ marginTop: 42 }}>
                <View>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>
                        Current
                    </Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("NewsPromosNotification")}>
                <View style={{ borderWidth: 1, borderColor: 'silver', marginTop: 16, borderRadius: 20, paddingVertical: 18, paddingHorizontal: 16, flexDirection: 'row' }}>
                    <View>
                        <Image style={{ width: 50, height: 50, borderRadius: 12 }} source={require('../assets/Images/categoryBook1.png')} />
                    </View>
                    <View style={{ marginLeft: 16 }}>
                        <Text style={{ fontSize: 17, color: 'black', fontWeight: '700' }}>
                            The Da Vinci Code
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                            <Text style={{ fontSize: 15, color: '#3784FB', fontWeight: '500' }}>
                                On the way
                            </Text>
                            <View style={{ width: 7, height: 7, backgroundColor: 'silver', borderRadius: 10, marginHorizontal: 8 }}></View>
                            <Text style={{ fontWeight: '600' , color:'grey'}}>
                                1 items
                            </Text>
                        </View>

                    </View>
                </View>
                </TouchableOpacity>
            </View>


           

            <View style={{ marginTop: 24 }}>
                <View>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>
                        October 2021
                    </Text>
                </View>
                <View style={{ borderWidth: 1, padding: 16, borderRadius: 12, borderColor: 'silver', marginTop: 16 }}>

                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                        <View>
                            <Image style={{ width: 50, height: 50, borderRadius: 12 }} source={require('../assets/Images/book3.jpg')} />
                        </View>
                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '700' }}>
                                A Million To One
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Text style={{ fontSize: 15, color: '#18A057', fontWeight: '500' }}>
                                    Delivered
                                </Text>
                                <View style={{ width: 7, height: 7, backgroundColor: 'silver', borderRadius: 10, marginHorizontal: 8 }}></View>
                                <Text style={{ fontWeight: '600', color:'grey' }}>
                                    1 items
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ height: 1, width: 345, backgroundColor: 'silver', marginVertical: 16 }}></View>

                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                        <View>
                            <Image style={{ width: 50, height: 50, borderRadius: 12 }} source={require('../assets/Images/categoryBook4.png')} />
                        </View>
                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '700' }}>
                                The Waiting
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Text style={{ fontSize: 15, color: '#18A057', fontWeight: '500' }}>
                                    Delivered
                                </Text>
                                <View style={{ width: 7, height: 7, backgroundColor: 'silver', borderRadius: 10, marginHorizontal: 8 }}></View>
                                <Text style={{ fontWeight: '600', color:'grey' }}>
                                    5 items
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ height: 1, width: 345, backgroundColor: 'silver', marginVertical: 16 }}></View>

                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                        <View>
                            <Image style={{ width: 50, height: 50, borderRadius: 12 }} source={require('../assets/Images/categoryBook6.png')} />
                        </View>
                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: '700' }}>
                                Bright Young Women
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Text style={{ fontSize: 15, color: '#EF5A56', fontWeight: '500' }}>
                                    Cancelled
                                </Text>
                                <View style={{ width: 7, height: 7, backgroundColor: 'silver', borderRadius: 10, marginHorizontal: 8 }}></View>
                                <Text style={{ fontWeight: '600' , color:'grey'}}>
                                    2 items
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default DeliveryNotification

const styles = StyleSheet.create({})