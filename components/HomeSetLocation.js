import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput, Alert } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

const HomeSetLocation = () => {
    const navigation = useNavigation();


    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [governorate, setGovernorate] = useState("")
    const [city, setCity] = useState("")
    const [block, setBlock] = useState("")
    const [street, setStreet] = useState("")
    const [building, setBuilding] = useState("")
    const [region, setRegion] = useState(null);

    const [phoneError, setPhoneError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [governorateError, setGovernorateError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [blockError, setBlockError] = useState(false);
    const [streetNumError, setStreetNumError] = useState(false);
    const [buildingNumError, setBuildingNumError] = useState(false);

    const validDataLogin = () => {
        { !phone ? setPhoneError(true) : setPhoneError(false) }
        { !name ? setNameError(true) : setNameError(false) }
        { !governorate ? setGovernorateError(true) : setGovernorateError(false) }
        { !city ? setCityError(true) : setCityError(false) }
        { !block ? setBlockError(true) : setBlockError(false) }
        { !street ? setStreetNumError(true) : setStreetNumError(false) }
        { !building ? setBuildingNumError(true) : setBuildingNumError(false) }

        if (!phone || !name || !governorate || !city || !block || !street || !building) { return; }

        navigation.navigate("OrderStatus");

        // You can now use the state variables to get the user's location
        const location = {
            phone,
            name,
            governorate,
            city,
            block,
            street,
            building,
        };

        console.log('User Location:', location);
    }

    const handleSearch = async () => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyAWR5l7qnyXVo7EAW2EhSiUHxt-oZr6mYA`
            );
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            if (data.status !== 'OK') {
                throw new Error('Geocoding API request failed');
            }
            const { lat, lng } = data.results[0].geometry.location;
            setRegion({
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            Alert.alert('Error', 'Failed to fetch location data. Please try again later.');
        }
    };
    


    return (
        <ScrollView style={{ flex: 1, marginHorizontal: 24, }} showsVerticalScrollIndicator={false}>

            {/* home app bar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, }}>
                <TouchableOpacity onPress={() => { navigation.navigate("HomeSetMap") }}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>


                <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>Location</Text>
                <TouchableOpacity onPress={() => { }}>
                    <Image source={require("../assets/Icons/GPS-Fill.png")} />
                </TouchableOpacity>
            </View>


            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold' }}>
                        Phone
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        inputMode='numeric'
                        placeholder="Phone"
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                        placeholderTextColor={"grey"}
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>
            {phoneError ? <Text style={styles.error}>Please enter phone number.</Text> : null}

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', }}>
                        Name
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder="Name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>
            {nameError ? <Text style={styles.error}>Please enter name.</Text> : null}

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold' }}>
                        Governorate
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder="Governorate"
                        value={governorate}
                        onChangeText={(text) => setGovernorate(text)}
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>
            {governorateError ? <Text style={styles.error}>Please provide governorate.</Text> : null}

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold' }}>
                        City
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder='City'
                        value={city}
                        onChangeText={(text) => setCity(text)}
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>
            {cityError ? <Text style={styles.error}>Please enter city name.</Text> : null}

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', }}>
                        Block
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        inputMode='numeric'
                        placeholderTextColor={"grey"}
                        placeholder="Block"
                        value={block}
                        onChangeText={(text) => setBlock(text)}
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>
            {blockError ? <Text style={styles.error}>Please enter block number.</Text> : null}

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold' }}>
                        Street number
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder='Street name /number'

                        value={street}
                        onChangeText={(text) => setStreet(text)}
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>
            {streetNumError ? <Text style={styles.error}>Please enter street name/number.</Text> : null}

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', }}>
                        Building name
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder="Building Name"
                        value={building}
                        onChangeText={(text) => setBuilding(text)}
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>
            {buildingNumError ? <Text style={styles.error}>Please enter building name/number.</Text> : null}

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', }}>
                        Floor (option)
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        inputMode='numeric'
                        placeholderTextColor={"grey"}
                        placeholder='Floor (option)'
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', }}>
                        Flat (option)
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder='Flat (option)'
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', }}>
                        Avenue (option)
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder='Avenue (option)'
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>


            <View style={{ marginVertical: 22 }}>
                <TouchableOpacity
                    onPress={handleSearch}
                // onPress={validDataLogin}
                >
                    <Text style={styles.confirmation}>
                        Confirmation
                    </Text>
                </TouchableOpacity>
            </View>
            {region && (
                <MapView style={{ flex: 1 }} region={region}>
                    <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                </MapView>
            )}


        </ScrollView>
    )
}

export default HomeSetLocation

const styles = StyleSheet.create({
    confirmation: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        backgroundColor: '#54408C',
        paddingVertical: 12,
        borderRadius: 30,
        fontWeight: '600'
    },
    error: {
        color: 'red',
        marginHorizontal: 0,
        marginTop: 1,
        fontFamily: 'AirbnbCereal_M',
    },

})