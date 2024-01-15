import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

// const authorObjects = [
//     {
//         image: require('../assets/Images/Author7.png'),
//         designation: 'Novelist',
//         name: 'Anna',
//         ratingStars: 4,
//         rating: '(4.0)',
//         about: 'Anna is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

//         Product1:

//         {
//             productImg: require('../assets/Images/book.jpg'),
//             productTitle: 'The da vinci Code',
//             productPrice: '19.99'
//         },

//         Product2:

//         {
//             productImg: require('../assets/Images/book1.png'),
//             productTitle: 'Carrie Fisher',
//             productPrice: '27.12'
//         },

//         Product3:

//         {
//             productImg: require('../assets/Images/book3.jpg'),
//             productTitle: 'The Good Sister',
//             productPrice: '27.12'
//         },

//         Product4:

//         {
//             productImg: require('../assets/Images/book4.jpg'),
//             productTitle: 'The Waiting',
//             productPrice: '27.12'
//         },
//     },
//     {
//         image: require('../assets/Images/Author5.png'),
//         designation: 'Writer',
//         name: 'Nina',
//         ratingStars: 4,
//         rating: '(4.0)',
//         about: 'Nina is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

//         Product1:

//         {
//             productImg: require('../assets/Images/book.jpg'),
//             productTitle: 'The da vinci Code',
//             productPrice: '19.99'
//         },

//         Product2:

//         {
//             productImg: require('../assets/Images/book1.png'),
//             productTitle: 'Carrie Fisher',
//             productPrice: '27.12'
//         },

//         Product3:

//         {
//             productImg: require('../assets/Images/book3.jpg'),
//             productTitle: 'The Good Sister',
//             productPrice: '27.12'
//         },

//         Product4:

//         {
//             productImg: require('../assets/Images/book4.jpg'),
//             productTitle: 'The Waiting',
//             productPrice: '27.12'
//         },
//     },
//     {
//         image: require('../assets/Images/Author1.png'),
//         designation: 'Novelist',
//         name: 'Jack',
//         ratingStars: 4,
//         rating: '(4.0)',
//         about: 'Jack is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

//         Product1:

//         {
//             productImg: require('../assets/Images/book.jpg'),
//             productTitle: 'The da vinci Code',
//             productPrice: '19.99'
//         },

//         Product2:

//         {
//             productImg: require('../assets/Images/book1.png'),
//             productTitle: 'Carrie Fisher',
//             productPrice: '27.12'
//         },

//         Product3:

//         {
//             productImg: require('../assets/Images/book3.jpg'),
//             productTitle: 'The Good Sister',
//             productPrice: '27.12'
//         },

//         Product4:

//         {
//             productImg: require('../assets/Images/book4.jpg'),
//             productTitle: 'The Waiting',
//             productPrice: '27.12'
//         },
//     },
//     {
//         image: require('../assets/Images/Author6.png'),
//         designation: 'Novelist',
//         name: 'John A',
//         ratingStars: 4,
//         rating: '(4.0)',
//         about: 'John is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

//         Product1:

//         {
//             productImg: require('../assets/Images/book.jpg'),
//             productTitle: 'The da vinci Code',
//             productPrice: '19.99'
//         },

//         Product2:

//         {
//             productImg: require('../assets/Images/book1.png'),
//             productTitle: 'Carrie Fisher',
//             productPrice: '27.12'
//         },

//         Product3:

//         {
//             productImg: require('../assets/Images/book3.jpg'),
//             productTitle: 'The Good Sister',
//             productPrice: '27.12'
//         },

//         Product4:

//         {
//             productImg: require('../assets/Images/book4.jpg'),
//             productTitle: 'The Waiting',
//             productPrice: '27.12'
//         },
//     },
//     {
//         image: require('../assets/Images/Author2.png'),
//         designation: 'Novelist',
//         name: 'Smith',
//         ratingStars: 4,
//         rating: '(4.0)',
//         about: 'Smith is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

//         Product1:

//         {
//             productImg: require('../assets/Images/book.jpg'),
//             productTitle: 'The da vinci Code',
//             productPrice: '19.99'
//         },

//         Product2:

//         {
//             productImg: require('../assets/Images/book1.png'),
//             productTitle: 'Carrie Fisher',
//             productPrice: '27.12'
//         },

//         Product3:

//         {
//             productImg: require('../assets/Images/book3.jpg'),
//             productTitle: 'The Good Sister',
//             productPrice: '27.12'
//         },

//         Product4:

//         {
//             productImg: require('../assets/Images/book4.jpg'),
//             productTitle: 'The Waiting',
//             productPrice: '27.12'
//         },
//     },
//     {
//         image: require('../assets/Images/Author3.png'),
//         designation: 'Novelist',
//         name: 'John Lee',
//         ratingStars: 4,
//         rating: '(4.0)',
//         about: 'Lee is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

//         Product1:

//         {
//             productImg: require('../assets/Images/book.jpg'),
//             productTitle: 'The da vinci Code',
//             productPrice: '19.99'
//         },

//         Product2:

//         {
//             productImg: require('../assets/Images/book1.png'),
//             productTitle: 'Carrie Fisher',
//             productPrice: '27.12'
//         },

//         Product3:

//         {
//             productImg: require('../assets/Images/book3.jpg'),
//             productTitle: 'The Good Sister',
//             productPrice: '27.12'
//         },

//         Product4:

//         {
//             productImg: require('../assets/Images/book4.jpg'),
//             productTitle: 'The Waiting',
//             productPrice: '27.12'
//         },
//     },
//     {
//         image: require('../assets/Images/Author3.png'),
//         designation: 'Novelist',
//         name: 'Steve',
//         ratingStars: 4,
//         rating: '(4.0)',
//         about: 'Steve is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

//         Product1:

//         {
//             productImg: require('../assets/Images/book.jpg'),
//             productTitle: 'The da vinci Code',
//             productPrice: '19.99'
//         },

//         Product2:

//         {
//             productImg: require('../assets/Images/book1.png'),
//             productTitle: 'Carrie Fisher',
//             productPrice: '27.12'
//         },

//         Product3:

//         {
//             productImg: require('../assets/Images/book3.jpg'),
//             productTitle: 'The Good Sister',
//             productPrice: '27.12'
//         },

//         Product4:

//         {
//             productImg: require('../assets/Images/book4.jpg'),
//             productTitle: 'The Waiting',
//             productPrice: '27.12'
//         },
//     },
// ]

const AuthorInnerPage = ({ route }) => {
    const navigation = useNavigation()
    const { item } = route.params;
    // console.log(item)
    return (
        <ScrollView style={{ flex: 1, marginHorizontal: 24 }} showsVerticalScrollIndicator={false}>
            {/* home app bar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 23, }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 108 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '800', textAlign: 'center' }}>Authors</Text>
                </View>
            </View>

            <View style={{ alignItems: 'center', marginTop: 25 }}>
                <Image style={{ width: 124, height: 124, borderRadius: 62 }} source={({uri:item.Image})} />
                <Text style={{ fontSize: 16, color: 'black', marginTop: 7 }}>{item.Designation}</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 7 }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{item.Name}</Text>
            </View>

            <View style={{ flexDirection: 'row', marginRight: 0, alignSelf: 'center', marginTop: 0, alignItems: 'center' }}>


                <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center' }}>
                    {
                        item.Rating == 1 ?
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/Star.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/Star.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/Star.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/Star.png')} />
                            </View>
                            :
                            null
                    }
                    {
                        item.Rating == 2 ?
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/Star.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/Star.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/Star.png')} />
                            </View>
                            :
                            null
                    }
                    {
                        item.Rating == 3 ?
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/Star.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/Star.png')} />
                            </View>
                            :
                            null
                    }
                    {
                        item.Rating == 4 ?
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/Star.png')} />
                            </View>
                            :
                            null
                    }
                    {
                        item.Rating == 5 ?
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ width: 27, height: 27, marginRight: 3 }} source={require('../assets/Icons/StarYellow.png')} />
                            </View>
                            :
                            null
                    }

                    {/* <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/Star.png')} /> */}
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '700', marginLeft: 4 }}>{item.rating}</Text>
                </View>
                {/* <Image style={{ width: 23, height: 23 }} source={require('../assets/Icons/StarYellow.png')} />
                <Image style={{ width: 23, height: 23 }} source={require('../assets/Icons/StarYellow.png')} />
                <Image style={{ width: 23, height: 23 }} source={require('../assets/Icons/StarYellow.png')} />
                <Image style={{ width: 23, height: 23 }} source={require('../assets/Icons/StarYellow.png')} />
                <Image style={{ width: 23, height: 23 }} source={require('../assets/Icons/Star.png')} /> */}
                {/* <Text style={{ fontSize: 16, color: 'black', fontWeight: '700' }}>{item.rating}</Text> */}
            </View>

            <View style={{ marginTop: 15, }}>
                <Text style={{ fontSize: 18, color: 'black', fontWeight: '800' }}>About</Text>
            </View>

            <View style={{ marginTop: 8, }}>
                <Text style={{ fontSize: 15, textAlign: 'justify', color:'grey' }}>
                    {item.About}
                </Text>
            </View>

            <View style={{  marginTop: 10 }}>
                <Text style={{ fontSize: 18, color: 'black', fontWeight: '800' }}>
                    Products
                </Text>
            </View>


            {/* <FlatList
                data={authorObjects}
                horizontal
                // numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={itemsss => itemsss.id}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={{ marginHorizontal: 24, marginTop: 10, marginBottom: 10 }}
                            onPress={() => { }}
                        >

                        </TouchableOpacity>
                    )
                }}
            /> */}



            <View style={{ flexDirection: 'row', columnGap: 0,justifyContent:'space-between' }}>
                <View style={{  marginTop: 14 }}>
                    <View >
                        <Image style={{ width: 150, height: 175, resizeMode: 'stretch', borderRadius: 12 }} source={require('../assets/Images/book.jpg')} />
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>
                            Zombie Spacesuit
                        </Text>
                    </View>
                    <View style={{ marginTop: 4 }}>
                        <Text style={{ color: '#54408C', fontSize: 15, fontWeight: '700' }}>
                            $19.99
                        </Text>
                    </View>
                </View>


                <View style={{ marginLeft: 0, marginTop: 14 }}>
                    <View >
                        <Image style={{ width: 150, height: 175, resizeMode: 'stretch', borderRadius: 12 }} source={require('../assets/Images/book3.jpg')} />
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>
                            Zombie Spacesuit
                        </Text>
                    </View>
                    <View style={{ marginTop: 4 }}>
                        <Text style={{ color: '#54408C', fontSize: 15, fontWeight: '700' }}>
                            $19.99
                        </Text>
                    </View>
                </View>
            </View>


            <View style={{ flexDirection: 'row', columnGap: 5, justifyContent:'space-between' }}>
                <View style={{marginTop: 14 }}>
                    <View >
                        <Image style={{ width: 150, height: 175, resizeMode: 'stretch', borderRadius: 12 }} source={require('../assets/Images/book1.png')} />
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>
                            Zombie Spacesuit
                        </Text>
                    </View>
                    <View style={{ marginTop: 4 }}>
                        <Text style={{ color: '#54408C', fontSize: 15, fontWeight: '700' }}>
                            $19.99
                        </Text>
                    </View>
                </View>


                <View style={{ marginLeft: 0, marginTop: 14, marginBottom: 30 }}>
                    <View >
                        <Image style={{ width: 150, height: 175, resizeMode: 'stretch', borderRadius: 12 }} source={require('../assets/Images/book4.jpg')} />
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>
                            Zombie Spacesuit
                        </Text>
                    </View>
                    <View style={{ marginTop: 4 }}>
                        <Text style={{ color: '#54408C', fontSize: 15, fontWeight: '700' }}>
                            $19.99
                        </Text>
                    </View>
                </View>
            </View>



        </ScrollView>
    )
}

export default AuthorInnerPage

const styles = StyleSheet.create({})