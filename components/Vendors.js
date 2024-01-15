import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import firestore from '@react-native-firebase/firestore';

const Tab = createMaterialTopTabNavigator();

const vendorObjects = [
    {
        id: '1',
        image: require('../assets/Images/VFrame1.png'),
        title: 'Haymarket',
        ratingStars: 4,
    },
    {
        id: '2',
        image: require('../assets/Images/VFrame2.png'),
        title: 'Peloton',
        ratingStars: 4,
    },
    {
        id: '3',
        image: require('../assets/Images/VFrame3.png'),
        title: 'Jstor',
        ratingStars: 4,
    },
    {
        id: '4',
        image: require('../assets/Images/VFrame4.png'),
        title: 'Peppa Pig',
        ratingStars: 4,
    },
    {
        id: '5',
        image: require('../assets/Images/VFrame5.png'),
        title: 'Warehouse',
        ratingStars: 2,
    },
    {
        id: '6',
        image: require('../assets/Images/VFrame6.png'),
        title: 'GooDay',
        ratingStars: 4,
    },
    {
        id: '7',
        image: require('../assets/Images/VFrame7.png'),
        title: 'Crane & Co',
        ratingStars: 4,
    },
    {
        id: '8',
        image: require('../assets/Images/VFrame8.png'),
        title: 'Kuromi',
        ratingStars: 5,
    },
    {
        id: '9',
        image: require('../assets/Images/VFrame9.png'),
        title: 'Wattpad',
        ratingStars: 3,
    },
]

const Vendors = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            {/* home app bar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 23, marginHorizontal: 24 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>

                <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Vendors</Text>
                <TouchableOpacity>
                    <Image source={require("../assets/Icons/Search.png")} />
                </TouchableOpacity>
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
                    tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
                    tabBarStyle: {
                        backgroundColor: '#FFFFFF',
                    },
                    // tabBarItemStyle: {width: 140,},
                }}>
                <Tab.Screen name="All" component={All} options={{ tabBarStyle: { backgroundColor: 'white', }, tabBarItemStyle: {}, }} />
                <Tab.Screen name="Books" component={Books} />
                <Tab.Screen name="Poems" component={Poems} />
                <Tab.Screen name="Special for you" component={SpecialForYou} />
                <Tab.Screen name="Stationary" component={Stationary} />
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
                        <View style={{ marginRight: 8, marginBottom: 10, marginVertical: 15,  }}>
                            <View style={{ backgroundColor: '#fff' ,}}>
                                <Image
                                    style={{ width: 99, height: 100, resizeMode: 'contain' }}
                                    source={{uri:item.Image}} />
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
                {/* <FlatList
                    data={vendorObjects}
                    numColumns={3}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={itemsss => itemsss.id}

                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ marginRight: 8, marginBottom: 10,marginVertical:15 }}>
                                <View style={{ backgroundColor: '#fff' }}>
                                    <Image
                                        style={{ width: 99, height: 100, resizeMode: 'contain' }}
                                        source={item.image} />
                                </View>
                                <View style={{ marginTop: 5, marginBottom:3 }}>
                                    <Text style={{ fontSize: 17, fontWeight: '600', color: 'black' }}>{item.title}</Text>
                                </View>
                                <View style={{marginTop:5}}>
                                    {
                                        item.ratingStars == 1 ?
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
                                        item.ratingStars == 2 ?
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
                                        item.ratingStars == 3 ?
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
                                        item.ratingStars == 4 ?
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
                                        item.ratingStars == 5 ?
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
                        )
                    }}
                /> */}
            </View>


            {/* <View>
            <View style={{ backgroundColor: '#E5E7E9', height: 101, width: 101, marginRight: 15, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ width: 90, height: 68, resizeMode: 'contain' }}
                    source={require('../assets/Images/Frame1.png')} />
            </View>
            <View style={{ marginTop: 8 }}>
                <Text style={{ fontSize: 17, fontWeight:'600', color:'black' }}>Crane & Co</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                {
                    ratingStars == 1 ? 
                    <View>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                        <Image source={require('../assets/Icons/Star.png')}/>
                        <Image source={require('../assets/Icons/Star.png')}/>
                        <Image source={require('../assets/Icons/Star.png')}/>
                        <Image source={require('../assets/Icons/Star.png')}/>
                    </View>
                    :
                    null
                }
                {
                    ratingStars == 2 ? 
                    <View>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                        <Image source={require('../assets/Icons/Star.png')}/>
                        <Image source={require('../assets/Icons/Star.png')}/>
                        <Image source={require('../assets/Icons/Star.png')}/>
                    </View>
                    :
                    null
                }
                {
                    ratingStars == 3 ? 
                    <View>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                        <Image source={require('../assets/Icons/Star.png')}/>
                        <Image source={require('../assets/Icons/Star.png')}/>
                    </View>
                    :
                    null
                }
                {
                    ratingStars == 4 ? 
                    <View>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                        <Image source={require('../assets/Icons/Star.png')}/>
                    </View>
                    :
                    null
                }
                {
                    ratingStars == 5 ? 
                    <View>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                        <Image source={require('../assets/Icons/StarYellow.png')}/>
                    </View>
                    :
                    null
                }
            </View>
            </View>         */}


        </View>
    )
}

const Books = () => {
    return (
        <View>
            <Text>
                Books
            </Text>
        </View>
    )
}

const Poems = () => {
    return (
        <View>
            <Text>
                Poems
            </Text>
        </View>
    )
}

const SpecialForYou = () => {
    return (
        <View>
            <Text>
                Special For you
            </Text>
        </View>
    )
}

const Stationary = () => {
    return (
        <View>
            <Text>
                Stationary
            </Text>
        </View>
    )
}



export default Vendors

const styles = StyleSheet.create({})