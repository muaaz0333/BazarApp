import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState,useEffect } from 'react'
import { useNavigation , useIsFocused} from '@react-navigation/native';

const BottomTab = ({a}) => {
console.log('---------------',a);
  const isFocused = useIsFocused();

    useEffect(() => {
        const routeName = navigation?.getState()?.routes[navigation?.getState()?.index]?.name;
        switch (routeName) {
            case "Category":
              navigation.navigate("Category");
                break;
            case "Cart":
              navigation.navigate("Cart");
                break;
            case "Profile":
              navigation.navigate("Profile",a);
                break;
            default:
                // Handle default case if needed
                break;
        }
    }, [isFocused, navigation]);
  //   const handleTabPress = (tab) => {
  //     // Navigate to the selected tab
  //     navigation.navigate(tab,a);
  // };

  const handleColorChange = (tab) => {
      const routeName = navigation?.getState()?.routes[navigation?.getState()?.index]?.name;
      return routeName === tab ? '#54408C' : 'grey';
  };


  const navigation = useNavigation();


  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',paddingVertical:2 }}>

      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <View style={{ alignItems: 'center' }}>
          <Image style={{tintColor:handleColorChange("Home"), width:18, height:18}} source={require("../assets/Icons/home-fill.png")} />
          <Text style={{color:'grey', marginTop:3,  fontSize:12}}>Home</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={()=>navigation.navigate('Category')}>
        <View style={{ alignItems: 'center' }}>
          <Image style={{tintColor: handleColorChange("Category"), }} source={require("../assets/Icons/category.png")} />
          <Text style={{color:'grey', marginTop:3,  fontSize:12}}>Category</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
        <View style={{ alignItems: 'center' }}>
          <Image style={{tintColor: handleColorChange("Cart"),}} source={require("../assets/Icons/Cart.png")} />
          <Text style={{color:'grey', marginTop:3,  fontSize:12}}>Cart</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <View style={{ alignItems: 'center' }}>
          <Image style={{tintColor:handleColorChange("Profile"), }} source={require("../assets/Icons/Profile.png")} />
          <Text style={{color:'grey', marginTop:3,  fontSize:12}}>Profile</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default BottomTab

const styles = StyleSheet.create({})