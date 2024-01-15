import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import firestore from '@react-native-firebase/firestore';

const Tab = createMaterialTopTabNavigator();

const authorObjects = [
  {
    image: require('../assets/Images/Author7.png'),
    designation: 'Novelist',
    name: 'Anna',
    ratingStars: 5,
    rating: '(5.0)',
    about: 'Anna is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

    Product1:

    {
      productImg: require('../assets/Images/book.jpg'),
      productTitle: 'The da vinci Code',
      productPrice: '19.99'
    },

    Product2:

    {
      productImg: require('../assets/Images/book1.png'),
      productTitle: 'Carrie Fisher',
      productPrice: '27.12'
    },

    Product3:

    {
      productImg: require('../assets/Images/book3.jpg'),
      productTitle: 'The Good Sister',
      productPrice: '27.12'
    },

    Product4:

    {
      productImg: require('../assets/Images/book4.jpg'),
      productTitle: 'The Waiting',
      productPrice: '27.12'
    },
  },
  {
    image: require('../assets/Images/Author5.png'),
    designation: 'Writer',
    name: 'Nina',
    ratingStars: 4,
    rating: '(4.0)',
    about: 'Nina is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

    Product1:

    {
      productImg: require('../assets/Images/book.jpg'),
      productTitle: 'The da vinci Code',
      productPrice: '19.99'
    },

    Product2:

    {
      productImg: require('../assets/Images/book1.png'),
      productTitle: 'Carrie Fisher',
      productPrice: '27.12'
    },

    Product3:

    {
      productImg: require('../assets/Images/book3.jpg'),
      productTitle: 'The Good Sister',
      productPrice: '27.12'
    },

    Product4:

    {
      productImg: require('../assets/Images/book4.jpg'),
      productTitle: 'The Waiting',
      productPrice: '27.12'
    },
  },
  {
    image: require('../assets/Images/Author1.png'),
    designation: 'Novelist',
    name: 'Jack',
    ratingStars: 3,
    rating: '(3.0)',
    about: 'Jack is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

    Product1:

    {
      productImg: require('../assets/Images/book.jpg'),
      productTitle: 'The da vinci Code',
      productPrice: '19.99'
    },

    Product2:

    {
      productImg: require('../assets/Images/book1.png'),
      productTitle: 'Carrie Fisher',
      productPrice: '27.12'
    },

    Product3:

    {
      productImg: require('../assets/Images/book3.jpg'),
      productTitle: 'The Good Sister',
      productPrice: '27.12'
    },

    Product4:

    {
      productImg: require('../assets/Images/book4.jpg'),
      productTitle: 'The Waiting',
      productPrice: '27.12'
    },
  },
  {
    image: require('../assets/Images/Author6.png'),
    designation: 'Novelist',
    name: 'John A',
    ratingStars: 5,
    rating: '(5.0)',
    about: 'John is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

    Product1:

    {
      productImg: require('../assets/Images/book.jpg'),
      productTitle: 'The da vinci Code',
      productPrice: '19.99'
    },

    Product2:

    {
      productImg: require('../assets/Images/book1.png'),
      productTitle: 'Carrie Fisher',
      productPrice: '27.12'
    },

    Product3:

    {
      productImg: require('../assets/Images/book3.jpg'),
      productTitle: 'The Good Sister',
      productPrice: '27.12'
    },

    Product4:

    {
      productImg: require('../assets/Images/book4.jpg'),
      productTitle: 'The Waiting',
      productPrice: '27.12'
    },
  },
  {
    image: require('../assets/Images/Author2.png'),
    designation: 'Novelist',
    name: 'Smith',
    ratingStars: 2,
    rating: '(2.0)',
    about: 'Smith is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

    Product1:

    {
      productImg: require('../assets/Images/book.jpg'),
      productTitle: 'The da vinci Code',
      productPrice: '19.99'
    },

    Product2:

    {
      productImg: require('../assets/Images/book1.png'),
      productTitle: 'Carrie Fisher',
      productPrice: '27.12'
    },

    Product3:

    {
      productImg: require('../assets/Images/book3.jpg'),
      productTitle: 'The Good Sister',
      productPrice: '27.12'
    },

    Product4:

    {
      productImg: require('../assets/Images/book4.jpg'),
      productTitle: 'The Waiting',
      productPrice: '27.12'
    },
  },
  {
    image: require('../assets/Images/Author3.png'),
    designation: 'Novelist',
    name: 'John Lee',
    ratingStars: 1,
    rating: '(1.0)',
    about: 'Lee is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

    Product1:

    {
      productImg: require('../assets/Images/book.jpg'),
      productTitle: 'The da vinci Code',
      productPrice: '19.99'
    },

    Product2:

    {
      productImg: require('../assets/Images/book1.png'),
      productTitle: 'Carrie Fisher',
      productPrice: '27.12'
    },

    Product3:

    {
      productImg: require('../assets/Images/book3.jpg'),
      productTitle: 'The Good Sister',
      productPrice: '27.12'
    },

    Product4:

    {
      productImg: require('../assets/Images/book4.jpg'),
      productTitle: 'The Waiting',
      productPrice: '27.12'
    },
  },
  {
    image: require('../assets/Images/Author4.png'),
    designation: 'Writer',
    name: 'Lucy',
    ratingStars: 4,
    rating: '(4.0)',
    about: 'Steve is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

    Product1:

    {
      productImg: require('../assets/Images/book.jpg'),
      productTitle: 'The da vinci Code',
      productPrice: '19.99'
    },

    Product2:

    {
      productImg: require('../assets/Images/book1.png'),
      productTitle: 'Carrie Fisher',
      productPrice: '27.12'
    },

    Product3:

    {
      productImg: require('../assets/Images/book3.jpg'),
      productTitle: 'The Good Sister',
      productPrice: '27.12'
    },

    Product4:

    {
      productImg: require('../assets/Images/book4.jpg'),
      productTitle: 'The Waiting',
      productPrice: '27.12'
    },
  },
]
const Authors = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* home app bar */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 23, marginHorizontal: 24 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Authors</Text>
        <TouchableOpacity>
          <Image source={require("../assets/Icons/Search.png")} />
        </TouchableOpacity>

      </View>

      <View style={{ marginTop: 20, marginLeft: 24 }}>
        <Text style={{ fontSize: 16, color: 'grey' }}>
          Check the authors
        </Text>
      </View>

      <View style={{ marginLeft: 24, marginBottom: 10 }}>
        <Text style={{ fontSize: 19, color: '#54408C', fontWeight: '700' }}>
          Authors
        </Text>
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
          // tabBarItemStyle: {width: 140,},
        }}>
        <Tab.Screen name="All" component={All} options={{ tabBarStyle: {}, tabBarItemStyle: {}, }} />
        <Tab.Screen name="Poets" component={Poets} />
        <Tab.Screen name="Playwrights" component={Playwrights} />
        <Tab.Screen name="Novelists" component={Novelists} />
        <Tab.Screen name="Journalists" component={Journalists} />
      </Tab.Navigator>
    </View>
  )
}

const All = () => {
  const navigation = useNavigation();

  // Authors
  const [authors, setAuthors] = useState([]); // Initial empty array of users
  useEffect(() => {
    const subscriber = firestore()
      .collection('Authors')
      .onSnapshot(querySnapshot => {
        const authors = [];

        querySnapshot.forEach(documentSnapshot => {
          authors.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setAuthors(authors);
        // setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);


  return (
    <View style={{ flex: 1 }}>

      <View style={{ marginTop: 16, marginRight: 10 }}>
        <FlatList
          data={authors}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ marginHorizontal: 24, marginTop: 10, marginBottom: 10 }}
              onPress={() => { navigation.navigate("AuthorInnerPage", { item: item }) }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Image style={{ width: 72, height: 72, borderRadius: 36 }} source={{uri:item.Image}} />
                </View>
                <View style={{ marginLeft: 10, flex: 1 }}>
                  <Text style={{ fontSize: 19, fontWeight: '800', color: 'black' }}>
                    {item.Name}
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: '500', textAlign: 'justify', color: 'grey' }} >{item.About}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        {/* <FlatList
          data={authorObjects}
          showsVerticalScrollIndicator={false}
          keyExtractor={itemsss => itemsss.id}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={{ marginHorizontal: 24, marginTop: 10, marginBottom:10}}
                onPress={() => { navigation.navigate("AuthorInnerPage",{item:item})}}
              >
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Image style={{ width: 72, height: 72, borderRadius: 36 }} source={item.image} />
                  </View>
                  <View style={{ marginLeft:10, flex:1}}>
                    <Text style={{ fontSize: 19, fontWeight: '800', color: 'black' }}>
                      {item.name}
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: '500', textAlign:'justify', color:'grey'}} >{item.about}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
        /> */}
      </View>




      {/* <View style={{flexDirection:'row'}}>
    <View> 
     <Image style={{width:68, height:68, borderRadius:34}} source={require('../assets/Images/Author7.png')}/>
    </View>
    <View>
      <Text style={{marginLeft:12, fontSize:19, fontWeight:'800', color:'black'}}>
        John Freeman
      </Text>
      <Text style={{marginLeft:12, fontSize:16, fontWeight:'500', }}>American Writer she is the Novelist</Text>
    </View>
    </View> */}

    </View>
  )
}

const Poets = () => {
  return (
    <View>
      <Text>Poets</Text>
    </View>
  )
}

const Playwrights = () => {
  return (
    <View>
      <Text>Playwrights</Text>
    </View>
  )
}

const Novelists = () => {
  return (
    <View>
      <Text>Novelists</Text>
    </View>
  )
}

const Journalists = () => {
  return (
    <View>
      <Text>Journalists</Text>
    </View>
  )
}
export default Authors

const styles = StyleSheet.create({})