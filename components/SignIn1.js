import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
// import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Switch } from 'react-native-switch'
// import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
// import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/FontAwesome'


const SignIn1 = ({route}) => {

  const [visible, setVisible] = useState(false);
  //remember me switch
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validDataLogin = async () => {
    { !email ? setEmailError(true) : setEmailError(false) }
    { !password ? setPasswordError(true) : setPasswordError(false) }
    if (!email || !password) { return; }
    // setVisible(true)

   const userCredential= auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res)
        // Alert.alert('Congratulations', [
        //   { text: 'OK', onPress: () => { } },
        // ]);
        Alert.alert("Login Successful", userCredential.user)
        navigation.navigate("Home",{userData: userCredential.user})
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          // console.log('That email address is already in use!');
          Alert.alert('That email address is already in use!')
      }

      if (err.code === 'auth/invalid-email') {
          // console.log('That email address is invalid!');
          Alert.alert('That email address is invalid!')
      }
      if (err.code === 'auth/invalid-credential') {
          // console.log('That email address is invalid!');
          Alert.alert('Invalid Credential!')
      }
      if (err.code === 'auth/invalid-password') {
          // console.log('That email address is invalid!');
          Alert.alert('Invalid Credential!')
      }
        console.log(err)
        // Alert.alert('404 Not Found', 'Sorry! User not found. Try Again', [
        //   { text: 'OK', onPress: () => { } },
        // ]);
      })








    //firebase
    // firestore().collection('Authors').where('Email', '==', email).get()
    //   .then(
    //     res => {
    //       // console.log(JSON.stringify(res.docs[0].data()));
    //       if (res.docs[0].data().Password == password) {
    //         loginData(res.docs[0].data().Name, res.docs[0].data().email, res.docs[0].data().userId);
    //         navigation.navigate("Home")
    //       } else {
    //         setVisible(false)
    //         Alert.alert('Login Fail', 'Password not match with entered Email. Try Again', [
    //           { text: 'OK', onPress: () => { } },
    //         ]);
    //       }
    //     })
    //   .catch(err => {
    //     setVisible(false)
    //     Alert.alert('404 Not Found', 'Sorry! User not found. Try Again', [
    //       { text: 'OK', onPress: () => { } },
    //     ]);
    //   })
  }

  //save login data in Async storage
  // const loginData = async (name, email, userId) => {
  //   await AsyncStorage.setItem('NAME', name);
  //   await AsyncStorage.setItem('EMAIL', email);
  //   await AsyncStorage.setItem('USERID', userId);
  //   setVisible(false)
  //   setEmail('')
  //   setPassword('')
  //   navigation.navigate("Home")
  // }





  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const loginFn = () => {
  //   auth().signInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       if (email === '' && password === '') {
  //         Alert.alert("Please Enter Email and Password")
  //       }
  //       // console.log(res)
  //       Alert.alert("Logged In")
  //       navigation.navigate("Home")
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       Alert.alert(err.code)
  //     })
  // }

  const navigation = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true)

  

  return (
    <View style={{ flex: 1, margin: 20, padding: 10, }}>
      <View style={{ alignSelf: 'flex-start', marginTop: 13 }}>
        <TouchableOpacity style={styles.skiptxt} onPress={() => { }}>
          <Image source={require('../assets/Icons/Arrow_Left.png')} />
          {/* <Icon name="arrow_back" size={28} color={'black'}/> */}
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{ fontSize: 23, color: "#121212", fontWeight: 'bold', marginTop: 25, lineHeight: 27 }}>
          Welcome Back 👋
          {/* <Image source={require('../assets/Icons/hand.png')} /> */}
        </Text>
      </View>
      <View>
        <Text style={{ marginTop: 8, lineHeight: 24, fontSize: 15, color: 'grey' }}>Sign to your account</Text>
      </View>

      <View>
        <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', marginTop: 26 }}>
          Email
        </Text>
      </View>

      <View>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder='Your Email'
          inputMode='email'
          autoCapitalize='none'
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
          value={password}
          autoCapitalize='none'
          onChangeText={(text) => setPassword(text)}
          placeholder='******'
          placeholderTextColor={"grey"}
          secureTextEntry={isSecureEntry}
          style={{ flex: 1, color: 'black', }}

        />
        {/* <TouchableOpacity
          onPress={toggleShowPassword} >
          <View>
            {
              showPassword ? <Image
                style={{ height: 25, width: 25, marginRight: 10, }}
                source={require("../assets/Icons/Pshow.png")}
              /> : <Image
                style={{ height: 25, width: 25, marginRight: 10, }}
                source={require("../assets/Icons/Phide.png")}
              />
            }
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => setIsSecureEntry((prev) => !prev)}>
          {
            isSecureEntry ? <Image source={require('../assets/Icons/Phide.png')} /> : <Image source={require('../assets/Icons/Pshow.png')} />
          }
        </TouchableOpacity>
      </View>
      {passwordError ? <Text style={styles.error}>Please enter password.</Text> : null}



      {/* remember me button */}
      {/* <View style={styles.optionsContainer}>
        <View style={styles.switchContainer}>
          <Switch
            value={isEnabled}
            onValueChange={toggleSwitch}
            activeText={''} inActiveText={''}
            circleSize={22} barHeight={25}
            circleBorderWidth={0}
            backgroundActive={'#5669FF'} backgroundInactive={'#E4DFDF'}
            circleActiveColor={'#ffffff'} circleInActiveColor={'#ffffff'}
            switchLeftPx={3} switchRightPx={3}
          />
          <Text style={styles.switchText}>Remember Me</Text>
        </View> */}



        {/* <View>
          <TouchableHighlight
            // onPress={() => props.navigation.navigate("ResetPassword")}
            underlayColor={'transparent'}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableHighlight>
        </View> */}
      {/* </View> */}

      {/* <View style={styles.signinContainer}>
        <TouchableOpacity
          onPress={validDataLogin}
          style={styles.btncontinue}
          underlayColor={'transparent'}>
          <View style={styles.signinContent}>
            <Text style={styles.signinText}>Sign in</Text>
            <View style={styles.signinIcon}> */}
      {/* <Image
                style={styles.arrowIcon}
                source={require("../Assets/Icons/RightArrow.png")}
              /> */}
      {/* <Icon name="arrow-right" size={20} color="#900" /> */}
      {/* </View>
          </View>
        </TouchableOpacity>
      </View> */}


      {/* <View>
        <Text style={{ marginTop: 16, color: '#54408C', fontWeight: 'bold', fontSize: 15 }}>Forgot Password?</Text>
      </View> */}

      <View style={{ marginTop: 22 }}>
        <TouchableOpacity onPress={validDataLogin}><Text style={styles.btncontinue} >Login</Text></TouchableOpacity>
      </View>

      <View style={{ marginTop: 22 }}>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={{ color: 'grey', fontSize: 15 }}>Don't have an account?</Text>
          <Text style={{ color: '#54408C', fontSize: 15, fontWeight: 'bold' }} onPress={() => navigation.navigate('Signup')}> Sign Up</Text>
        </View>
      </View>


      <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
        <View style={{ borderBottomWidth: .5, borderBottomColor: 'grey', flex: 1 }}></View>
        <Text style={{ paddingVertical: 10, paddingHorizontal: 7, color: 'grey', fontSize: 15 }}>Or with</Text>
        <View style={{ borderBottomWidth: .5, borderBottomColor: 'grey', flex: 1 }}></View>
      </View>


      <View style={{ marginTop: 13 }}>
        <TouchableOpacity onPress={() => { }}><Text style={styles.btngoogle} ><Image source={require('../assets/Icons/Google.png')} /><Text>    Sign in with Google</Text></Text></TouchableOpacity>
      </View>

      <View style={{ marginTop: 8 }}>
        <TouchableOpacity onPress={() => { }}><Text style={styles.btngoogle} ><Image source={require('../assets/Icons/Apple.png')} /><Text>     Sign in with Apple</Text></Text></TouchableOpacity>
      </View>

    </View>
  )
}

export default SignIn1

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
    fontWeight: '400'
  },
  btngoogle: {
    borderColor: '#E8E8E8',
    color: '#121212',
    textAlign: 'center',
    borderRadius: 40,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderWidth: 2.5
  },
  error: {
    color: 'red',
    marginHorizontal: 0,
    marginTop: 1,
    fontFamily: 'AirbnbCereal_M',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginRight: 0,
    marginLeft: 0,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    marginLeft: 10,
    color: '#000000',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 23,
    fontFamily: 'AirbnbCereal_2'
  },
  forgotText: {
    color: '#120D26',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 23,
    fontFamily: 'AirbnbCereal_M'
  },
  signinButton: {
    backgroundColor: '#5669FF',
    borderRadius: 12,
    shadowColor: 'black',
    elevation: 10,
    shadowOpacity: 1,
  },
  signinContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 19,
  },
  signinText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginLeft: 102,
    fontFamily: 'AirbnbCereal_M'
  },
  signinIcon: {
    height: 30,
    width: 30,
    marginRight: 15,
    marginLeft: 62,
    backgroundColor: '#3D56F0',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinContainer: {
    marginHorizontal: 52,
    marginTop: 36,
  },
})