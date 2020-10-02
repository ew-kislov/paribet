import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { TitledPanel, Text } from "../basic";
import { Font } from '../../style';

export const MatchBetPanel = ({ match, homeWin, draw, awayWin, style }) =>
    <TitledPanel isCenter={true} title='Выберите исходы событий' style={[{ height: 360, justifyContent: 'space-between' }, style]}>
        <View style={styles.body}>
            <Text size={15} font={Font.Regular} color='#A6A6A6' style={{ textAlign: 'center' }}>{match.tournament}</Text>
            <View style={{ marginTop: 30 }}>
                <View style={styles.matchInfo}>
                    <View style={styles.matchTeam}>
                        <Image source={match.homeLogo ? { uri: 'http://betteam.tmweb.ru/img/logo_teams/' + match.homeLogo } : require('../../../assets/images/team_mock.png')} style={styles.logo} />
                        <Text size={15} font={Font.Regular} color='#000000' style={{ textAlign: 'center' }}>{match.homeName}</Text>
                    </View>
                    <View style={styles.timeView}>
                        <Text size={13} font={Font.Regular} color='#888888'>{match.startDay}</Text>
                        <Text size={16} font={Font.Bold} color='#322E2E' style={{ marginTop: 3 }}>{match.startTime}</Text>
                    </View>
                    <View style={styles.matchTeam}>
                        <Image source={match.awayLogo ? { uri: 'http://betteam.tmweb.ru/img/logo_teams/' + match.awayLogo } : require('../../../assets/images/team_mock.png')} style={styles.logo} />
                        <Text size={15} font={Font.Regular} color='#000000' style={{ textAlign: 'center' }}>{match.awayName}</Text>
                    </View>
                </View>
                <View style={styles.betChoice}>
                    <TouchableOpacity onPress={homeWin} style={styles.homeWinView}>
                        <Text size={12} font={Font.Regular} color='#6EB3F2' style={{ textTransform: 'uppercase' }}>Победа 1</Text>
                        <Image source={require('../../../assets/images/home_win.png')} style={styles.horizontalArrow} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={draw} style={{ alignItems: 'center', marginTop: 18 }}>
                        <Text size={12} font={Font.Regular} color='#6EB3F2' style={{ textTransform: 'uppercase' }}>Ничья</Text>
                        <Image source={require('../../../assets/images/draw.png')} style={styles.verticalArrow} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={awayWin} style={styles.awayWinView}>
                        <Text size={12} font={Font.Regular} color='#6EB3F2' style={{ textTransform: 'uppercase' }}>Победа 2</Text>
                        <Image source={require('../../../assets/images/away_win.png')} style={styles.horizontalArrow} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </TitledPanel>

const styles = StyleSheet.create({
    body: {
        paddingVertical: 15,
        paddingHorizontal: 40
    },
    matchInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    matchTeam: {
        alignItems: 'center',
        flex: 1,
        flexGrow: 2
    },
    timeView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    logo: {
        width: 86,
        height: 86,
        marginBottom: 5
    },
    betChoice: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    homeWinView: {
        alignItems: 'flex-end',
    },
    awayWinView: {
        alignItems: 'flex-start',
    },
    horizontalArrow: {
        width: 79,
        height: 11,
        marginTop: 3
    },
    verticalArrow: {
        height: 17,
        width: 13,
        marginTop: 6
    }
});