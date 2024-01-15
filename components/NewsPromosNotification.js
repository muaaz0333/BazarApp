import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const NewsPromosNotification = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, marginHorizontal: 24 }}>
            {/* Appbar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 }}>
                <TouchableOpacity onPress={() => { navigation.navigate("DeliveryNotification")}}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 90 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>Notification</Text>
                </View>
            </View>

            {/* October 2021 */}
            <View style={{ marginTop: 35 }}>
                <View>
                    <Text style={{ color: 'black', fontWeight: '700', fontSize: 19 }}>
                        October 2021
                    </Text>
                </View>

                <View style={{ marginTop: 16, }}>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("DetailNewsPromos")}>
                                <Text style={{ color: '#54408C', fontSize: 18, fontWeight: '700' }}>
                                    Promotion
                                </Text>

                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontWeight: '400', fontSize: 15, color: 'grey' }}>
                                    Oct 21
                                </Text>
                                <View style={{ width: 8, height: 8, borderRadius: 10, backgroundColor: 'silver', marginHorizontal: 6 }}></View>
                                <Text style={{ fontWeight: '400', fontSize: 15, color: 'grey' }}>08.00</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 8 }}>
                            <Text style={{ fontSize: 16, color: 'black' }}>
                                Today <Text style={{ fontWeight: 'bold' }}>50% discount</Text> on all Books in Novel category with online orders worldwide.
                            </Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: 'grey', width: 355, height: 1, marginVertical: 18 }}></View>

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#54408C', fontSize: 18, fontWeight: '700' }}>
                                Promotion
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontWeight: '400', fontSize: 15, color: 'grey' }}>
                                    Oct 08
                                </Text>
                                <View style={{ width: 8, height: 8, borderRadius: 10, backgroundColor: 'silver', marginHorizontal: 6 }}></View>
                                <Text style={{ fontWeight: '400', fontSize: 15, color: 'grey' }}>20.30</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 8 }}>
                            <Text style={{ fontSize: 16, color: 'black' }}>
                                <Text style={{ fontWeight: 'bold' }}>Buy 2 get 1 free</Text> for since books from 08 - 10 October 2021.
                            </Text>
                        </View>
                    </View>

                </View>
            </View>


            {/* September 2021 */}
            <View style={{ marginTop: 30 }}>
                <View>
                    <Text style={{ color: 'black', fontWeight: '700', fontSize: 19 }}>
                        September 2021
                    </Text>
                </View>
                <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                   
                        <Text style={{ fontSize: 17, color: '#3784FB', fontWeight: '700' }}>
                            Information
                        </Text>
              
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'grey' }}>
                            Sept 16
                        </Text>
                        <View style={{ width: 8, height: 8, backgroundColor: 'silver', borderRadius: 10, marginHorizontal: 6 }}></View>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'grey' }}>
                            11.00
                        </Text>
                    </View>
                </View>

                <View style={{ marginTop: 8 }}>
                    <Text style={{ color: 'black', fontSize: 15, }}>
                        There is a new book now are available
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default NewsPromosNotification

const styles = StyleSheet.create({})