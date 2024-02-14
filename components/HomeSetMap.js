import { View, Text, Image, Linking, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput, PermissionsAndroid, Alert } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const HomeSetMap = () => {

  const Permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'BazarApp Location Permission',
          message:
            'BazarApp needs access to your Location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
        getCurrentLocation()
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };


  const [currentLocation, setCurrentLocation] = useState(null)
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude })
        console.log(latitude, longitude)
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 15000, }
    )
  }

  const openMaps = () => {
    const { latitude, longitude } = currentLocation
    if (latitude, longitude) {
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
      Linking.openURL(url)
    }
    else {
      Alert.alert("Location not Available")
    }
  }


  const navigation = useNavigation();
  const [locationModal, setLocationModal] = useState(true);

  return (
    <View style={{ flex: 1, marginHorizontal: 24 }}>


      {/* home app bar */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, }}>
        <TouchableOpacity onPress={() => { navigation.navigate("CartConfirmOrder") }}>
          <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>Location</Text>
        <TouchableOpacity onPress={() => { }}>
          <Image source={require("../assets/Icons/Notification.png")} />
        </TouchableOpacity>
      </View>


      {/* Map */}
      <View style={{ marginTop: 10, borderRadius: 20, width: '100%', height: '30%' }}>
      <View style={{zIndex:1, flex:0.5,}}>
      <GooglePlacesAutocomplete
      fetchDetails={true}
        placeholder='Search'
        onPress={(data,details =null)=>{
          // 'details' is provided when fetchDetails = true
          
          console.log(data,details);
        }}
        query={{
          key:"AIzaSyAWR5l7qnyXVo7EAW2EhSiUHxt-oZr6mYA",
          language:'en',
        }}
      />
      </View>
        <MapView
        
          provider={PROVIDER_GOOGLE}
          onPress={() => setLocationModal(!locationModal)}
          style={{ height: '100%', width: '100%', marginTop:50,zIndex:0}}
          initialRegion={{
            latitude: 31.582045,
            longitude: 74.329376,
            latitudeDelta: 0.5,
            longitudeDelta: 0.9,
          }}
        >
          <Marker
            draggable
            title='Location'
            description='Delivery Person 1'
            coordinate={{
              latitude: 31.569945,
              longitude: 74.389376
            }}
            onDragEnd={(e) => console.log({ x: e.nativeEvent.coordinate })}
          />
        </MapView>
      </View>



      {/* Map Modal */}
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={locationModal}
          onRequestClose={() => {
            setLocationModal(!locationModal)
          }}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.1)' }}>
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 335, elevation: 10, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
              <View style={{ marginTop: 16, marginHorizontal: 24 }}>
                <View>
                  <TouchableOpacity onPress={() => { setLocationModal(!locationModal) }}>
                    <View style={{ height: 5, width: 56, backgroundColor: 'gray', alignSelf: 'center' }}></View>
                  </TouchableOpacity>
                </View>

                <View style={{ marginTop: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 19, color: 'black', fontWeight: '700' }}>
                    Detail Address
                  </Text>
                  <TouchableOpacity
                    onPress={() => { Permission }}>
                    <Image source={require('../assets/Icons/GPS-Fill.png')} />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 22, }}>
                  <View style={{ backgroundColor: '#FAF9FD', width: 36, height: 36, alignItems: 'center', justifyContent: 'center', borderRadius: 16 }}>
                    <Image style={{ width: 26, height: 26 }} source={require('../assets/Icons/Location.png')} />
                  </View>
                  <View style={{ marginHorizontal: 16, flex: 1 }}>
                    <Text style={{ fontWeight: '700', color: 'black', fontSize: 16 }}>
                      Lahore, Pakistan
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: 'grey' }}>
                      Timber Market Ravi Road Lahore Street 2, Pakistan

                    </Text>

                  </View>
                </View>

                <View style={{ width: 350, height: 1, backgroundColor: 'silver', marginTop: 28 }}></View>
                <View style={{ marginTop: 19 }}>
                  <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>
                    Save Address As
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                  <TouchableOpacity>
                    <Text style={{ color: '#54408C', backgroundColor: '#FAF9FD', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, fontSize: 15 }}>
                      Home
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ marginLeft: 20 }}>
                    <Text style={{ color: 'silver', backgroundColor: 'white', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, fontSize: 15, borderColor: 'silver', borderWidth: 1 }}>
                      Offices
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{ marginTop: 80 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("HomeSetLocation")}>
                    <Text style={styles.confirmationbtn}>
                      Confirmation
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </View>
        </Modal>
      </View>




      {/* <View>
        <Text style={{ color: 'black' }}>Latitude: {currentLocation ? currentLocation.latitude : 'Loading...'}</Text>
        <Text style={{ color: 'black' }}>Longitude: {currentLocation ? currentLocation.longitude : 'Loading...'}</Text>
      </View> */}

      {/* {currentLocation
        ? (
          <>
            <TouchableOpacity onPress={openMaps}>
              <View>
                <Text style={{ color: 'black' }}>Open Maps</Text>
              </View>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={Permission}>
              <View>
                <Text style={{ color: 'black' }}>
                  Get Location
                </Text>
              </View>
            </TouchableOpacity>
          </>
        )} */}

    </View>
  )
}

export default HomeSetMap

const styles = StyleSheet.create({
  confirmationbtn: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    backgroundColor: '#54408C',
    paddingVertical: 12,
    borderRadius: 30,
    fontWeight: '600'
  }
})