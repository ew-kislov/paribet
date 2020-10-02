import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from './Text';
import { Font } from '../../../style';

export const BetChoiceLabel = ({ chosen, style, bet }) => {
    return (
        <View style={[styles.containerView, { backgroundColor: chosen ? '#6EB3F2' : '#D1D1D1' }, style]}>
            <Text size={14} color='#ffffff' font={Font.Medium}>{bet || 'Ничья'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerView: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});