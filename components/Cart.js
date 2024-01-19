import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BottomTab from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Cart = () => {
  const [state, setState] = useState([])
  const navigation = useNavigation();
  const route = useRoute();
  // console.log('----------> ', route.params);

  let cart = route.params?.cart
  console.log('Route params:---1', cart);
  // const {cart}=route?.params?.cart || [];

  useEffect(() => {
    if (route.params && route.params.cart !== undefined) {
      setState(route.params.cart)
      console.log('Route params:---2', route.params.cart);
    }
  }, [route.params]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginBottom: 24, flexDirection: 'row', alignItems: 'center', marginTop: 16, marginHorizontal: 24, justifyContent: 'flex-end' }}>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: '800', textAlign: 'center', marginHorizontal: 90 }}>My Cart</Text>
        <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={() => navigation.navigate("CartNotification")}>
          <Image style={{ alignSelf: 'flex-end' }} source={require("../assets/Icons/Notification.png")} />
        </TouchableOpacity>

      </View>

      {
        cart ? <View style={{ marginTop: 150 }}>
          <View style={{ alignItems: 'center' }}>
            <Image style={{ tintColor: 'silver', }} source={require('../assets/Icons/cartl.png')} />
          </View>
          <View>
            <Text style={{ textAlign: 'center', fontSize: 17, color: 'black', fontWeight: '700', marginTop: 24 }}>
              There is no Products 🔥
            </Text>
          </View>
        </View>
          :
          <View style={{ marginHorizontal: 24 }}>
            <Text style={{ color: 'black', fontWeight: '800', fontSize: 17 }}>Your Cart</Text>
            <FlatList
              data={state}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View>
                 <Image style={{height:100, width:100}} source={item.img}/>
                  <Text style={{ color: 'red' }}>{item.title}</Text>
                  <Text style={{ color: 'red' }}>${item.price}</Text>
                 
                  
                </View>
              )}
            />
          </View>

      }






      <View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 0, paddingVertical: 6 }}>
        <BottomTab />
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})