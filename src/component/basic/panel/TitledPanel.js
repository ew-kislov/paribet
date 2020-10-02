import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../text';
import { Font } from '../../../style';
import { Panel } from './Panel';

export const TitledPanel = ({ children, logo, title, isCenter, style }) =>
    <Panel style={style}>
        <View style={[styles.title, { justifyContent: isCenter ? 'center' : 'flex-start' }]}>
            {logo}
            <Text size={17} color='#202020' font={Font.Bold}>{title}</Text>
        </View>
        <>
            {children}
        </>
    </Panel>

const styles = StyleSheet.create({
    title: {
        height: 48,
        padding: 12,
        backgroundColor: '#F9F9F9',
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }
});