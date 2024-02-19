import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, Alert, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


const ProfileLocation = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            {/* Appbar */}
            <View style={{ alignItems: 'center',marginTop:10 }}>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Add</Text>
            </View>






            {/*bottombar  */}

            <View View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 5, paddingVertical: 6 }}>
                <TouchableOpacity onPress={() => { navigation.navigate("HomeSetLocation") }}>
                    <Text style={styles.order}>
                        Add Payment Method
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