import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, ActivityIndicator, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const CategorySearch = () => {
    const navigation = useNavigation();

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



    const filterData = (item) => {
        if (userInput === "") {
            return (
                <TouchableOpacity
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
                </TouchableOpacity>
            )
        }

        if (item.Name.toLowerCase().includes(userInput.toLowerCase())) {
            return (
                <TouchableOpacity
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
                </TouchableOpacity>
            )
        }
    }
    const [userInput, setUserInput] = useState("")



    return (
        <View style={{ flex: 1 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 23, marginHorizontal: 24 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Category")}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 110 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>Search</Text>
                </View>
            </View>

            <View style={{ marginTop: 23, marginHorizontal: 24 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E5E7E9', borderRadius: 10, marginTop: 6 }}>
                    <Image style={{ marginHorizontal: 12, marginVertical: 12, tintColor: 'black', width: 28, height: 28 }} source={require('../assets/Icons/Search.png')} />
                    <TextInput onChangeText={(text) => setUserInput(text)}
                        placeholder='Search' placeholderTextColor={"black"} style={{ fontSize: 17, color: 'black', fontWeight: '600' }} />
                </View>
            </View>

            <View
                style={{ marginTop: 20, marginHorizontal: 24, marginBottom: 20, flex: 1 }}
                showsVerticalScrollIndicator={false}>
                <FlatList
                    data={category}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => (
                        filterData(item)
                    )}
                />
            </View>

        </View>
    )
}

export default CategorySearch

const styles = StyleSheet.create({
    image2: {
        width: 140,
        height: 152,
        borderRadius: 10,
        resizeMode: 'contain'
    },
})