import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
// import { Validator } from 'react';


const Signup = () => {
    const [visible, setVisible] = useState(false);

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")




    const validDataLogin = async () => {
        // { !name ? setNameError(true) : setNameError(false) }
        { !email ? setEmailError(true) : setEmailError(false) }
        { !password ? setPasswordError(true) : setPasswordError(false) }
        if ( !email || !password ) { return; }
        setVisible(true)

        auth().createUserWithEmailAndPassword(email, password).then(() => {
            // Alert.alert("User Created with credentials\n" + email, fPassword + "\n\n Please Login")
            navigation.navigate("VerificationEmail", {email: email})
        })
            .catch((err) => {
                console.log(err.code)
                Alert.alert(err.code)
            })

      }






    

    const signupTestFn = () => {
       
    }



    const navigation = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    // const [password, setPassword] = useState('');
    // const [suggestions, setSuggestions] = useState([]);
    // const [strength, setStrength] = useState('');
    // const validatePassword = (input) => {
    //     let newSuggestions = [];
    //     if (input.length < 8) {
    //         newSuggestions.push('Minimum 8 Characters')
    //     }
    //     if (!/\d/.test(input)) {
    //         newSuggestions.push('Atleast 1 number (1-9)')
    //     }

    //     if (!/[A-Z]/.test(input) || !/[a-z]/.test(input)) {
    //         newSuggestions.push('Atleast lowercase or uppercase letters')
    //     }

    //     // if (!/[^A-Za-z0-9]/.test(input)) {
    //     //     newSuggestions.push('Include at least one special character')


    //     setSuggestions(newSuggestions);

    //     // Determine password strength based on suggestions 
    //     if (newSuggestions.length === 0) {
    //         setStrength('Very Strong');
    //     }
    //     else if (newSuggestions.length <= 1) {
    //         setStrength('Strong')
    //     }
    //     else if (newSuggestions.length <= 2) {
    //         setStrength('Moderate')
    //     }
    //     else if (newSuggestions.length <= 3) {
    //         setStrength('Weak')
    //     }
    //     else {
    //         setStrength('Too Weak')
    //     }
    // }

    return (
        <View style={{ flex: 1, margin: 20, padding: 10, }}>
            <View style={{ alignSelf: 'flex-start', marginTop: 13 }}>
                <TouchableOpacity style={styles.skiptxt} onPress={() => { }}>
                    <Image source={require('../assets/Icons/Arrow_Left.png')} />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{ fontSize: 23, color: "#121212", fontWeight: 'bold', marginTop: 25, lineHeight: 27 }}>
                    Sign Up
                </Text>
            </View>
            <View>
                <Text style={{ marginTop: 8, lineHeight: 24, fontSize: 15, color: 'grey' }}>Create account and choose favorite menu</Text>
            </View>

            <View>
                <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', marginTop: 26 }}>
                    Name
                </Text>
            </View>
            <View>
                <TextInput
                    placeholder='Your Name'
                    inputMode='text'
                    placeholderTextColor={"grey"}
                    style={{ color: 'black', borderRadius: 10, marginTop: 6, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                />
            </View>
            {/* {nameError ? <Text style={styles.error}>Please enter name.</Text> : null} */}

            <View>
                <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', marginTop: 16 }}>
                    Email
                </Text>
            </View>

            <View>
                <TextInput
                    inputMode='email'
                    placeholder='Your Email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor={"grey"}
                    style={{ color: 'black', borderRadius: 10, marginTop: 6, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                />
            </View>
            {emailError ? <Text style={styles.error}>Please enter email.</Text> : null}

            <View>
                <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', marginTop: 16 }}>
                    Password
                </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 10, marginTop: 6, backgroundColor: '#FAFAFA', paddingVertical: 3, paddingHorizontal: 16 }}>
                <TextInput
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

            {/* <View style={{ marginTop: 12 }}> */}
                {/* <Text style={styles.strengthText}>
                    Password Strength: {strength}
                </Text> */}
                {/* <Text style={styles.suggestionsText}>
                    {suggestions.map((suggestion, index) => (
                        <Text key={index}>
                            {suggestion}{'\n'}
                        </Text>))}
                </Text> */}
                {/* <View style={styles.strengthMeter}> */}
                {/* <View style={{
                        width: `${(strength === 'Very Strong' ? 100 :
                            (strength === 'Strong' ? 75 :
                                (strength === 'Moderate' ? 50 :
                                    (strength === 'Weak' ? 25 : 0))))}%`,
                        height: 20,
                        backgroundColor: strength === 'Too Weak' ? 'red' :
                            (strength === 'Weak' ? 'orange' :
                                (strength === 'Moderate' ? 'yellow' :
                                    (strength === 'Strong' ? 'green' : 'limegreen')))
                    }}>
                    </View> */}
                {/* </View> */}
            {/* </View> */}


            <View style={{ marginTop: 12 }}>
                <TouchableOpacity onPress={validDataLogin}><Text style={styles.btncontinue} >Register</Text></TouchableOpacity>
            </View>

            <View style={{ marginTop: 22 }}>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Text style={{ color: 'grey', fontSize: 15, fontWeight: '600' }}>Have an account?</Text>
                    <Text style={{ color: '#54408C', fontSize: 15, fontWeight: '700' }} onPress={() => navigation.navigate('SignIn1')}> Sign In</Text>
                </View>
            </View>

            <View style={{ marginTop: 35 }}>
                <Text style={{ textAlign: 'center', color: 'grey', fontSize: 14, fontWeight: '500' }}>
                    By clicking Register, you agree to our
                </Text>
                <Text style={{ textAlign: 'center', color: '#54408C', fontSize: 15, fontWeight: '600' }}>
                    Terms and Data Policy
                </Text>
            </View>


        </View>
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