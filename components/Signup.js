import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert, ScrollView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import auth, { firebase } from '@react-native-firebase/auth';
// import { Validator } from 'react';
import uuid from 'react-native-uuid'
import firestore from '@react-native-firebase/firestore';
import { doc, setDoc } from "@react-native-firebase/firestore"

const Signup = () => {

    const [visible, setVisible] = useState(false);

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")

    async function dataStore() {
        const userId = uuid.v4();
        firestore()
            .collection('Users_Profile')
            .doc(userId)
            .set({
                name: name,
                email: email,
                phone: phone,
                password: password,
                userId: userId,
                cart: []
            })
            .then(() => {
                console.log('User added!');
            });
    }


    const validDataLogin = async () => {
        { !name ? setNameError(true) : setNameError(false) }
        { !phone ? setPhoneError(true) : setPhoneError(false) }
        { !email ? setEmailError(true) : setEmailError(false) }
        { !password ? setPasswordError(true) : setPasswordError(false) }
        if (!email || !password) { return; }
        setVisible(true)

        auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            const user = userCredential.user
            if (user) {
                // navigation.navigate("SignIn1", { name, phone, email: "", password: "" })
                console.log("Navigation params:", { name, phone, email: "", password: "" });

                navigation.navigate("SignIn1", { name, phone, email: "", password: "" })

            }
            dataStore()

            firebase.auth().currentUser.sendEmailVerification()
                .then(() => {
                })
                .catch((error) => {
                    Alert.alert(error)
                })

        })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    // console.log('That email address is already in use!');
                    Alert.alert('That email address is already in use!')
                }

                if (error.code === 'auth/invalid-email') {
                    // console.log('That email address is invalid!');
                    Alert.alert('That email address is invalid!')
                }

                console.error(error);
            })
    }

    const navigation = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true)

    return (
        <ScrollView style={{ flex: 1, marginHorizontal: 20, padding: 10,marginTop:10 }}
            showsVerticalScrollIndicator={false}>
            <View style={{ alignSelf: 'flex-start', marginTop: 13 }}>
                <TouchableOpacity style={styles.skiptxt} onPress={() => { }}>
                    <Image source={require('../assets/Icons/Arrow_Left.png')} />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{ fontSize: 23, color: "#121212", fontWeight: 'bold', marginTop: 18, lineHeight: 27 }}>
                    Sign Up
                </Text>
            </View>
            <View>
                <Text style={{ marginTop: 8, lineHeight: 24, fontSize: 15, color: 'grey' }}>Create account and choose favorite menu</Text>
            </View>

            <View>
                <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', marginTop: 14 }}>
                    Name:
                </Text>
            </View>
            <View>
                <TextInput
                    placeholder='Your Name'
                    inputMode='text'
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholderTextColor={"grey"}
                    style={{ color: 'black', borderRadius: 10, marginTop: 5, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                />
            </View>
            {nameError ? <Text style={styles.error}>Please enter name.</Text> : null}

            <View>
                <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', marginTop: 7 }}>
                    Phone No:
                </Text>
            </View>
            <View>
                <TextInput
                    placeholder='923334246144'
                    inputMode='numeric'
                    value={phone}
                    onChangeText={(text) => setPhone(text)}
                    placeholderTextColor={"grey"}
                    style={{ color: 'black', borderRadius: 10, marginTop: 5, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                />
            </View>
            {phoneError ? <Text style={styles.error}>Please enter valid phone number.</Text> : null}

            <View>
                <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', marginTop: 7 }}>
                    Email:
                </Text>
            </View>

            <View>
                <TextInput
                    autoCapitalize='none'
                    inputMode='email'
                    placeholder='Your Email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor={"grey"}
                    style={{ color: 'black', borderRadius: 10, marginTop: 5, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                />
            </View>
            {emailError ? <Text style={styles.error}>Please enter email.</Text> : null}

            <View>
                <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', marginTop: 7 }}>
                    Password:
                </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 10, marginTop: 5, backgroundColor: '#FAFAFA', paddingVertical: 3, paddingHorizontal: 16 }}>
                <TextInput
                    autoCapitalize='none'
                    placeholder='Your Password'
                    placeholderTextColor={"grey"}
                    secureTextEntry={isSecureEntry}
                    style={{ flex: 1, color: 'black', }}
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        // validatePassword(text)
                        setPassword(text)
                    }}


                />
                <TouchableOpacity onPress={() => setIsSecureEntry((prev) => !prev)}>
                    {
                        isSecureEntry ? <Image source={require('../assets/Icons/Phide.png')} /> : <Image source={require('../assets/Icons/Pshow.png')} />
                    }
                </TouchableOpacity>
            </View>
            {passwordError ? <Text style={styles.error}>Please enter password.</Text> : null}

            <View style={{ marginTop: 12 }}>
                <TouchableOpacity 
                
                onPress={validDataLogin}                
                ><Text style={styles.btncontinue} >Register</Text></TouchableOpacity>
            </View>

            <View style={{ marginTop: 15 }}>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Text style={{ color: 'grey', fontSize: 15, fontWeight: '600' }}>Have an account?</Text>
                    <Text style={{ color: '#54408C', fontSize: 15, fontWeight: '700' }} onPress={() => navigation.navigate('SignIn1')}> Sign In</Text>
                </View>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ textAlign: 'center', color: 'grey', fontSize: 14, fontWeight: '500' }}>
                    By clicking Register, you agree to our
                </Text>
                <Text style={{ textAlign: 'center', color: '#54408C', fontSize: 15, fontWeight: '600' }}>
                    Terms and Data Policy
                </Text>
            </View>


        </ScrollView>
    )
}

export default Signup

const styles = StyleSheet.create({
    skiptxt: {

    },
    btncontinue: {
        backgroundColor: '#54408C',
        textAlign: 'center',
        // marginLeft: 24,
        // marginRight: 24,
        color: 'white',
        borderRadius: 35,
        fontSize: 18,
        paddingVertical: 12,
        fontWeight: '600'
    },
    btngoogle: {
        borderColor: '#E8E8E8',
        color: '#121212',
        textAlign: 'center',
        borderRadius: 40,
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 85,
        borderWidth: 2.5
    },
    error: {
        color: 'red',
        marginHorizontal: 0,
        marginTop: 1,
        fontFamily: 'AirbnbCereal_M',
    },

    strengthText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#007700',
    },
    suggestionsText: {
        color: '#A6A6A6',
    },
    strengthMeter: {
        width: '80%',
        height: 20,
        backgroundColor: '#ccc',
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
})