import React from 'react';
import { View, StyleSheet } from 'react-native';

export const RoundIcon = ({ size, children }) =>
    <View style={[{ width: size, height: size }, styles.roundIcon]}>{children}</View>

const styles = StyleSheet.create({
    roundIcon: {
        borderRadius: 100,
        backgroundColor: '#ffffff38',
        alignItems: 'center',
        justifyContent: 'center'
    }
});