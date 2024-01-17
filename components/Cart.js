import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BottomTab from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginBottom: 24, flexDirection: 'row', alignItems: 'center', marginTop: 16, marginHorizontal: 24, justifyContent: 'flex-end' }}>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: '800', textAlign: 'center', marginHorizontal: 90 }}>My Cart</Text>
        <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={() => navigation.navigate("CartNotification")}>
          <Image style={{ alignSelf: 'flex-end' }} source={require("../assets/Icons/Notification.png")} />
        </TouchableOpacity>

      </View>

      <View style={{ marginTop: 150 }}>
        <View style={{ alignItems: 'center' }}>
          <Image style={{ tintColor: 'silver', }} source={require('../assets/Icons/cartl.png')} />
        </View>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 17, color: 'black', fontWeight: '700', marginTop: 24 }}>
            There is no Products 🔥
          </Text>
        </View>
      </View>

      <View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 0, paddingVertical: 6 }}>
        <BottomTab />
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})