import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import { Text } from '../text';
import { Font } from '../../../style';

export const OutlineButton = ({ onPress, children, style, loading, icon }) =>
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={loading}>
        <Text size={16} font={Font.Regular} color='#6EB3F2' style={{ textTransform: 'uppercase' }}>{children}</Text>
        <View style={{ marginLeft: 8 }}>{icon}</View>
    </TouchableOpacity>

const styles = StyleSheet.create({
    button: {
        height: 48,
        borderRadius: 8,
        marginHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#9DC5FC',
        flexDirection: 'row'
    }
});
