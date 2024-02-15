import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const YourFavorites = () => {
    const navigation = useNavigation();
    const [like, setLike] = useState(true)

    return (
        <View style={{ flex: 1, marginHorizontal: 24 }}>

            {/* Appbar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 }}>
                <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 74 }}>
                    <Text style={{ fontSize: 21, color: 'black', fontWeight: '700' }}>Your Favorites</Text>
                </View>
            </View>


            <View style={{ marginTop: 20 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, paddingVertical: 10, borderColor: 'silver', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Image style={{ width: 68, height: 68, borderRadius: 10 }} source={require('../assets/Images/categoryBook1.png')} />
                        </View>
                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>The Da Vinci Code</Text>
                            <Text style={{ fontSize: 16, color: '#54408C', fontWeight: '700' }}>$19.99</Text>
                        </View>
                    </View>
                    <View style={{}}>
                        {/* Favourites */}
                        <TouchableOpacity
                            style={{ marginRight: 5 }}
                            onPress={() => {
                                setLike(!like)
                            }}
                        >
                            {/* <Image style={{ width: 24, height: 24 }} source={require('../assets/Icons/unfavorite.png')} /> */}
                            {
                                like ?
                                    <Image style={{ width: 24, height: 24 }} source={require('../assets/Icons/favourite.png')} />
                                    :
                                    <Image style={{ width: 26, height: 26 }} source={require('../assets/Icons/unfavorite.png')} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, paddingVertical: 10, borderColor: 'silver', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Image style={{ width: 68, height: 68, borderRadius: 10 }} source={require('../assets/Images/categoryBook2.png')} />
                        </View>
                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Carrie Fisher</Text>
                            <Text style={{ fontSize: 16, color: '#54408C', fontWeight: '700' }}>$27.12</Text>
                        </View>
                    </View>
                    <View style={{}}>
                        {/* Favourites */}
                        <TouchableOpacity
                            style={{ marginRight: 5 }}
                            onPress={() => {
                                setLike(!like)
                            }}
                        >
                            {/* <Image style={{ width: 24, height: 24 }} source={require('../assets/Icons/unfavorite.png')} /> */}
                            {
                                like ?
                                    <Image style={{ width: 24, height: 24 }} source={require('../assets/Icons/favourite.png')} />
                                    :
                                    <Image style={{ width: 26, height: 26 }} source={require('../assets/Icons/unfavorite.png')} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>




                <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, paddingVertical: 10, borderColor: 'silver', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Image style={{ width: 68, height: 68, borderRadius: 10 }} source={require('../assets/Images/categoryBook3.png')} />
                        </View>
                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>The Good Sister</Text>
                            <Text style={{ fontSize: 16, color: '#54408C', fontWeight: '700' }}>$13.52</Text>
                        </View>
                    </View>
                    <View style={{}}>
                        {/* Favourites */}
                        <TouchableOpacity
                            style={{ marginRight: 5 }}
                            onPress={() => {
                                setLike(!like)
                            }}
                        >
                            {/* <Image style={{ width: 24, height: 24 }} source={require('../assets/Icons/unfavorite.png')} /> */}
                            {
                                like ?
                                    <Image style={{ width: 24, height: 24 }} source={require('../assets/Icons/favourite.png')} />
                                    :
                                    <Image style={{ width: 26, height: 26 }} source={require('../assets/Icons/unfavorite.png')} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, paddingVertical: 10, borderColor: 'silver', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Image style={{ width: 68, height: 68, borderRadius: 10 }} source={require('../assets/Images/categoryBook4.png')} />
                        </View>
                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>The Waiting</Text>
                            <Text style={{ fontSize: 16, color: '#54408C', fontWeight: '700' }}>$31.00</Text>
                        </View>
                    </View>
                    <View style={{}}>
                        {/* Favourites */}
                        <TouchableOpacity
                            style={{ marginRight: 5 }}
                            onPress={() => {
                                setLike(!like)
                            }}
                        >
                            {/* <Image style={{ width: 24, height: 24 }} source={require('../assets/Icons/unfavorite.png')} /> */}
                            {
                                like ?
                                    <Image style={{ width: 24, height: 24 }} source={require('../assets/Icons/favourite.png')} />
                                    :
                                    <Image style={{ width: 26, height: 26 }} source={require('../assets/Icons/unfavorite.png')} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>

            </View>


        </View>
    )
}

export default YourFavorites

const styles = StyleSheet.create({})