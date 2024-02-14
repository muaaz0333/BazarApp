import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, Alert, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BottomTab from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const Profile = (props) => {
  const a = props.route.params;
  console.log('Profile section ---------------',a);
  const navigation = useNavigation();
  const [logout, setLogout] = useState(false);

  const validDataLogin = async () => {
    auth().signOut()
      .then(() => {
        Alert.alert("User Signed Out")
      })
      .catch((error) => {
        Alert.alert(error)
      })
    navigation.navigate("SignIn1")
  }


  const [userData, setUserData] = useState({
    name: '',
    phone: ''
  });
  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    try {
      const userCollection = firestore().collection('Users_Profile');
      const userQuerySnapshot = await userCollection.limit(1).get();
      if (!userQuerySnapshot.empty) {
        const userData = userQuerySnapshot.docs[0].data();
        setUserData(userData);
      } else {
        Alert.alert('User data not found');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // console.log('222222---------------',a);



  return (
    <View style={{ flex: 1 }}>

      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 21, textAlign: 'center', fontWeight: '700', color: 'black' }}>
          Profile
        </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 25, borderTopWidth: 1, borderBottomWidth: 1, paddingVertical: 13, borderColor: 'silver', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Image style={{ width: 75, height: 70, borderRadius: 34 }} source={require('../assets/Images/dummyImg.jpg')} />
          </View>
          <View style={{ marginLeft: 15 }}>
            <TextInput
              style={styles.input}
              // value={userData.name}
              value={a?.name || "name"}
              onChangeText={(text) => setUserData({ ...userData, name: text })}
              editable={false}
            />
            <TextInput
              style={{ fontSize: 16, color: 'grey' }}
              // value={userData.phone}
              value={a?.phone || "phone"}
              onChangeText={(text) => setUserData({ ...userData, phone: text })}
              editable={false}
            />
            {/* <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Your Name</Text> */}
            {/* <Text style={{ fontSize: 16, color: 'grey' }}>(+92) 333 4246144</Text> */}
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => { setLogout(!logout) }}>
            <Text style={{ color: '#EF5A56', fontSize: 16, fontWeight: '700' }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>




      <TouchableOpacity onPress={() => navigation.navigate("MyAccount",a)}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 17, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 23, height: 23, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/profileicon.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 16, color: 'black', fontWeight: '700' }}>My Account</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity onPress={() => navigation.navigate("HomeSetMap")}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 17, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 23, height: 23, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/Location.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 16, color: 'black', fontWeight: '700' }}>Address</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity onPress={() => navigation.navigate("Offers")}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 17, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 23, height: 23, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/offerspromos.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 16, color: 'black', fontWeight: '700' }}>Offers & Promos</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity onPress={() => navigation.navigate("YourFavorites")}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 17, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 23, height: 23, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/heart.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 16, color: 'black', fontWeight: '700' }}>Your Favourites</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity onPress={() => navigation.navigate("OrderHistory")}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 17, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 23, height: 23, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/orderhistory.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 16, color: 'black', fontWeight: '700' }}>Order History</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity onPress={() => navigation.navigate("HelpCenter")}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 17, justifyContent: 'space-between', marginBottom: 100 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 23, height: 23, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/helpcenter.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 16, color: 'black', fontWeight: '700' }}>Help Center</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>


      <Modal
        animationType="slide"
        transparent={true}
        visible={logout}
        onRequestClose={() => {
          setLogout(!logout)
        }}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ flex: 1, backgroundColor: 'white', marginTop: 420, elevation: 10, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
            <View style={{ marginTop: 26, marginHorizontal: 24 }}>
              <View>
                <TouchableOpacity onPress={() => setLogout(false)}>
                  <View style={{ height: 5, width: 56, backgroundColor: 'gray', alignSelf: 'center' }}></View>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 16 }}>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>
                  Logout
                </Text>
              </View>

              <View style={{ marginTop: 16 }}>
                <View>
                  <Text style={{ color: 'black', fontSize: 18 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
                </View>
                <View style={{ marginTop: 24 }}>
                  <TouchableOpacity onPress={() => validDataLogin()}>
                    <Text style={styles.btnlogout}>
                      Logout
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{ marginTop: 16 }}>
                  <TouchableOpacity onPress={() => setLogout(false)}>
                    <Text style={styles.btncancel}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>
        </View>
      </Modal>



      <View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 0, paddingVertical: 6 }}>
        <BottomTab />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  btnlogout: {
    backgroundColor: '#54408C',
    textAlign: 'center',
    // marginLeft: 24,
    // marginRight: 24,
    color: 'white',
    borderRadius: 35,
    fontSize: 19,
    paddingVertical: 12,
    fontWeight: '600'
  },
  btncancel: {
    backgroundColor: 'white',
    textAlign: 'center',
    // marginLeft: 24,
    // marginRight: 24,
    color: '#54408C',
    borderRadius: 35,
    fontSize: 19,
    paddingVertical: 12,
    fontWeight: '600'
  },
  input: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700'
  }
})