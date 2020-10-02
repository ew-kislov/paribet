import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Stepper = ({ step, style, activeColor, inactiveColor }) =>
    <View style={[styles.stepsView, style]}>
        {
            [1, 2, 3, 4, 5].map((value) =>
                <View style={[styles.step, value <= step ? { backgroundColor: activeColor } : { backgroundColor: inactiveColor }]} key={value} />)
        }
    </View>

const styles = StyleSheet.create({
    stepsView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    step: {
        flexGrow: 1,
        marginHorizontal: 2,
        height: 4,
        borderRadius: 7
    }
});