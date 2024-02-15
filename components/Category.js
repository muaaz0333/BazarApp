import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BottomTab from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Tab = createMaterialTopTabNavigator();

const novels = [
  {
    id: '1',
    pic: require('../assets/Images/categoryBook1.png'),
    title: 'The Da vinci Code',
    price: '19.99',
    vendor: require('../assets/Images/VFrame1.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(4.0)',
    ratingStars: 4,
  },
  {
    id: '2',
    pic: require('../assets/Images/categoryBook2.png'),
    title: 'Carrie Fisher',
    price: '27.12',
    vendor: require('../assets/Images/VFrame2.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(5.0)',
    ratingStars: 5,
  },
  {
    id: '3',
    pic: require('../assets/Images/HarryPotter.png'),
    title: 'Harry Potter',
    price: '64.99',
    vendor: require('../assets/Images/VFrame6.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(4.0)',
    ratingStars: 4,
  },
  {
    id: '4',
    pic: require('../assets/Images/RohintonMistry.png'),
    title: 'Rohinton Mistry',
    price: '10.99',
    vendor: require('../assets/Images/VFrame6.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(4.0)',
    ratingStars: 4,
  },
]


const romantic = [
  {
    id: '1',
    pic: require('../assets/Images/categoryBook3.png'),
    title: 'The Good Sister',
    price: '27.12',
    vendor: require('../assets/Images/VFrame3.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(2.0)',
    ratingStars: 2,
  },
  {
    id: '2',
    pic: require('../assets/Images/categoryBook4.png'),
    title: 'The WAITING',
    price: '27.12',
    vendor: require('../assets/Images/VFrame4.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(4.0)',
    ratingStars: 4,
  },
  {
    id: '3',
    pic: require('../assets/Images/categoryBook5.png'),
    title: 'Where are You',
    price: '18',
    vendor: require('../assets/Images/VFrame5.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(3.0)',
    ratingStars: 3,
  },
  {
    id: '4',
    pic: require('../assets/Images/categoryBook6.png'),
    title: 'Young Women',
    price: '14.99',
    vendor: require('../assets/Images/VFrame6.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(4.0)',
    ratingStars: 4,
  },
  {
    id: '5',
    pic: require('../assets/Images/Soul.jpg'),
    title: 'SOUL',
    price: '24.99',
    vendor: require('../assets/Images/VFrame6.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(4.0)',
    ratingStars: 4,
  },
  {
    id: '6',
    pic: require('../assets/Images/Thecovenantofwater.jpg'),
    title: 'Covenant Water',
    price: '90.99',
    vendor: require('../assets/Images/VFrame6.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(4.0)',
    ratingStars: 4,
  },
]




const Category = () => {

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginBottom: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, marginHorizontal: 24 }}>
        <TouchableOpacity onPress={() => { navigation.navigate("CategorySearch") }}>
          <Image source={require("../assets/Icons/Search.png")} style={{ tintColor: 'black' }} />
        </TouchableOpacity>


        <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Category</Text>
        <TouchableOpacity>
          <Image source={require("../assets/Icons/Notification.png")} />
        </TouchableOpacity>

      </View>


      <Tab.Navigator
        initialRouteName='All'
        tabBarActiveTintColor='#54408C'

        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarActiveTintColor: 'black',
          tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' },
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
          },
          tabBarItemStyle: { width: 120, },
        }}>
        <Tab.Screen name="All" component={All} options={{ tabBarStyle: {}, tabBarItemStyle: { width: 120, }, }} />
        <Tab.Screen name="Novels" component={Novels} />
        <Tab.Screen name="Romantic" component={Romantic} />
      </Tab.Navigator>




      <View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 0, paddingVertical: 6 }}>
        <BottomTab />
      </View>
    </View>
  )
}

const All = () => {
  // Categories
  // const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [category, setCategory] = useState([]); // Initial empty array of users
  useEffect(() => {
    const subscriber = firestore()
      .collection('Categories')
      .onSnapshot(querySnapshot => {
        const category = [];

        querySnapshot.forEach(documentSnapshot => {
          category.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setCategory(category);
        // setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);


  return (

    <View style={{ marginTop: 10, marginBottom: 60, marginHorizontal: 24, alignItems: 'center', flex: 1 }}>
      <FlatList
        data={category}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 5, marginTop: 10 }}>
            <View>
              <Image style={{ width: 150, height: 160, resizeMode: 'contain', borderRadius: 10 }} source={{ uri: item.Image }} />
            </View>
            <View>
              <Text style={{ color: 'black', fontSize: 17, fontWeight: '700', marginTop: 3 }}>
                {item.Name}
              </Text>
            </View>
            <View>
              <Text style={{ color: '#54408C', fontSize: 16, fontWeight: '700', marginTop: 2 }}>
                ${item.Price}
              </Text>
            </View>
          </View>

        )}
      />
    </View>
  )
}

const Novels = () => {
  return (
    <View style={{ marginTop: 10, marginBottom: 60, marginHorizontal: 24, alignItems: 'center', flex: 1 }}>
      <FlatList
        data={novels}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 5, marginTop: 10 }}>
            <View>
              <Image style={{ width: 150, height: 160, resizeMode: 'contain', borderRadius: 10 }} source={item.pic} />
            </View>
            <View>
              <Text style={{ color: 'black', fontSize: 17, fontWeight: '700', marginTop: 3 }}>
                {item.title}
              </Text>
            </View>
            <View>
              <Text style={{ color: '#54408C', fontSize: 16, fontWeight: '700', marginTop: 2 }}>
                ${item.price}
              </Text>
            </View>
          </View>

        )}
      />
    </View>
  )
}

const Romantic = () => {
  return (
    <View style={{ marginTop: 10, marginBottom: 60, marginHorizontal: 24, alignItems: 'center', flex: 1 }}>
      <FlatList
        data={romantic}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 5, marginTop: 10 }}>
            <View>
              <Image style={{ width: 150, height: 160, resizeMode: 'contain', borderRadius: 10 }} source={item.pic} />
            </View>
            <View>
              <Text style={{ color: 'black', fontSize: 17, fontWeight: '700', marginTop: 3 }}>
                {item.title}
              </Text>
            </View>
            <View>
              <Text style={{ color: '#54408C', fontSize: 16, fontWeight: '700', marginTop: 2 }}>
                ${item.price}
              </Text>
            </View>
          </View>

        )}
      />
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})