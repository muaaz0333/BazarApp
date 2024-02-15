import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import firestore from '@react-native-firebase/firestore';

const Tab = createMaterialTopTabNavigator();

const Vendors = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            {/* home app bar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 23, marginHorizontal: 24 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>

                <Text style={{ fontSize: 20, color: 'black', fontWeight: '800', marginRight:115 }}>Vendors</Text>
                {/* <TouchableOpacity>
                    <Image source={require("../assets/Icons/Search.png")} />
                </TouchableOpacity> */}
            </View>


            <View style={{ marginTop: 20, marginHorizontal: 24 }}>
                <Text style={{ fontSize: 16, color: 'grey' }}>
                    Our Vendors
                </Text>
            </View>

            <View style={{ marginBottom: 10, marginHorizontal: 24 }}>
                <Text style={{ fontSize: 20, color: '#54408C', fontWeight: '700' }}>
                    Vendors
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
                    tabBarItemStyle: { width: 120, }
                }}>
                <Tab.Screen name="All" component={All} options={{ tabBarStyle: { backgroundColor: 'white', }, tabBarItemStyle: { width: 120, } }} />
                <Tab.Screen name="Books" component={Books} />
                <Tab.Screen name="Poems" component={Poems} />
            </Tab.Navigator>


        </View>
    )
}

const All = () => {

    // Vendors
    const [vendor, setVendor] = useState([]); // Initial empty array of users
    useEffect(() => {
        const subscriber = firestore()
            .collection('Vendors')
            .onSnapshot(querySnapshot => {
                const vendor = [];

                querySnapshot.forEach(documentSnapshot => {
                    vendor.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setVendor(vendor);
                // setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    return (
        <View style={{ flex: 1, marginHorizontal: 24 }}>

            <View style={{ marginTop: 0, }}>
                <FlatList
                    data={vendor}
                    showsHorizontalScrollIndicator={false}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <View style={{ marginRight: 8, marginBottom: 10, marginVertical: 15, }}>
                            <View style={{ backgroundColor: '#fff', }}>
                                <Image
                                    style={{ width: 99, height: 100, resizeMode: 'contain' }}
                                    source={{ uri: item.Image }} />
                            </View>
                            <View style={{ marginTop: 5, marginBottom: 3 }}>
                                <Text style={{ fontSize: 17, fontWeight: '600', color: 'black' }}>{item.Name}</Text>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                {
                                    item.Rating == 1 ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                        </View>
                                        :
                                        null
                                }
                                {
                                    item.Rating == 2 ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                        </View>
                                        :
                                        null
                                }
                                {
                                    item.Rating == 3 ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                        </View>
                                        :
                                        null
                                }
                                {
                                    item.Rating == 4 ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                        </View>
                                        :
                                        null
                                }
                                {
                                    item.Rating == 5 ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                        </View>
                                        :
                                        null
                                }
                            </View>
                        </View>
                    )}
                />
               
            </View>
        </View>
    )
}

const Books = () => {

    // Books
    // const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [books, setBooks] = useState([]); // Initial empty array of users
    useEffect(() => {
        const subscriber = firestore()
            .collection('Books')
            .onSnapshot(querySnapshot => {
                const books = [];

                querySnapshot.forEach(documentSnapshot => {
                    books.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setBooks(books);
                // setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    // if (loading) {
    //       return <ActivityIndicator />;
    //   }

    return (
        <View style={{ flex: 1 }}>

            <View style={{ marginTop: 20, marginHorizontal: 24, marginBottom: 20 }}
                showsVerticalScrollIndicator={false}>
                <FlatList
                    data={books}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View
                            style={{ marginHorizontal: 5 }}
                        // onPress={() => openModal(item.Image, item.Name, item.VendorImg, item.About, item.Rating, item.Price, item.RatingStars)}
                        >
                            <View style={{ marginRight: 9, marginTop: 10, }}>
                                <View>
                                    <Image style={styles.image2} source={{ uri: item.Image }} />
                                </View>
                                <View>
                                    <Text style={{ color: 'black', fontSize: 17, fontWeight: '700', marginTop: 4 }}>
                                        {item.Name}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#54408C', fontSize: 16, fontWeight: '700', marginTop: 2 }}>
                                        ${item.Price}
                                    </Text>
                                </View>
                            </View>
                        </View>

                    )}
                />
            </View>

        </View>
    )
}

const Poems = () => {
    // Poems
    // const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [poems, setPoems] = useState([]); // Initial empty array of users
    useEffect(() => {
        const subscriber = firestore()
            .collection('Categories')
            .onSnapshot(querySnapshot => {
                const poems = [];

                querySnapshot.forEach(documentSnapshot => {
                    poems.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setPoems(poems);
                // setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    // if (loading) {
    //       return <ActivityIndicator />;
    //   }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: 20, marginBottom: 20, alignItems: 'center', marginHorizontal: 24, }}>
                <FlatList
                    data={poems}
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
        </View>
    )
}

export default Vendors

const styles = StyleSheet.create({
    image2: {
        width: 140,
        height: 195,
        borderRadius: 10,
        resizeMode: 'contain'
    },
})