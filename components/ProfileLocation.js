import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, Alert, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


const ProfileLocation = () => {
    const navigation = useNavigation();
    const [openModal, setOpenModal] = useState(false)

    return (
        <View style={{ flex: 1 }}>
            {/* Appbar */}
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Address</Text>
            </View>


            <View style={{ marginHorizontal: 24, marginTop: 15, borderWidth: 1.5, padding: 10, borderRadius: 10, borderColor: 'silver' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#54408c', fontWeight: '700', fontSize: 18 }}>🏠 Home</Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'red' }}>🗑</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 8, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '400' }}>House no 61-B, Street 18, Lahore</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '700' }}>Postal Code:  </Text>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '400' }}>54000</Text>
                    </View>
                </View>
            </View>



            <View style={{ marginHorizontal: 24, marginTop: 15, borderWidth: 1.5, padding: 10, borderRadius: 10, borderColor: 'silver' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#54408c', fontWeight: '700', fontSize: 18 }}>🏢 Office</Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'red' }}>🗑</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 8, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '400' }}>Office no 31, Street 3, Green Acres Lahore</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '700' }}>Postal Code:  </Text>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '400' }}>54000</Text>
                    </View>
                </View>
            </View>




            {/*bottombar  */}

            <View View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 5, paddingVertical: 6 }}>
                <TouchableOpacity onPress={() => { setOpenModal(!openModal) }}>
                    <Text style={styles.order}>
                        Add Address
                    </Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={openModal}
                onRequestClose={() => {
                    setOpenModal(!openModal)
                }}
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ flex: 1, backgroundColor: 'white', marginTop: 560, elevation: 10, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
                        <View style={{ marginTop: 16, }}>
                            <View style={{ marginHorizontal: 24 }}>
                                <TouchableOpacity onPress={() => setOpenModal(false)}>
                                    <View style={{ height: 5, width: 56, backgroundColor: 'gray', alignSelf: 'center' }}></View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <View>
                                    <TouchableOpacity onPress={() => { navigation.navigate("HomeSetLocation") }}>
                                        <Text style={styles.order}>
                                            Address For Home
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginTop: 15 }}>
                                    <TouchableOpacity onPress={() => { navigation.navigate("HomeSetLocation") }}>
                                        <Text style={styles.order}>
                                            Address For Office
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginTop: 15 }}>
                                    <TouchableOpacity onPress={() => { navigation.navigate("HomeSetLocation") }}>
                                        <Text style={styles.order}>
                                            Add Custom Address
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </Modal>

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
        marginHorizontal: 24,

    },
})