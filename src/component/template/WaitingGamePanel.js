import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Panel, Text, RoundImage } from "../basic";
import { Font } from '../../style';

export const WaitingGamePanel = ({ game, username, photo, onPress, style }) =>
    <TouchableOpacity onPress={onPress} style={style}>
        <Panel>
            <View style={styles.header}>
                <Text size={13} font={Font.Regular} color='#000000'>#{game.id}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.row}>
                    <RoundImage url={photo} size={24} border={0} />
                    <Text size={15} font={Font.Regular} color='#323232' style={{ marginLeft: 5 }}>{username}</Text>
                    <Text size={15} font={Font.Regular} color='#969696' style={{ marginLeft: 'auto' }}>Поиск соперника...</Text>
                </View>
            </View>
        </Panel>
    </TouchableOpacity>

const styles = StyleSheet.create({
    header: {
        height: 30,
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5'
    },
    body: {
        padding: 15
    },
    row: {
        flexDirection: 'row'
    }
})