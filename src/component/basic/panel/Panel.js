import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Panel = ({ children, style }) =>
    <View style={[styles.panel, style]}>{children}</View>

const styles = StyleSheet.create({
    panel: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 2
    }
});