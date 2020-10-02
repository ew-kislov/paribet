import React from 'react';

import { MainLayout, UserInfoPanel, TitledPanel, Text, BetChoiceLabel, PrimaryButton } from '../../component';
import { View, StyleSheet, Image } from 'react-native';
import { Font } from '../../style';

export const ConfirmGame = ({ userMainInfo, newGame, matches, addGame }) =>
    <MainLayout withHeader={true}>
        <UserInfoPanel userInfo={userMainInfo} style={{ marginTop: 25, marginHorizontal: 15 }} />
        <TitledPanel title='Выбранные исходы' style={{ margin: 15 }}>
            {
                newGame.matches && matches.map((match) => <ConfirmMatchSection key={match.id} match={match} oddId={newGame.matches[match.id]} />)
            }
            <PrimaryButton onPress={addGame} style={{ marginVertical: 15 }}>Подтвердить выбор</PrimaryButton>
        </TitledPanel>
    </MainLayout>

const ConfirmMatchSection = ({ match, oddId }) =>
    <View style={styles.body}>
        <Text size={15} font={Font.Regular} color='#A6A6A6' style={{ textAlign: 'center' }}>{match.tournament}</Text>
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

        <View style={styles.oddsPanel}>
            <BetChoiceLabel chosen={oddId === 1} bet='Победа 1' style={{ marginRight: 10 }} />
            <BetChoiceLabel chosen={oddId === 3} bet='Ничья' />
            <BetChoiceLabel chosen={oddId === 2} bet='Победа 2' style={{ marginLeft: 10 }} />
        </View>
    </View>

const styles = StyleSheet.create({
    body: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5'
    },
    matchInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        paddingHorizontal: 40,
    },
    matchTeam: {
        alignItems: 'center',
        flexWrap: 'wrap',
        flexGrow: 1,
        flex: 1,
        textAlign: 'center',
    },
    timeView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flex: 1,
    },
    logo: {
        width: 86,
        height: 86,
        marginBottom: 5,
        resizeMode: 'contain'
    },
    oddsPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20
    }
});