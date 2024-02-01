import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, Animated, ScrollView, Modal, TextInput, TouchableHighlight, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomTab from './BottomTab';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Swipeable from 'react-native-swipeable';
import { Gesture, GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

let userId = '';

const Cart = () => {

  const cartItemsObj = [
    {
      id: 1,
      image: require('../assets/Images/book.jpg'),
      name: 'Zombie Spacesuit',
      price: 30.00,
    },
    {
      id: 2,
      image: require('../assets/Images/book1.png'),
      name: 'A Million to One',
      price: 32.00
    },
    {
      id: 3,
      image: require('../assets/Images/book3.jpg'),
      name: 'Dragon Gate',
      price: 56.32
    },
    {
      id: 4,
      image: require('../assets/Images/book4.jpg'),
      name: 'Caged Dragon',
      price: 67.34
    },
    {
      id: 5,
      image: require('../assets/Images/categoryBook1.png'),
      name: 'Da Vinci',
      price: 23.23
    },
    {
      id: 6,
      image: require('../assets/Images/categoryBook2.png'),
      name: 'Carrie Fisher',
      price: 23.00
    },
    {
      id: 7,
      image: require('../assets/Images/categoryBook3.png'),
      name: 'Good Sister',
      price: 89.98
    },
  ]


  const [num, setNum] = useState(1)
  let incNum = () => {
    if (num < 20) {
      setNum(num + 1);
    }
  };
  let decNum = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  }
  let handleChange = (e) => {
    setNum(e)
  }


  const [items, setItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  const isFocused = useIsFocused();


  const [state, setState] = useState([])
  const navigation = useNavigation();
  const route = useRoute();

  let cart = route.params?.cart
  // console.log('Route params:---1', cart);


  useEffect(() => {
    firestore()
      .collection('Users_Profile')
      .get()
      .then(querySnapshot => {
        console.log('Total users', querySnapshot.size);
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'User ID:',
            documentSnapshot.id,
            documentSnapshot.data()
          );
          tempData.push({
            id: documentSnapshot.id,
            data: documentSnapshot.data(),
          });
        });
        setItems(tempData);
      });
  }, []);


  // useEffect(() => {
  //   if (route.params && route.params.cart !== undefined) {
  //     setState(route.params.cart)
  //     console.log('Route params:---2', route.params.cart);
  //   }
  // }, [route.params]);

  const onAddtoCart = async (item, index) => {
    const userId = await AsyncStorage.getItem('USERId');
  }

  // const deviceWidth = Dimensions.get('window').width;
  // const threshold = -deviceWidth * 0.4;

  // const dragX = useSharedValue(0)

  // const gestureHandler = useAnimatedGestureHandler({
  //   onActive: (e) => {
  //     dragX.value = e.translationX;
  //   },
  //   onEnd: (e) => {
  //     if (threshold < e.translationX) {
  //       dragX.value = withTiming(0);
  //     } else {
  //       dragX.value = withTiming(-deviceWidth);
  //     }
  //   }
  // })

  // const itemContainerStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateX: dragX.value
  //       }
  //     ]
  //   }
  // })

  const [listData, setListData] = useState(
    cartItemsObj.map((item, index) => ({
      key: `${index}`,
      image: item.image,
      name: item.name,
      price: item.price
    }))
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  }

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key == rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  }

  const VisibleItem = props => {
    const { data } = props;
    return (
      <TouchableHighlight>
        <View style={{
          flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between',
          borderColor: '#54408C', padding: 10, borderRadius: 20, backgroundColor: '#fff',elevation:5
        }}>
          <Image style={{ height: 80, width: 80, borderRadius: 10, resizeMode: 'contain' }} source={data.item.image} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 18, color: 'black', fontWeight: '600' }} numberOfLines={1}>{data.item.name}</Text>
            <Text style={{ fontSize: 17, color: 'black' }} numberOfLines={1}>${data.item.price}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', marginLeft: 10 }}>
            <TouchableOpacity
              onPress={decNum}
              style={{ backgroundColor: '#E8E8E8', width: 24, height: 24, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ tintColor: 'black' }} source={require('../assets/Icons/Minus.png')} />
            </TouchableOpacity>
            <View>
              <Text
                style={{ fontSize: 18, color: 'black', fontWeight: '700', marginHorizontal: 9 }}
                value={String(num)}
                onChangeText={handleChange}>
                {num}
              </Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#54408C', width: 24, height: 24, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}
              onPress={incNum}
            >
              <Image source={require('../assets/Icons/Plus.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  const renderItem = (data, rowMap) => {
    return (
      <VisibleItem data={data} />
    )
  }

  const HiddenItemWithActions = props => {
    const { onClose, onDelete } = props;

    return (
      <View style={styles.rowBack}>
        <Text>Left</Text>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={onClose}>
          {/* <MaterialCommunityIcons name="close-circle-outline" size={25} color="#fff" /> */}
          <Text style={{ color: '#fff', fontWeight: '900' }}>Close</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onDelete}>
          {/* <MaterialCommunityIcons name="trash-can-outline" size={25} color="#fff" /> */}
          <Text style={{ color: '#fff', fontWeight: '900' }}>Delete</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginBottom: 24, marginTop: 16, marginHorizontal: 24 }}>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: '800', textAlign: 'center', marginHorizontal: 90 }}>My Cart</Text>
        {/* <TouchableOpacity style={{ alignItems: 'flex-end' }}>
          <Image style={{ alignSelf: 'flex-end', tintColor: 'black' }} source={require("../assets/Icons/Cart.png")} />
        </TouchableOpacity> */}

      </View>
      <View>


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
              <Text style={{ color: 'black', fontWeight: '800', fontSize: 19, marginBottom: 5 }}>Your Cart</Text>

              <View style={{ marginBottom: 280 }}>
                <SwipeListView
                showsVerticalScrollIndicator={false}
                  data={listData}
                  renderItem={renderItem}
                  renderHiddenItem={renderHiddenItem}
                  leftOpenValue={75}
                  rightOpenValue={-150}
                  disableRightSwipe
                />
                {/* <FlatList
                  showsVerticalScrollIndicator={false}
                  data={cartItemsObj}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => {
                    console.log(item)
                    return (
                      <GestureHandlerRootView>
                        <PanGestureHandler onGestureEvent={gestureHandler}>
                          <Animated.View style={itemContainerStyle}>
                            <View style={{
                              flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between',
                              borderWidth: 1, borderColor: '#54408C', padding: 10, borderRadius: 20
                            }}>


                              <View>
                                <Image style={{ height: 80, width: 80, borderRadius: 10, resizeMode: 'contain' }} source={item.image} />
                              </View>
                              <View style={{}}>
                                <Text style={{ fontSize: 18, color: 'black', fontWeight: '600' }}>
                                  {item.name}
                                </Text>
                                <Text style={{ fontSize: 17, color: 'black' }}>
                                  ${item.price} * {num}
                                </Text>
                              </View>

                              <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', marginLeft: 10 }}>
                                <TouchableOpacity
                                  onPress={decNum}
                                  style={{ backgroundColor: '#E8E8E8', width: 24, height: 24, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                                  <Image style={{ tintColor: 'black' }} source={require('../assets/Icons/Minus.png')} />
                                </TouchableOpacity>

                                <View>

                                  <Text
                                    style={{ fontSize: 18, color: 'black', fontWeight: '700', marginHorizontal: 9 }}
                                    value={String(num)}
                                    onChangeText={handleChange}>
                                    {num}
                                  </Text>
                                </View>

                                <TouchableOpacity style={{ backgroundColor: '#54408C', width: 24, height: 24, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}
                                  onPress={incNum}
                                >
                                  <Image source={require('../assets/Icons/Plus.png')} />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </Animated.View>
                        </PanGestureHandler>
                      </GestureHandlerRootView>
                    )

                  }}
                /> */}
              </View>

              {/* <FlatList
              data={items}
              // keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View>
                  <Image style={{ height: 100, width: 100 }} source={{ uri: item.data.img }} />
                  <Text style={{ color: 'red' }}>{item.data.name}</Text>
                  <Text style={{ color: 'red' }}>{item.data.description}</Text>
                </View>
              )}
            /> */}
              {/* <FlatList
              data={state}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View>
                 <Image style={{height:100, width:100}} source={item.img}/>
                  <Text style={{ color: 'red' }}>{item.title}</Text>
                  <Text style={{ color: 'red' }}>${item.price}</Text>
                </View>
              )}
            /> */}


            </View>

        }

        {/* <View style={{ backgroundColor: '#54408C', flex: 1, justifyContent: 'flex-end', marginTop: 330, marginBottom: 70, alignContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'center', borderRadius: 20 }}>
        <TouchableOpacity>
          <Text style={{ textAlign: 'center', paddingBottom: 15, paddingHorizontal: 90, color: 'white', fontSize: 16, fontWeight: 'bold' }}>
            Check Out
          </Text>
        </TouchableOpacity>
      </View> */}







      </View>
      <View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 0, paddingVertical: 6 }}>
        <View style={{ backgroundColor: '#54408C', borderRadius: 20, marginHorizontal: 24, marginVertical: 8, paddingVertical: 10, alignSelf: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate("CartConfirmOrder")}>
            <Text style={{ textAlign: 'center', marginHorizontal: 70, color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              Check Out
            </Text>
          </TouchableOpacity>
        </View>
        <BottomTab />
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 65,
    paddingRight: 15
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    right: 75
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,

  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: "#ffe",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 7,
    marginBottom: 6,
    marginTop: 17,
    borderRadius: 20
  }
})