import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import { RoundIcon, Text, RoundImage, ProfileMock } from '../basic';
import { Font } from '../../style';
import { useNavigation } from '@react-navigation/native';

export const UserInfoPanel = ({ userInfo, style, withoutPhoto }) => {
    const navigation = useNavigation();

    let league;
    switch (userInfo.leagueId) {
        case 3:
            league = require('../../../assets/images/league_gold.png');
            break;
        case 2:
            league = require('../../../assets/images/league_silver.png');
            break;
        case 1:
            league = require('../../../assets/images/league_bronze.png');
            break;
        default:
            league = require('../../../assets/images/league_bronze.png');
            break;
    }

    return (
        <View style={[styles.row, style]}>
            <TouchableOpacity onPress={() => navigation.navigate('Rating Navigator', { screen: 'Rating' })} style={styles.row}>
                <View style={styles.iconRow}>
                    <RoundIcon size={42}>
                        <Image source={league} style={{ height: 21, width: 21 }} />
                    </RoundIcon>
                    <Text size={18} color='#ffffff' font={Font.Regular} style={{ marginLeft: 6 }}>{`${userInfo.position || 0}-й`}</Text>
                </View>

                <View style={[styles.iconRow, { marginLeft: 30 }]}>
                    <RoundIcon size={42}>
                        <Image source={require('../../../assets/images/score.png')} style={{ height: 21, width: 21 }} />
                    </RoundIcon>
                    <Text size={18} color='#ffffff' font={Font.Regular} style={{ marginLeft: 6 }}>{`${userInfo.points || 0} очков`}</Text>
                </View>
            </TouchableOpacity>

            {!withoutPhoto &&
                <TouchableOpacity onPress={() => navigation.navigate('Profile Navigator', { screen: 'Profile' })} style={{ marginLeft: 'auto' }}>
                    <RoundImage url={userInfo.photo} size={42} />
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});