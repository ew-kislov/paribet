import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { MainLayout, Text, RoundImage } from '../../component';
import { Font } from '../../style';
import { BetStatusLabel } from '../../component/basic/text/BetStatusLabel';

export const GameDetails = ({ loading, gameDetails }) =>
    <MainLayout withHeader={true} backgroundColor='#fff' loading={loading}>
        <View style={styles.userPhotosView}>
            <RoundImage url={gameDetails.firstPhoto} size={80} />
            <Text size={36} color='#ffffff' font={Font.Regular}>{gameDetails.firstGoal}:{gameDetails.secondGoal}</Text>
            <RoundImage url={gameDetails.secondPhoto} size={80} />
        </View>
        <View style={styles.userNamesView}>
            <View style={styles.nameContainer}>
                <Text size={17} color='#ffffff' font={Font.Bold} style={{ textAlign: 'left' }}>{gameDetails.firstUsername}</Text>
            </View>
            <View style={[styles.nameContainer, { justifyContent: "flex-end" }]}>
                <Text size={17} color='#ffffff' font={Font.Bold} style={{ textAlign: 'right' }}>{gameDetails.secondUsername}</Text>
            </View>
        </View>

        <View style={{ marginTop: 35 }}>
            {
                gameDetails.matches && gameDetails.matches.map((match) => (
                    <MatchSection key={match.id} match={match} />
                ))
            }
        </View>
    </MainLayout>


const MatchSection = ({ match }) =>
    <View style={styles.matchView}>
        <Text size={13} color='#A6A6A6' font={Font.Regular}>{match.tournament}</Text>
        <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'center' }]}>
            <View style={{ flex: 1 }}>
                <View style={[styles.row, { marginTop: 15 }]}>
                    {
                        match.homeLogo ? <Image source={{ uri: 'http://betteam.tmweb.ru/img/logo_teams/' + match.homeLogo }} style={styles.logo} /> :
                            <Image source={require('../../../assets/images/team_mock.png')} style={styles.logo} />
                    }
                    <Text size={15} font={Font.Regular} color='#323232' style={{ marginLeft: 5 }}>{match.homeName}</Text>
                    <Text size={15} font={Font.Bold} color='#000000' style={{ marginLeft: 'auto' }}>{match.homeScore}</Text>
                </View>
                <View style={[styles.row, { marginTop: 10 }]}>
                    {
                        match.awayLogo ? <Image source={{ uri: 'http://betteam.tmweb.ru/img/logo_teams/' + match.awayLogo }} style={styles.logo} /> :
                            <Image source={require('../../../assets/images/team_mock.png')} style={styles.logo} />
                    }
                    <Text size={15} font={Font.Regular} color='#323232' style={{ marginLeft: 5 }}>{match.awayName}</Text>
                    <Text size={15} font={Font.Bold} color='#000000' style={{ marginLeft: 'auto' }}>{match.awayScore}</Text>
                </View>
            </View>

            {
                !match.homeScore && (
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text size={13} font={Font.Regular} color='#888888'>{match.day}</Text>
                        <Text size={16} font={Font.Bold} color='#322E2E' style={{ marginTop: 3 }}>{match.time}</Text>
                    </View>
                )
            }
        </View>

        <View style={styles.betPanel}>
            <BetStatusLabel statusId={match.firstStatus} bet={match.firstBet} />
            <BetStatusLabel statusId={match.secondStatus} bet={match.secondBet} />
        </View>
    </View>


const styles = StyleSheet.create({
    userPhotosView: {
        flexDirection: 'row',
        marginTop: 27,
        marginHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userNamesView: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 15,
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    nameContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 1,
        flex: 1,
    },
    matchView: {
        borderBottomWidth: 1,
        borderBottomColor: '#EBEBEB',
        paddingHorizontal: 15,
        marginBottom: 15,
        paddingBottom: 25
    },
    row: {
        flexDirection: 'row'
    },
    logo: {
        resizeMode: 'contain',
        width: 24,
        height: 24,
        marginRight: 10
    },
    betPanel: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});