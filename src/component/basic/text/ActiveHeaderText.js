import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from './Text';
import { Font } from '../../../style';

export const ActiveHeaderText = ({ children, style }) =>
    <View style={style}>
        <Text size={24} font={Font.Bold} color='#202020'>{children}</Text>
        <View style={styles.underline} />
    </View>

const styles = StyleSheet.create({
    underline: {
        width: '100%',
        height: 4,
        backgroundColor: '#6EB3F2',
        borderRadius: 15,
        marginTop: 4
    }
});