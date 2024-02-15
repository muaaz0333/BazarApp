import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn1 from './components/SignIn1';
import Signup from './components/Signup';
import Onboard from './components/Onboard';
import VerificationEmail from './components/VerificationEmail';
import EnterPhone from './components/EnterPhone';
import VerificationPhone from './components/VerificationPhone';
import SuccessVerification from './components/SuccessVerification';
import Home from './components/Home';
import Vendors from './components/Vendors';
import Authors from './components/Authors';
import AuthorInnerPage from './components/AuthorInnerPage';
import Category from './components/Category';
import CategorySearch from './components/CategorySearch';
import HomeSearch from './components/HomeSearch';
import Profile from './components/Profile';
import Cart from './components/Cart';
import CartNotification from './components/CartNotification';
import HomeNotification from './components/HomeNotification';
import HomeSetLocation from './components/HomeSetLocation';
import CartConfirmOrder from './components/CartConfirmOrder';
import HomeSetMap from './components/HomeSetMap';
import OrderStatus from './components/OrderStatus';
import OrderStatusRating from './components/OrderStatusRating';
import DeliveryNotification from './components/DeliveryNotification';
import NewsPromosNotification from './components/NewsPromosNotification';
import MyAccount from './components/MyAccount';
import YourFavorites from './components/YourFavorites';
import OrderHistory from './components/OrderHistory';
import HelpCenter from './components/HelpCenter';
import Offers from './components/Offers';
import DetailNewsPromos from './components/DetailNewsPromos';
import Books from './components/Books';

// import SplashScreen from 'react-native-splash-screen'


const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {

    }, 1000)


    SplashScreen.hide();
  }, []);
  return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Onboard" component={Onboard} options={{ headerShown: false }} />

          <Stack.Screen name="SignIn1" component={SignIn1} options={{ headerShown: false }} />

          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />

          <Stack.Screen name="VerificationEmail" component={VerificationEmail} options={{ headerShown: false }} />

          <Stack.Screen name="EnterPhone" component={EnterPhone} options={{ headerShown: false }} />

          <Stack.Screen name="VerificationPhone" component={VerificationPhone} options={{ headerShown: false }} />

          <Stack.Screen name="SuccessVerification" component={SuccessVerification} options={{ headerShown: false }} />

          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

          <Stack.Screen name="Vendors" component={Vendors} options={{ headerShown: false }} />

          <Stack.Screen name="Authors" component={Authors} options={{ headerShown: false }} />

          <Stack.Screen name="AuthorInnerPage" component={AuthorInnerPage} options={{ headerShown: false }} />

          <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />

          <Stack.Screen name="CategorySearch" component={CategorySearch} options={{ headerShown: false }} />

          <Stack.Screen name="HomeSearch" component={HomeSearch} options={{ headerShown: false }} />

          <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />

          <Stack.Screen name="CartNotification" component={CartNotification} options={{ headerShown: false }} />

          <Stack.Screen name="HomeNotification" component={HomeNotification} options={{ headerShown: false }} />

          <Stack.Screen name="CartConfirmOrder" component={CartConfirmOrder} options={{ headerShown: false }} />

          <Stack.Screen name="HomeSetLocation" component={HomeSetLocation} options={{ headerShown: false }} />

          <Stack.Screen name="OrderStatus" component={OrderStatus} options={{ headerShown: false }} />

          <Stack.Screen name="OrderStatusRating" component={OrderStatusRating} options={{ headerShown: false }} />

          <Stack.Screen name="DeliveryNotification" component={DeliveryNotification} options={{ headerShown: false }} />

          <Stack.Screen name="NewsPromosNotification" component={NewsPromosNotification} options={{ headerShown: false }} />

          <Stack.Screen name="DetailNewsPromos" component={DetailNewsPromos} options={{ headerShown: false }} />

          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

          <Stack.Screen name="MyAccount" component={MyAccount} options={{ headerShown: false }} />

          <Stack.Screen name="HomeSetMap" component={HomeSetMap} options={{ headerShown: false }} />

          <Stack.Screen name="YourFavorites" component={YourFavorites} options={{ headerShown: false }} />

          <Stack.Screen name="OrderHistory" component={OrderHistory} options={{ headerShown: false }} />

          <Stack.Screen name="HelpCenter" component={HelpCenter} options={{ headerShown: false }} />

          <Stack.Screen name="Offers" component={Offers} options={{ headerShown: false }} />

          <Stack.Screen name="Books" component={Books} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})