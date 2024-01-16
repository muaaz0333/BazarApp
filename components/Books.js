import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, ActivityIndicator, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';




const Books = () => {

    const navigation = useNavigation();


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


    // Modal
    const [img, setImg] = useState();
    const [title, setTitle] = useState();
    const [vendor, setVendor] = useState();
    const [about, setAbout] = useState();
    const [rating, setRating] = useState();
    const [price, setPrice] = useState();
    const [star, setStar] = useState();

    const openModal = (pic, title, vendor, about, rating, price, ratingStars) => {
        setImg({ uri: pic });
        setTitle(title)
        setVendor({ uri: vendor })
        setAbout(about)
        setRating(rating)
        setPrice(price)
        setStar(ratingStars)
        setModalVisible(!modalVisible)
    }
    const [modalVisible, setModalVisible] = useState(false);



    // Search
    const FilterProducts = () => {
    }

    const filterData = (item) => {
        

        if (userInput === "") {
            return (

                <TouchableOpacity
                    style={{ marginHorizontal: 5 }}
                    onPress={() => openModal(item.Image, item.Name, item.VendorImg, item.About, item.Rating, item.Price, item.RatingStars)}>
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
                    onPress={() => openModal(item.Image, item.Name, item.VendorImg, item.About, item.Rating, item.Price, item.RatingStars)}>
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



    // favorite
    const [like, setLike] = useState(false)

    const [userInput, setUserInput] = useState("")
    return (
        <View style={{ flex: 1 }}>

            {/* home app bar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 23, marginHorizontal: 24 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>
                <View style={{ marginRight: 120 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>Search</Text>
                </View>
            </View>

            <View style={{ marginTop: 23, marginHorizontal: 24 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E5E7E9', borderRadius: 10, marginTop: 6 }}>
                    <Image
                        style={{ marginHorizontal: 12, marginVertical: 12, tintColor: 'black', width: 28, height: 28 }}
                        source={require('../assets/Icons/Search.png')}
                    />

                    <TextInput
                        onChangeText={(text) => setUserInput(text)}
                        placeholder='Search'
                        placeholderTextColor={"grey"}
                        style={{ fontSize: 17, color: 'black', fontWeight: '600' }} />
                </View>

            </View>

            <View style={{ marginTop: 20, marginHorizontal: 24, marginBottom: 20, flex:1 }}
                showsVerticalScrollIndicator={false}>
                <FlatList
                    data={books}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => (
                        filterData(item)
                        // <TouchableOpacity
                        //     style={{ marginHorizontal: 5 }}
                        //     onPress={() => openModal(item.Image, item.Name, item.VendorImg, item.About, item.Rating, item.Price, item.RatingStars)}>
                        //     <View style={{ marginRight: 9, marginTop: 10, }}>
                        //         <View>
                        //             <Image style={styles.image2} source={{ uri: item.Image }} />
                        //         </View>
                        //         <View>
                        //             <Text style={{ color: 'black', fontSize: 17, fontWeight: '700', marginTop: 4 }}>
                        //                 {item.Name}
                        //             </Text>
                        //         </View>
                        //         <View>
                        //             <Text style={{ color: '#54408C', fontSize: 16, fontWeight: '700', marginTop: 2 }}>
                        //                 ${item.Price}
                        //             </Text>
                        //         </View>
                        //     </View>
                        // </TouchableOpacity>

                    )}
                />
            </View>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }}>

                    <View style={{ flex: 1, backgroundColor: 'white', marginTop: 35, elevation: 10, borderTopLeftRadius: 60, borderTopRightRadius: 60 }}>

                        <View style={{ marginTop: 20, marginHorizontal: 24 }}>

                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <View style={{ height: 5, width: 56, backgroundColor: 'gray', alignSelf: 'center' }}></View>
                            </TouchableOpacity>


                            <View style={{ marginTop: 20, alignContent: 'center', alignSelf: 'center', }}>
                                <Image style={{ borderRadius: 40, resizeMode: 'contain', width: 237, height: 313 }} source={img} />
                            </View>

                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>

                                    <Text style={{ fontSize: 19, color: 'black', fontWeight: '800' }}>
                                        {title}
                                    </Text>
                                    {/* Favourites */}
                                    <TouchableOpacity onPress={() => {
                                        setLike(!like)
                                    }}>
                                        {/* <Image style={{ width: 24, height: 24 }} source={require('../assets/Icons/unfavorite.png')} /> */}
                                        {
                                            like ? <Image style={{ width: 24, height: 24 }} source={require('../assets/Icons/favourite.png')} />
                                                :
                                                <Image style={{ width: 24, height: 24 }} source={require('../assets/Icons/unfavorite.png')} />
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ marginTop: 6, }}>
                                <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={vendor} />
                            </View>

                            <View style={{ marginTop: 6 }}>
                                <Text style={{ fontSize: 16, fontWeight: '400', color: 'grey', textAlign: 'justify' }}>
                                    {about}
                                </Text>
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 19, color: 'black', fontWeight: 'bold' }}>
                                    Review
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center' }}>
                                {
                                    star == 1 ?
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
                                    star == 2 ?
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
                                    star == 3 ?
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
                                    star == 4 ?
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
                                    star == 5 ?
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

                                {/* <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/Star.png')} /> */}
                                <Text style={{ color: 'black', fontWeight: '900', marginHorizontal: 4 }}>{rating}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                <View style={{ backgroundColor: '#E8E8E8', width: 24, height: 24, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ tintColor: 'black' }} source={require('../assets/Icons/Minus.png')} />
                                </View>

                                <View>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '700', marginHorizontal: 13 }}> 1 </Text>
                                </View>

                                <View style={{ backgroundColor: '#54408C', width: 24, height: 24, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../assets/Icons/Plus.png')} />
                                </View>

                                <View>
                                    <Text style={{ color: '#54408C', fontSize: 15, fontWeight: '700', marginLeft: 17 }}>
                                        $ {price}
                                    </Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignContent: 'center', alignSelf: 'center' }}>
                                <View style={{ marginTop: 20 }}>
                                    <TouchableOpacity>
                                        <Text style={styles.btncontinue}>
                                            Continue Shopping
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginLeft: 8, marginTop: 20, }}>
                                    <TouchableOpacity onPress={() => navigation.navigate("CartConfirmOrder")}>
                                        <Text style={styles.btnviewcart}>View Cart</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>


                        </View>


                    </View>
                </View>
            </Modal>


        </View>
    )
}

export default Books

const styles = StyleSheet.create({
    image2: {
        width: 140,
        height: 195,
        borderRadius: 10,
        resizeMode: 'contain'
    },
    btncontinue: {
        backgroundColor: '#54408C',
        textAlign: 'center',
        // marginLeft: 24,
        // marginRight: 24,
        color: 'white',
        borderRadius: 27,
        fontSize: 17,
        paddingVertical: 10,
        fontWeight: '700',
        paddingHorizontal: 28
    },
    btnviewcart: {
        backgroundColor: '#F0F3F4',
        textAlign: 'center',
        // marginLeft: 24,
        // marginRight: 24,
        color: '#54408C',
        borderRadius: 27,
        fontSize: 17,
        paddingVertical: 10,
        fontWeight: '700',
        paddingHorizontal: 22
    },
})