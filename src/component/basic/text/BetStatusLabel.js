import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from './Text';
import { Font } from '../../../style';

export const BetStatusLabel = ({ isWaiting, statusId, style, bet }) => {
    let color;

    if (isWaiting) {
        color = '#6EB3F2';
    } else {
        switch (statusId) {
            case 1:
                color = '#5DEA6B';
                break;
            case 2:
                color = '#F44336';
                break;
            default:
                color = '#D1D1D1';
                break;
        }
    }

    return (
        <View style={[styles.containerView, { backgroundColor: color }, style]}>
            <Text size={17} color='#ffffff' font={Font.Bold}>{bet || 'Ничья'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerView: {
        paddingVertical: 6,
        paddingHorizontal: 18,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start'
    }
});