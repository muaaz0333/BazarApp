import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const VerificationPhone = ({ route }) => {

    const [otpInput, setOtpInput] = useState("")
    const submitOTP = () => {
        try {
            navigation.navigate("SuccessVerification")
        } catch (err) {
            console.log(err);
        }
    }








    const { phone } = route.params;
    // console.log(itm)
    const navigation = useNavigation();
    const firstInput = useRef()
    const secondInput = useRef()
    const thirdInput = useRef()
    const fourthInput = useRef()
    return (
        <View style={{ flex: 1, margin: 24 }}>
            <View style={{ alignSelf: 'flex-start', marginTop: 13 }}>
                <TouchableOpacity style={styles.skiptxt} onPress={() => { navigation.navigate("EnterPhone") }}>
                    <Image source={require('../assets/Icons/Arrow_Left.png')} />
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 23, color: "#121212", fontWeight: 'bold', marginTop: 29, lineHeight: 27, }}>Verification Phone</Text>
                <Text style={{ marginVertical: 8, fontSize: 15, color: 'grey', paddingHorizontal: 24, textAlign: 'center' }}>Please Enter the code we just sent to phone number {phone} </Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 40, alignSelf: 'center' }}>
                <TextInput
                    ref={firstInput}
                    inputMode='numeric'
                    maxLength={1}
                    onChangeText={(text) => {
                        text && secondInput.current.focus()
                    }}
                    style={{ backgroundColor: '#E5E7E9', paddingHorizontal: 18, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: '#54408C', fontSize: 23, fontWeight: 'bold', color: 'black' }}
                />
                <TextInput
                    ref={secondInput}
                    inputMode='numeric'
                    maxLength={1}
                    onChangeText={(text) => {
                        text ? thirdInput.current.focus() : firstInput.current.focus()
                    }}
                    style={{ backgroundColor: '#E5E7E9', marginLeft: 10, paddingHorizontal: 18, paddingVertical: 15, fontSize: 23, fontWeight: 'bold', borderWidth: 1, borderRadius: 8, borderColor: '#54408C', color: 'black' }}
                />
                <TextInput
                    ref={thirdInput}
                    inputMode='numeric'
                    maxLength={1}
                    onChangeText={(text) => {
                        text ? fourthInput.current.focus() : secondInput.current.focus()
                    }}
                    style={{ backgroundColor: '#E5E7E9', marginLeft: 10, paddingHorizontal: 18, paddingVertical: 15, fontSize: 23, fontWeight: 'bold', borderWidth: 1, borderRadius: 8, borderColor: '#54408C', color: 'black' }}
                />
                <TextInput
                    ref={fourthInput}
                    inputMode='numeric'
                    maxLength={1}
                    onChangeText={(text) => {
                        !text && thirdInput.current.focus()
                    }}
                    style={{ backgroundColor: '#E5E7E9', marginLeft: 10, paddingHorizontal: 18, paddingVertical: 15, fontSize: 23, fontWeight: 'bold', borderWidth: 1, borderRadius: 8, borderColor: '#54408C', color: 'black' }}
                />
            </View>

            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 24 }}>
                <Text style={{ color: 'grey', fontWeight: '600' }}>If you didn't receive a code?</Text>
                <TouchableOpacity onPress={() => { Alert.alert("Your code is", "3545") }}>
                    <Text style={{ color: '#54408C', fontWeight: "700" }}> Resend</Text>
                </TouchableOpacity>

            </View>

            {/* <View style={{ marginTop: 43 }}>
                <TouchableOpacity onPress={()=>navigation.navigate("SuccessVerification")}>
                    <Text style={styles.btncontinue}>Continue</Text>
                </TouchableOpacity>
            </View> */}
            <View style={{ marginTop: 43 }}>
                <TouchableOpacity onPress={() => submitOTP()}>
                    <Text style={styles.btncontinue}>Continue</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

export default VerificationPhone

const styles = StyleSheet.create({
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
})