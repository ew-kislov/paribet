import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { Text } from '../basic';
import { Font } from '../../style';

export const MatchProposal = ({ match }) =>
    <View style={styles.view}>
        <Text size={13} font={Font.Regular} color='#A6A6A6'>{match.tournament}</Text>
        <View style={styles.participantsView}>
            <View>
                <View style={styles.row}>
                    {
                        match.homeLogo ? <Image source={{ uri: 'http://betteam.tmweb.ru/img/logo_teams/' + match.homeLogo }} style={styles.logo} /> :
                            <Image source={require('../../../assets/images/team_mock.png')} style={styles.logo} />
                    }
                    <Text size={15} font={Font.Regular} color='#323232'>{match.homeName}</Text>
                </View>
                <View style={[styles.row, { marginTop: 10 }]}>
                    {
                        match.awayLogo ? <Image source={{ uri: 'http://betteam.tmweb.ru/img/logo_teams/' + match.awayLogo }} style={styles.logo} /> :
                            <Image source={require('../../../assets/images/team_mock.png')} style={styles.logo} />
                    }
                    <Text size={15} font={Font.Regular} color='#323232'>{match.awayName}</Text>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Text size={13} font={Font.Regular} color='#888888'>{match.startDay}</Text>
                <Text size={16} font={Font.Bold} color='#322E2E' style={{ marginTop: 3 }}>{match.startTime}</Text>
            </View>
        </View>
    </View>

const styles = StyleSheet.create({
    view: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6'
    },
    participantsView: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row'
    },
    logo: {
        resizeMode: 'contain',
        width: 24,
        height: 24,
        marginRight: 10
    }
});