import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const MyAccount = () => {
    const navigation = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true)


    // Image
    const [setImage, setSelectedImage] = useState('');
    const ImagePicker = async () => {

        let options = {
            storageOptions: {
                path: "image"
            }
        }
        launchImageLibrary(options, Response => {
            setSelectedImage(Response.assets[0].uri)
            // console.log(Response.assets[0].uri);

        })

    }

    return (
        <ScrollView>
            <View style={{ flex: 1, marginHorizontal: 24 }}>

                {/* Appbar */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}>
                        <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                    </TouchableOpacity>
                    <View style={{ marginHorizontal: 87 }}>
                        <Text style={{ fontSize: 21, color: 'black', fontWeight: '700' }}>My Account</Text>
                    </View>
                </View>



                {/* Image */}

                <View style={{ width: 110, height: 130, alignItems: 'center', alignSelf: 'center', marginTop: 18 }}>
                    {/* <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={require('../assets/Images/Author7.png')} /> */}

                    <View style={{ backgroundColor: 'white', width: 120, height: 120, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                        {
                            setImage === '' ? <Image source={require("../assets/Images/dummyImg.jpg")}
                                style={{ width: 110, height: 110, borderRadius: 50 }}
                            />
                                :
                                <Image source={{ uri: setImage }}
                                    // style={{ height: "100%", width: '100%', borderRadius: 100 }}
                                    style={{ width: 100, height: 100, borderRadius: 50 }}
                                />
                        }
                    </View>

                    <View style={{ marginTop: 16 }}>
                        <TouchableOpacity onPress={() => { { ImagePicker() } }}>
                            <Text style={{ color: '#54408C', fontSize: 15, fontWeight: '700' }}>
                                Set Picture
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>




                {/* Input Fields */}

                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: '#121212', fontSize: 17, fontWeight: 'bold' }}>
                        Name
                    </Text>
                </View>

                <View>
                    <TextInput
                        placeholder='Anna'
                        placeholderTextColor={'black'}
                        style={{ color: 'black', borderRadius: 10, marginTop: 6, backgroundColor: '#E5E7E9', paddingVertical: 12, paddingHorizontal: 16, borderWidth: 1, borderColor: 'silver', fontSize: 16, fontWeight: '500' }}
                    />
                </View>



                <View style={{ marginTop: 16 }}>
                    <Text style={{ color: '#121212', fontSize: 17, fontWeight: 'bold' }}>
                        Email
                    </Text>
                </View>

                <View>
                    <TextInput
                        placeholder='anna@gmail.com'
                        placeholderTextColor={'black'}
                        style={{ color: 'black', borderRadius: 10, marginTop: 6, backgroundColor: '#E5E7E9', paddingVertical: 12, paddingHorizontal: 16, borderWidth: 1, borderColor: 'silver', fontSize: 16, fontWeight: '500' }}
                    />
                </View>



                <View style={{ marginTop: 16, }}>
                    <Text style={{ color: '#121212', fontSize: 17, fontWeight: 'bold', }}>
                        Phone Number
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E5E7E9', borderRadius: 10, marginTop: 6, borderWidth: 1, borderColor: 'silver' }}>
                        <Image style={{ marginHorizontal: 12, marginVertical: 12, width: 19, height: 19 }} source={require('../assets/Icons/Call.png')} />
                        <TextInput placeholder='(+92) 333 4246144 ' placeholderTextColor={'black'} style={{ color: 'black', fontSize: 16, fontWeight: '500' }} inputMode='numeric' />
                    </View>
                </View>

                <View style={{ marginTop: 16 }}>
                    <Text style={{ color: '#121212', fontSize: 17, fontWeight: 'bold' }}>
                        Password
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 10, marginTop: 6, backgroundColor: '#E5E7E9', paddingVertical: 3, paddingHorizontal: 16, borderWidth: 1, borderColor: 'silver' }}>
                    <TextInput
                        placeholder='......'
                        placeholderTextColor={'black'}
                        secureTextEntry={isSecureEntry}
                        style={{ flex: 1, color: 'black', fontSize: 16, fontWeight: '500' }}

                    />
                    <TouchableOpacity onPress={() => setIsSecureEntry((prev) => !prev)}>
                        {
                            isSecureEntry ? <Image source={require('../assets/Icons/Phide.png')} /> : <Image source={require('../assets/Icons/Pshow.png')} />
                        }
                    </TouchableOpacity>
                </View>



                <View style={{ marginTop: 25 }}>
                    <TouchableOpacity onPress={() => { }}><Text style={styles.btncontinue} >Save Changes</Text></TouchableOpacity>
                </View>


            </View>
        </ScrollView>
    )
}

export default MyAccount

const styles = StyleSheet.create({
    btncontinue: {
        backgroundColor: '#54408C',
        textAlign: 'center',
        // marginLeft: 24,
        // marginRight: 24,
        color: 'white',
        borderRadius: 35,
        fontSize: 19,
        paddingVertical: 12,
        fontWeight: '600',
        marginBottom: 28
    },
})