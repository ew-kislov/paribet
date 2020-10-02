import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Text } from '../text';
import { Font } from '../../../style';

export const PrimaryButton = ({ onPress, children, style, loading }) =>
    <TouchableOpacity style={style} onPress={onPress} disabled={loading}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={loading ? ['#c0c0c0', '#c0c0c0'] : ['#E0C3FC', '#8EC5FC']} style={styles.button}>
            <Text size={18} font={Font.Regular} color='#FFFFFF' style={{ textTransform: 'uppercase' }}>{children}</Text>
        </LinearGradient>
    </TouchableOpacity>

const styles = StyleSheet.create({
    button: {
        height: 48,
        borderRadius: 8,
        marginHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
