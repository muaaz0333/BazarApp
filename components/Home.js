import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native';
import BottomTab from './BottomTab';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';


const { height, width } = Dimensions.get('window')
let userId = '';
const Home = (props) => {

    // increase or decrease the quantity
    const [quantity, setQuantity] = useState(1);
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    // console.log(name, phone, email, password)

    // TopSliders
    const [slider, setSlider] = useState([]); // Initial empty array of users
    useEffect(() => {
        const subscriber = firestore()
            .collection('TopSliders')
            .onSnapshot(querySnapshot => {
                const slider = [];

                querySnapshot.forEach(documentSnapshot => {
                    slider.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setSlider(slider);
                // setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    // Vendors
    const [vendors, setVendors] = useState([]); // Initial empty array of users
    useEffect(() => {
        const subscriber = firestore()
            .collection('Vendors')
            .onSnapshot(querySnapshot => {
                const vendors = [];

                querySnapshot.forEach(documentSnapshot => {
                    vendors.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setVendors(vendors);
                // setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    // Authors
    // const [loading, setLoading] = useState(true); // Set loading to true on component mount
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

    // Books
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
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
                setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        // return () => subscriber();
    }, []);


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

    const [data, setData] = useState([1, 2, 3]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    const [like, setLike] = useState(false)
    const [likeCart, setLikeCart] = useState(false)

    const [cart, setCart] = useState([]);



    const [items, setItems] = useState([]);
    const isFocused = useIsFocused();
    useEffect(() => {
        firestore()
            .collection('Books')
            .get()
            .then(querySnapshot => {
                console.log('Total Users Books', querySnapshot.size);
                let tempData = [];
                querySnapshot.forEach(documentSnapshot => {
                    console.log(
                        'User ID:',
                        documentSnapshot.id,
                        documentSnapshot.data()
                    );
                    tempData.push({
                        id: documentSnapshot.id,
                        data: documentSnapshot.data(),
                    });
                });
                setItems(tempData);
            });
    }, []);


    const addToCart = () => {
        const newItem = {
            img,
            title,
            price,
        };
        setCart(prevCart => [...prevCart, newItem]);
    };
    const { name, phone, email, password } = props.route.params || {};
    const userData = {
        name: name,
        phone: phone,
        email: email,
        password: password
    }


    return (
        <View style={{ flex: 1 }}>
            {/* home app bar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, marginHorizontal: 24, paddingBottom: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Books")}>
                    <Image source={require("../assets/Icons/Search.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Home</Text>
                <TouchableOpacity onPress={() => navigation.navigate("DeliveryNotification")}>
                    <Image source={require("../assets/Icons/Notification.png")} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Slider with flatlist */}
                <View style={{ marginTop: 1, marginHorizontal: 24 }}>
                    <FlatList
                        data={slider}
                        keyExtractor={(item) => item.key}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        pagingEnabled
                        onScroll={e => {
                            const x = e.nativeEvent.contentOffset.x;
                            setCurrentIndex((x / width).toFixed(0));
                        }}
                        renderItem={({ item, index }) => (

                            <View key={item.key} style={{ marginBottom: 5, width: width / 1.2, backgroundColor: '#FAF9FD', elevation: 5, borderRadius: 8, flexDirection: 'row', marginTop: 16, alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 6 }}>
                                <View style={{ flex: 1, }} key={item.key}>
                                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', paddingLeft: 23 }}>{item.Title}</Text>
                                    <Text style={{ fontSize: 18, color: 'black', paddingLeft: 23 }}>{item.Subtitle}</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate("CartConfirmOrder")} style={{ paddingLeft: 23, alignSelf: 'flex-start', marginTop: 14, }}>
                                        <Text style={[styles.btnordernow, { alignItems: 'center' }]}>Order Now</Text>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: item.Image }} />
                                </View>
                            </View>
                        )}

                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
                        {
                            data.map((item, index) => {

                                return (
                                    <View key={item.key} style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: currentIndex == index ? '#54408C' : 'gray', marginLeft: 5 }}>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>

                {/*  books flatlist */}
                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 24 }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>
                        Top of Week
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Books")}>
                        <Text style={{ color: '#54408C', fontSize: 16, fontWeight: '800' }}>
                            See all
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 10, marginHorizontal: 24 }}>
                    <FlatList
                        keyExtractor={(item) => item.key}
                        data={books}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                key={item.key}
                                style={{ marginRight: 10, marginTop: 12 }}
                                onPress={() => openModal(item.Image, item.Name, item.VendorImg, item.About, item.Rating, item.Price, item.RatingStars)}
                            >
                                <View key={item.key}>
                                    <Image style={styles.image2} source={{ uri: item.Image }} />
                                    <Text style={{ marginTop: 6, fontSize: 15, color: 'black', fontWeight: '700' }}>{item.Name}</Text>
                                    <Text style={{ color: '#54408C', fontWeight: '700' }}>${item.Price}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                {/* Best Vendors */}
                <View style={{ marginTop: 27, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 24 }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Best Vendors</Text>
                    <TouchableOpacity onPress={() => { { navigation.navigate("Vendors") } }}>
                        <Text style={{ color: '#54408C', fontSize: 16, fontWeight: '800' }}>
                            See all
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 16, marginRight: 0, marginHorizontal: 24 }}>
                    <FlatList
                        keyExtractor={(item) => item.key}
                        data={vendors}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        renderItem={({ item, index }) => (
                            <View key={item.key} style={{ backgroundColor: 'white', height: 80, width: 80, marginRight: 7, alignContent: 'center', justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
                                <Image
                                    style={{ width: 67, height: 50, resizeMode: 'contain' }}
                                    source={{ uri: item.Image }} />
                            </View>
                        )}
                    />
                </View>

                {/* Authors */}
                <View style={{ marginTop: 26, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 24 }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Authors</Text>
                    <TouchableOpacity onPress={() => { { navigation.navigate("Authors") } }}>
                        <Text style={{ color: '#54408C', fontSize: 16, fontWeight: '800' }}>
                            See all
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 16, marginHorizontal: 24 }}>
                    <FlatList
                        keyExtractor={(item) => item.key}
                        data={authors}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                key={item.key}
                                onPress={() => navigation.navigate("AuthorInnerPage", { item: item })}
                                style={{ marginRight: 13, marginBottom: 90 }}>
                                <Image style={{ height: 102, width: 102, borderRadius: 50, resizeMode: 'contain' }} source={{ uri: item.Image }} />
                                <Text style={{ marginTop: 1, fontSize: 16, color: 'black', fontWeight: '700', marginLeft: 3 }}>{item.Name}</Text>
                                <Text style={{ color: 'gray', fontWeight: '700', marginLeft: 3, fontSize: 14 }}>{item.Designation}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 0, paddingVertical: 6 }}>
                <BottomTab a={userData} />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
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
                                    <View style={{ flexDirection: 'row' }}>
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
                                        <TouchableOpacity
                                            style={{ marginLeft: 9 }}
                                            onPress={() => {
                                                setLikeCart(!likeCart)
                                            }}>
                                            {/* <Image style={{ height: 25, width: 24, marginLeft: 5 }} source={require('../assets/Icons/cartIcon.png')} /> */}
                                            {
                                                likeCart ?
                                                    <Image style={{ width: 24, height: 24, tintColor: '#54408C' }} source={require('../assets/Icons/cartIconFill.png')} />
                                                    :
                                                    <Image style={{ width: 24, height: 24 }} source={require('../assets/Icons/cartIcon.png')} />


                                            }
                                        </TouchableOpacity>
                                    </View>
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
                                <Text style={{ color: 'black', fontWeight: '900', marginHorizontal: 4 }}>{rating}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                <TouchableOpacity style={{ backgroundColor: '#E8E8E8', width: 24, height: 24, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}
                                    onPress={handleDecrement}
                                >
                                    <Image style={{ tintColor: 'black' }} source={require('../assets/Icons/Minus.png')} />
                                </TouchableOpacity>

                                <View>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '700', marginHorizontal: 13 }}> {quantity} </Text>
                                </View>

                                <TouchableOpacity style={{ backgroundColor: '#54408C', width: 24, height: 24, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}
                                    onPress={handleIncrement}
                                >
                                    <Image source={require('../assets/Icons/Plus.png')} />
                                </TouchableOpacity>

                                <View>
                                    <Text style={{ color: '#54408C', fontSize: 15, fontWeight: '700', marginLeft: 17 }}>
                                        $ {price * quantity}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignContent: 'center', alignSelf: 'center' }}>
                                <View style={{ marginTop: 20 }}>
                                    <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                                        <Text style={styles.btncontinue}>
                                            Continue Shopping
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginLeft: 8, marginTop: 20, }}>
                                    <TouchableOpacity onPress={() => navigation.navigate("Cart", { cart })}>
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
export default Home
const styles = StyleSheet.create({
    btnordernow: {
        backgroundColor: '#54408C',
        textAlign: 'center',
        color: 'white',
        borderRadius: 40,
        fontSize: 17,
        fontWeight: '600',
        paddingVertical: 8,
        paddingHorizontal: 24,
    },
    image: {
        width: 99,
        height: 145,
        borderRadius: 3.14,
        resizeMode: "cover"
    },
    image2: {
        width: 130,
        height: 195,
        borderRadius: 10
    },
    btncontinue: {
        backgroundColor: '#54408C',
        textAlign: 'center',
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
        color: '#54408C',
        borderRadius: 27,
        fontSize: 17,
        paddingVertical: 10,
        fontWeight: '700',
        paddingHorizontal: 22
    },
})