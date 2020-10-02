import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress'

import { MainLayout, UserInfoPanel, Text, RoundImage, LiveGamePanel } from '../../component';
import { Font } from '../../style';

const toPercent = (part, total) => Math.round(part / total * 100);

export const Profile = ({ loading, username, userMainInfo, userStats, lastGames, navigateToGameDetails, logout }) =>
    <MainLayout withHeader={true} loading={loading}>
        <View style={styles.profileTop}>
            <RoundImage url={userMainInfo.photo} size={64} />
            <View style={{ marginLeft: 15, flexWrap: 'wrap', alignItems: 'flex-start', flex: 1, flexGrow: 5 }}>
                <Text size={24} color='#ffffff' font={Font.Medium}>{username}</Text>
                <Text size={15} color='#ffffff80' font={Font.Regular} style={{ flexWrap: 'wrap' }}>Зарегистрирован {userMainInfo.registrationDate}</Text>
            </View>
            <TouchableOpacity onPress={logout} style={{ marginLeft: 'auto', flexGrow: 1, alignItems: 'flex-end' }}>
                <Image source={require('../../../assets/images/logout.png')} style={{ height: 28, width: 28 }} />
            </TouchableOpacity>
        </View>

        <UserInfoPanel userInfo={userMainInfo} withoutPhoto={true} style={{ marginHorizontal: 15, marginTop: 15 }} />

        <View style={{ marginTop: 40, marginHorizontal: 15 }}>
            <Text size={24} color='#202020' font={Font.Medium}>Статистика</Text>

            <View style={styles.statisticRow}>
                <StatisticPanel
                    leftElement={<Image source={require('../../../assets/images/total_bets.png')} style={{ height: 41, width: 41 }} />}
                    number={userStats.games}
                    label='Всего пари' />
                <StatisticPanel
                    leftElement={<Diagram percent={toPercent(userStats.draw, userStats.games) || 0} />}
                    number={userStats.draw}
                    label='В ничью'
                    style={{ marginLeft: 15 }} />
            </View>
            <View style={styles.statisticRow}>
                <StatisticPanel
                    leftElement={<Diagram percent={toPercent(userStats.win, userStats.games) || 0} />}
                    number={userStats.win}
                    label='Выиграно' />
                <StatisticPanel
                    leftElement={<Diagram percent={toPercent(userStats.lose, userStats.games) || 0} />}
                    number={userStats.lose}
                    label='Проиграно'
                    style={{ marginLeft: 15 }} />
            </View>

            <Text size={24} color='#202020' font={Font.Medium} style={{ marginTop: 25, marginBottom: 20 }}>Последние игры</Text>

            {
                lastGames.map((game) => <LiveGamePanel onPress={() => navigateToGameDetails(game.id)} key={game.id} game={game} style={{ marginBottom: 12 }} />)
            }
        </View>
    </MainLayout>

const StatisticPanel = ({ label, number, leftElement, style }) =>
    <View style={[styles.statisticPanel, style]}>
        {leftElement}
        <View style={{ marginLeft: 14 }}>
            <Text size={22} color='#000000' font={Font.Medium}>{number}</Text>
            <Text size={13} color='#00000050' font={Font.Regular}>{label}</Text>
        </View>
    </View>

const Diagram = ({ percent }) =>
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text size={13} color='#6EB3F2' font={Font.Regular} style={{ position: 'absolute' }}>{percent}%</Text>
        <AnimatedCircularProgress
            rotation={0}
            size={41}
            width={4}
            fill={percent}
            tintColor='#6EB3F2'
            backgroundColor="#E0E0E0" />
    </View>

const styles = StyleSheet.create({
    profileTop: {
        flexDirection: 'row',
        marginTop: 25,
        marginHorizontal: 15,
        alignItems: 'center'
    },
    statisticPanel: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 18,
        flexDirection: 'row',
        marginTop: 20,
        flex: 1
    },
    statisticRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});