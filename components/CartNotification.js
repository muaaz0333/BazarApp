import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BottomTab from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const CartNotification = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 23, marginHorizontal: 24 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Category")}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>
                <View style={{ marginRight: 120 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Notifications</Text>
                </View>
            </View>

            <View style={{ marginTop: 150 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ tintColor: '#E5E7E9',width:128, height:153,  }} source={require('../assets/Icons/notify.png')} />
                </View>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 17, color: 'black', fontWeight: '700', marginTop: 24 }}>
                        There is no Notifications
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default CartNotification

const styles = StyleSheet.create({})