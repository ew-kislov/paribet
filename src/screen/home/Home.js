import React from 'react';
import { Image } from 'react-native';

import { MainLayout, PrimaryButton, TitledPanel, MatchProposal, UserInfoPanel, LiveGamePanel, WaitingGamePanel, Text } from '../../component';
import { Font } from '../../style';

export const Home = ({
    loading,
    username,
    sessions,
    userMainInfo,
    liveGames,
    waitingGames,
    navigateToGameDetails,
    navigateToWaitingGameDetails,
    navigateToSessionMatches
}) =>
    <MainLayout withHeader={true} loading={loading}>
        <UserInfoPanel userInfo={userMainInfo} style={{ marginTop: 25, marginHorizontal: 15 }} />
        {
            sessions.map((session) => (
                <TitledPanel key={session.id} title={`Игровая сессия #${session.id}`} logo={<Image source={require('../../../assets/images/football.png')} style={{ width: 24, height: 24, marginRight: 10 }} />} style={{ margin: 15 }}>
                    {
                        session.matches.map((match) => {
                            return <MatchProposal key={match.id} match={match} />
                        })
                    }
                    <PrimaryButton onPress={() => navigateToSessionMatches(session.id)} style={{ marginVertical: 12 }}>Принять участие</PrimaryButton>
                </TitledPanel>
            ))
        }
        {
            liveGames.length + waitingGames.length > 0 && <Text size={24} color='#202020' font={Font.Bold} style={{ marginLeft: 15, marginBottom: 15, marginTop: 15 }}>Текущие игры</Text>
        }
        {
            liveGames.map((game) => <LiveGamePanel key={game.id} game={game} onPress={() => navigateToGameDetails(game.id)} style={{ marginHorizontal: 15, marginBottom: 20 }} />)
        }
        {
            waitingGames.map((game) => <WaitingGamePanel key={game.id} game={game} onPress={() => navigateToWaitingGameDetails(game.id)} game={game} username={username} photo={userMainInfo.photo} style={{ marginHorizontal: 15, marginBottom: 20 }} />)
        }
    </MainLayout>