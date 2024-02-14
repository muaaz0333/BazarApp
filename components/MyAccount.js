import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from '@react-native-firebase/auth';
const MyAccount = (props) => {

    const a = props.route.params;
    console.log('MyAccount---------------',a);

    const navigation = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    useEffect(() => {
        fetchUserData();
        loadSelectedImage();
    }, []);

    // Firebase
    const fetchUserData = async () => {
        try {

            // const currentUser = firebase.auth().currentUser;
            // if (currentUser) {
            //     const userId = currentUser.uid;
            //     console.log('User ID:', userId); 
            //     const userDoc = await firebase.firestore().collection('Users_Profile').doc(currentUser.uid).get();
            //     if (userDoc.exists) {
            //         const userData = userDoc.data();
            //         setUserData(userData);
            //     } else {
            //         Alert.alert('User data not found');
            //     }
            // } else {
                // Alert.alert('User not logged in');
            // }


            const userCollection = firebase.firestore().collection('Users_Profile');
            const userQuerySnapshot = await userCollection.get();
            if (!userQuerySnapshot.empty) {
                const userData = userQuerySnapshot.docs[0].data();
                setUserData(userData);
            } else {
                Alert.alert('User data not found');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    // image with async storage
    const loadSelectedImage = async () => {
        try {
            const value = await AsyncStorage.getItem('selectedImage');
            if (value !== null) {
                setSelectedImage(value);
            }
        } catch (error) {
            console.error('Error loading selected image from AsyncStorage:', error);
        }
    };

    const saveSelectedImage = async (imageUri) => {
        try {
            await AsyncStorage.setItem('selectedImage', imageUri);
        } catch (error) {
            console.error('Error saving selected image to AsyncStorage:', error);
        }
    };

    const pickImage = () => {
        launchImageLibrary({}, (response) => {
            if (!response.didCancel && !response.errorCode && response.assets.length > 0 && response.assets[0].uri) {
                setSelectedImage(response.assets[0].uri);
                saveSelectedImage(response.assets[0].uri);
            }
        });
    };

    return (
        <ScrollView>
    
            <View style={styles.container}>
                <View style={styles.appBar}>
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                        <Image source={require("../assets/Icons/Arrow_Left.png")} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.title}>My Account</Text>
                </View>

                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={pickImage}>
                        <Image source={selectedImage ? { uri: selectedImage } : require("../assets/Images/dummyImg.jpg")} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pickImage}>
                        <Text style={styles.changePictureText}>Set Picture</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.userDataContainer}>
                    <Text style={styles.label}>Name:</Text>
                    
                    {/* <Text>User Data: {JSON.stringify(userData)}</Text> */}
                    <TextInput
                        style={styles.input}
                        // value={userData.name}
                        value={a.name}
                        // placeholder='name'
                        placeholderTextColor={"grey"}
                        onChangeText={(text) => setUserData({ ...userData, name: text })}
                    />
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        // value={userData.email}
                        value={a.email}
                        placeholderTextColor={"grey"}
                        // placeholder='email'
                        editable={false}
                        onChangeText={(text) => setUserData({ ...userData, email: text })}
                    />
                    <Text style={styles.label}>Phone Number:</Text>
                    <TextInput
                        style={styles.input}
                        // value={userData.phone}
                        value={a.phone}
                        placeholderTextColor={"grey"}
                        // placeholder='phone'
                        onChangeText={(text) => setUserData({ ...userData, phone: text })}
                    />
                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        // secureTextEntry={isSecureEntry}
                        // value={userData.password}
                        value={a.password}
                        placeholderTextColor={"grey"}
                        // placeholder='password'
                        onChangeText={(text) => setUserData({ ...userData, password: text })}
                    />
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate("Profile")}>
                    <Text style={styles.saveButtonText}>Save Changes</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default MyAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25
    },
    icon: {
        tintColor: 'black'
    },
    title: {
        fontSize: 21,
        color: 'black',
        fontWeight: '700',
        marginHorizontal: 87
    },
    imageContainer: {
        width: 110,
        height: 130,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 18
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 55
    },
    changePictureText: {
        color: '#54408C',
        fontSize: 15,
        fontWeight: '700',
        marginTop: 5
    },
    userDataContainer: {
        marginTop: 30
    },
    label: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black'
    },
    input: {
        backgroundColor: '#f8f8f8',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        color: 'black',
        fontSize: 15
    },
    saveButton: {
        backgroundColor: '#54408C',
        alignItems: 'center',
        borderRadius: 35,
        marginTop: 25
    },
    saveButtonText: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 12,
        fontWeight: '600'
    }
});
