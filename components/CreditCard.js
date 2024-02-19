import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { CreditCardInput, LiteCreditCardInput } from 'react-native-credit-card-input';

const USE_LITE_CREDIT_CARD_INPUT = false;

const CreditCard = () => {

    _onChange = formData => {
        console.log(JSON.stringify(formData, null, " "))
    };

    _onFocus = field => {
        console.log(field)
    }

    return (
        <View style={{ marginTop: 60 }}>
            {
                USE_LITE_CREDIT_CARD_INPUT ?
                    (<LiteCreditCardInput
                        onChange={this._onChange}
                        onFocus={this._onFocus}
                    />)
                    :
                    (<CreditCardInput
                        requiresName
                        requiresPostalCode
                        onChange={this._onChange}
                        onFocus={this._onFocus}
                    />)
            }
        </View>
    )

}

export default CreditCard

const styles = StyleSheet.create({})