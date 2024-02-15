import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import firestore from '@react-native-firebase/firestore';

const Tab = createMaterialTopTabNavigator();
const Authors = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* home app bar */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 23, marginHorizontal: 24 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, color: 'black', fontWeight: '800',marginRight:113 }}>Authors</Text>
        {/* <TouchableOpacity>
          <Image source={require("../assets/Icons/Search.png")} />
        </TouchableOpacity> */}
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
          tabBarItemStyle: { width: 120, },
        }}>
        <Tab.Screen name="All" component={All} options={{ tabBarStyle: {}, tabBarItemStyle: { width: 120, }, }} />
        <Tab.Screen name="Poets" component={Poets} />
        <Tab.Screen name="Novelists" component={Novelists} />
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
                  <Image style={{ width: 72, height: 72, borderRadius: 36 }} source={{ uri: item.Image }} />
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
  // Poets
  const [poets, setPoets] = useState([]); // Initial empty array of users
  useEffect(() => {
    const subscriber = firestore()
      .collection('Authors')
      .onSnapshot(querySnapshot => {
        const poets = [];

        querySnapshot.forEach(documentSnapshot => {
          poets.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setPoets(poets);
        // setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <View style={{ flex: 1 }}>

      <View style={{ marginTop: 16, marginRight: 10 }}>
        <FlatList
          data={poets}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 24, marginTop: 10, marginBottom: 10 }}

            >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Image style={{ width: 72, height: 72, borderRadius: 36 }} source={{uri:item.Image}} />
                </View>
                <View style={{ marginLeft: 10, flex: 1 }}>
                  <Text style={{ fontSize: 19, fontWeight: '800', color: 'black' }}>
                    {item.Name}
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: '500', textAlign: 'justify', color: 'grey' }} >{item.Designation}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>

    </View>
  )
}


const Novelists = () => {
   // Novelists
   const [novelists, setNovelists] = useState([]); // Initial empty array of users
   useEffect(() => {
     const subscriber = firestore()
       .collection('Authors')
       .onSnapshot(querySnapshot => {
         const novelists = [];
 
         querySnapshot.forEach(documentSnapshot => {
           novelists.push({
             ...documentSnapshot.data(),
             key: documentSnapshot.id,
           });
         });
 
         setNovelists(novelists);
         // setLoading(false);
       });
 
     // Unsubscribe from events when no longer in use
     return () => subscriber();
   }, []);

  return (
    <View style={{ flex: 1 }}>

      <View style={{ marginTop: 16, marginRight: 10 }}>
        <FlatList
          data={novelists}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 24, marginTop: 10, marginBottom: 10 }}

            >
              <View style={{ flexDirection: 'row' , alignItems:'center'}}>
                <View>
                  <Image style={{ width: 72, height: 72, borderRadius: 36 }} source={{uri:item.Image}} />
                </View>
                <View style={{ marginLeft: 10, flex: 1 }}>
                  <Text style={{ fontSize: 19, fontWeight: '800', color: 'black' }}>
                    {item.Name}
                  </Text>
                  {/* <Text style={{ fontSize: 16, fontWeight: '500', textAlign: 'justify', color: 'grey' }} >{item.designation}</Text> */}
                </View>
              </View>
            </View>
          )}
        />
      </View>

    </View>
  )
}


export default Authors

const styles = StyleSheet.create({})