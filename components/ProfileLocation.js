import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, Alert, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


const ProfileLocation = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            {/* Appbar */}
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Add</Text>
            </View>


            <View style={{ marginHorizontal: 24, marginTop: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#54408c', fontWeight: '700', fontSize: 18 }}>🏠 Home</Text>
                    <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate("HomeSetLocation")
                    }}>
                        <Image style={{ tintColor: 'black', height: 20, width: 20 }} source={require('../assets/Icons/Plus.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{marginHorizontal:24, marginTop:16,borderWidth:1.5,padding:10,borderRadius:10,flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:16, color:'black', fontWeight:'700'}}>City:  </Text>
                    <Text style={{fontSize:16, color:'black', fontWeight:'400'}}>Lahore</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{color:'red'}}>🗑</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginHorizontal:24, marginTop:16,borderWidth:1.5,padding:10,borderRadius:10,flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:16, color:'black', fontWeight:'700'}}>City:  </Text>
                    <Text style={{fontSize:16, color:'black', fontWeight:'400'}}>AJK</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{color:'red'}}>🗑</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginHorizontal:24, marginTop:16,borderWidth:1.5,padding:10,borderRadius:10,flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:16, color:'black', fontWeight:'700'}}>City:  </Text>
                    <Text style={{fontSize:16, color:'black', fontWeight:'400'}}>Mirpur</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{color:'red'}}>🗑</Text>
                </TouchableOpacity>
            </View>



            {/*bottombar  */}

            <View View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 5, paddingVertical: 6 }}>
                <TouchableOpacity onPress={() => { navigation.navigate("HomeSetLocation") }}>
                    <Text style={styles.order}>
                        Add Address
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ProfileLocation

const styles = StyleSheet.create({
    order: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        backgroundColor: '#54408C',
        paddingVertical: 12,
        borderRadius: 30,
        fontWeight: '600',
        marginHorizontal: 13,

    },
})