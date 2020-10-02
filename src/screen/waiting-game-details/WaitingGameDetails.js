import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { MainLayout, Text, RoundImage } from '../../component';
import { Font } from '../../style';
import { BetStatusLabel } from '../../component/basic/text/BetStatusLabel';

export const WaitingGameDetails = ({ loading, matches = [], username, photo }) =>
    <MainLayout withHeader={true} loading={loading} backgroundColor='#fff'>
        <View style={styles.userPhotosView}>
            <RoundImage url={photo} size={80} />
            <Image source={require('../../../assets/images/search.png')} style={{ height: 80, width: 80 }} />
        </View>
        <View style={styles.userNamesView}>
            <View style={styles.nameContainer}>
                <Text size={17} color='#ffffff' font={Font.Bold} style={{ textAlign: 'left' }}>{username}</Text>
            </View>
            <View style={[styles.nameContainer, { justifyContent: "flex-end" }]}>
                <Text size={17} color='#ffffff' font={Font.Bold} style={{ textAlign: 'right' }}>Поиск соперника...</Text>
            </View>
        </View>

        <View style={{ marginTop: 50 }}>
            {
                matches.map((match) => (
                    <WaitingMatchSection key={match.id} match={match} />
                ))
            }
        </View>
    </MainLayout>


const WaitingMatchSection = ({ match }) =>
    <View style={styles.matchView}>
        <Text size={13} color='#A6A6A6' font={Font.Regular}>{match.tournament}</Text>
        <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'center' }]}>
            <View>
                <View style={[styles.row, { marginTop: 15 }]}>
                    {
                        match.homeLogo ? <Image source={{ uri: 'http://betteam.tmweb.ru/img/logo_teams/' + match.homeLogo }} style={styles.logo} /> :
                            <Image source={require('../../../assets/images/team_mock.png')} style={styles.logo} />
                    }
                    <Text size={15} font={Font.Regular} color='#323232' style={{ marginLeft: 5 }}>{match.homeName}</Text>
                </View>
                <View style={[styles.row, { marginTop: 10 }]}>
                    {
                        match.awayLogo ? <Image source={{ uri: 'http://betteam.tmweb.ru/img/logo_teams/' + match.awayLogo }} style={styles.logo} /> :
                            <Image source={require('../../../assets/images/team_mock.png')} style={styles.logo} />
                    }
                    <Text size={15} font={Font.Regular} color='#323232' style={{ marginLeft: 5 }}>{match.awayName}</Text>
                </View>
            </View>

            <View style={{ alignItems: 'flex-end' }}>
                <Text size={13} font={Font.Regular} color='#888888'>{match.day}</Text>
                <Text size={16} font={Font.Bold} color='#322E2E' style={{ marginTop: 3 }}>{match.time}</Text>
            </View>
        </View>

            <BetStatusLabel isWaiting={true} bet={match.firstBet} style={styles.betLabel} />
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
    betLabel: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});