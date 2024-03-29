import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTab from './BottomTab';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: require('../assets/Images/book.jpg'),
      name: 'Zombie Spacesuit',
      price: 30.00,
      quantity: 1
    }, {
      id: 2,
      image: require('../assets/Images/book3.jpg'),
      name: 'A Million to One',
      price: 32.00,
      quantity: 1
    },
    {
      id: 3,
      image: require('../assets/Images/book3.jpg'),
      name: 'Dragon Gate',
      price: 56.32,
      quantity: 1
    },
    {
      id: 4,
      image: require('../assets/Images/book4.jpg'),
      name: 'Caged Dragon',
      price: 67.34,
      quantity: 1
    },
    {
      id: 5,
      image: require('../assets/Images/categoryBook1.png'),
      name: 'Da Vinci',
      price: 23.23,
      quantity: 1
    },
    {
      id: 6,
      image: require('../assets/Images/categoryBook2.png'),
      name: 'Carrie Fisher',
      price: 23.00,
      quantity: 1
    },
    {
      id: 7,
      image: require('../assets/Images/categoryBook3.png'),
      name: 'Good Sister',
      price: 89.98,
      quantity: 1
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price when component mounts
    calculateTotalPrice(cartItems);
  }, []); // Empty dependency array ensures this effect runs only once on mount


  const calculateTotalPrice = (items) => {
    let total = 0;
    items.forEach(item => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  const incNum = (itemId) => {
    const updatedCartItems = cartItems.map(item => (
      (item.id === itemId && item.quantity < 20) ? { ...item, quantity: item.quantity + 1 } : item
    ));
    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
  };

  const decNum = (itemId) => {
    const updatedCartItems = cartItems.map(item => (
      (item.id === itemId && item.quantity > 1) ? { ...item, quantity: item.quantity - 1 } : item
    ));
    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
  };

  const handleChange = (quantity, itemId) => {
    const updatedCartItems = cartItems.map(item => (
      (item.id === itemId) ? { ...item, quantity } : item
    ));
    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
  };

  const deleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
    Alert.alert("Item Deleted");
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ marginBottom: 5, fontSize: 20, fontWeight: '800', textAlign: 'center', marginHorizontal: 90, color: 'black', marginTop: 20 }}>My Cart</Text>
      <View style={{ flex: 1, marginBottom: 143 }}>
        <SwipeListView
          showsVerticalScrollIndicator={false}
          data={cartItems}
          renderItem={({ item }) => (
            <CartItem
              item={item}
              onInc={() => incNum(item.id)}
              onDec={() => decNum(item.id)}
              onChange={(quantity) => handleChange(quantity, item.id)}
            />
          )}
          renderHiddenItem={({ item }) => (
            <HiddenItem onDelete={() => deleteItem(item.id)} />
          )}
          leftOpenValue={75}
          rightOpenValue={-150}
          disableRightSwipe
        />
      </View>


      <View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 0, paddingVertical: 6 }}>
        <View style={{ flexDirection: 'column', marginHorizontal: 15, justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ textAlign: 'center', marginVertical: 7, fontSize: 18, fontWeight: 'bold', color: "grey" }}>Total Price: ${totalPrice.toFixed(2)}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("CartConfirmOrder", [totalPrice])}
            style={{ backgroundColor: '#54408C', borderRadius: 20, marginVertical: 0, paddingVertical: 10, alignSelf: 'center',marginBottom:6 }}
          >
            <Text style={{ textAlign: 'center', marginHorizontal: 110, color: 'white', fontSize: 17, fontWeight: 'bold' }}>Check Out</Text>
          </TouchableOpacity>
        </View>
        <BottomTab />
      </View>


    </View>
  );
};

const CartItem = ({ item, onInc, onDec, onChange }) => {
  // Function to calculate item price based on quantity
  const calculateItemPrice = () => {
    return (item.price * item.quantity).toFixed(2);
  };

  return (
    <View style={{
      marginHorizontal: 13, flexDirection: 'row', marginVertical: 8,
      borderRadius: 20, backgroundColor: '#fff', elevation: 8,
      paddingHorizontal: 10, flex: 1
    }}>
      <View style={{
        flexDirection: 'row', alignItems: 'center',
        paddingVertical: 10, flex: 1
      }}>
        <Image style={{ height: 90, width: 80, borderRadius: 10, resizeMode: 'stretch' }} source={item.image} />
        <View style={{ flexDirection: 'column', marginLeft: 8 }}>
          <Text style={{ fontSize: 17, color: 'black', fontWeight: '600' }} numberOfLines={1}>{item.name}</Text>
          <Text style={{ fontSize: 16, color: 'black' }} numberOfLines={1}>${calculateItemPrice()}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
        <TouchableOpacity onPress={onDec} style={{ backgroundColor: '#E8E8E8', width: 24, height: 24, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ tintColor: 'black' }} source={require('../assets/Icons/Minus.png')} />
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 18, color: 'black', fontWeight: '700', marginHorizontal: 9 }}>{item.quantity}</Text>
        </View>
        <TouchableOpacity onPress={onInc} style={{ backgroundColor: '#54408C', width: 24, height: 24, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/Icons/Plus.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HiddenItem = ({ onDelete }) => {
  return (
    <View style={styles.rowBack}>
      <TouchableOpacity onPress={onDelete} style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 160,
    paddingHorizontal: 15
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    right: 75
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 7,
    marginBottom: 10,
    marginTop: 15,
    borderRadius: 20,
    marginHorizontal: 24
  }
});
