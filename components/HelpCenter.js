import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';



const HelpCenter = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>

            {/* Appbar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25, marginHorizontal: 24 }}>
                <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 80 }}>
                    <Text style={{ fontSize: 21, color: 'black', fontWeight: '700' }}>Order History</Text>
                </View>
            </View>


            <View style={{ marginTop: 32 }}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 'bold' }}>
                    Help Center
                </Text>
                <View style={{ marginTop: 8 }}>
                    <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: '600', color: 'grey', marginHorizontal: 24 }}>
                        Tell us how we can help <Image source={require('../assets/Icons/hand.png')} />
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: '600', color: 'grey', marginHorizontal: 24 }}>
                        Chapter are standing by for service & support!
                    </Text>
                </View>
            </View>



            <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'space-between', marginHorizontal: 15 }}>

                <View style={{ backgroundColor: '#D7DBDD', width: 160, height: 170, borderRadius: 10, justifyContent: 'center', paddingLeft: 10 }}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}>
                        <Image source={require('../assets/Icons/Email-Bulk.png')} />
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text style={{ fontSize: 17, color: 'black', fontWeight: '700' }}>
                            Email
                        </Text>
                        <Text style={{ fontSize: 16, color: 'grey' }}>
                            muaazahmad001@gmail.com
                        </Text>
                    </View>



                </View>
                <View style={{ backgroundColor: '#D7DBDD', width: 160, height: 170, borderRadius: 10, justifyContent: 'center', paddingLeft: 10 }}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}>
                        <Image source={require('../assets/Icons/CallFill.png')} />
                    </View>

                    <View style={{ marginTop: 16 }}>
                        <Text style={{ fontSize: 17, color: 'black', fontWeight: '700' }}>
                            Phone Number
                        </Text>
                        <Text style={{ fontSize: 16, color: 'grey' }}>
                            +92 333 4246144
                        </Text>
                    </View>


                </View>
            </View>


        </View>
    )
}

export default HelpCenter

const styles = StyleSheet.create({})