import React from 'react'
import { TextInput as BaseTextInput, StyleSheet } from 'react-native';
import { Font } from '../../../style';

export const TextInput = ({ placeholder, style, onChangeText, secureTextEntry, defaultValue }) =>
    <BaseTextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.input, style]}
        secureTextEntry={secureTextEntry}
        defaultValue={defaultValue}
        placeholderTextColor='#B7B7B7'
    />

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 19,
        paddingVertical: 12,
        borderRadius: 7,
        height: 44,
        borderColor: '#E0E0E0',
        backgroundColor: '#F2F3F5',
        borderWidth: 1,
        fontFamily: Font.Regular,
        color: '#B7B7B7',
        fontSize: 16,
        lineHeight: 20
    }
});