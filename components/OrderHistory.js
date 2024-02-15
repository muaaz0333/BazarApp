import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const OrderHistory = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, marginHorizontal: 24 }}>

            {/* Appbar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 }}>
                <TouchableOpacity onPress={() => {navigation.navigate("Profile") }}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 80 }}>
                    <Text style={{ fontSize: 21, color: 'black', fontWeight: '700' }}>Order History</Text>
                </View>
            </View>

            {/* October 2021 */}
            <View style={{ marginTop: 26 }}>
                <View>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>
                        October 2021
                    </Text>
                </View>
                <View style={{ borderWidth: 1, paddingVertical: 16, borderColor: 'silver', borderRadius: 10, marginTop: 16, paddingHorizontal: 10 }}>
                    <View style={{}}>
                        <View style={{ flexDirection: 'row', borderBottomWidth: 1, paddingBottom: 18, borderColor: 'silver' }}>
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
                    </View>

                    {/* <View style={{width:300, height:1, borderColor:'silver'}}></View> */}

                    <View style={{ marginTop: 16, borderBottomWidth: 1, paddingBottom: 18, borderColor: 'silver' }}>
                        <View style={{ flexDirection: 'row', paddingVertical: 0 }}>
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
                    </View>



                    <View style={{ marginTop: 16 }}>
                        <View style={{ flexDirection: 'row', paddingVertical: 0 }}>
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
        </View>
    )
}

export default OrderHistory

const styles = StyleSheet.create({})