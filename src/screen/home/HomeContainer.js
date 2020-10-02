import React from 'react';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { bindActionCreators } from 'redux';

import { Home } from './Home';
import { getAvailableSessions, getUserMainInfo, getLiveGames, getWaitingGames, useEffectAsync } from '../../redux';

export const HomeContainer = () => {
    const navigation = useNavigation();

    const [
        loading,
        userId,
        username,
        availableSessions,
        userMainInfo,
        liveGames,
        waitingGames,
    ] = useSelector((state) => [
        state.session.loading || state.user.loading || state.game.loading,
        state.auth.id,
        state.auth.username,
        state.session.availableSessions,
        state.user.mainInfo,
        state.game.liveGames,
        state.game.waitingGames,
    ]);

    const dispatch = useDispatch();
    const {
        getAvailableSessions: boundGetAvailableSessions,
        getUserMainInfo: boundGetUserMainInfo,
        getLiveGames: boundGetLiveGames,
        getWaitingGames: boundGetWaitingGames
    } = bindActionCreators({
        getAvailableSessions,
        getUserMainInfo,
        getLiveGames,
        getWaitingGames
    }, dispatch);

    useEffectAsync(() => {
        try {
            await boundGetAvailableSessions();
            await boundGetUserMainInfo(userId);
            await boundGetLiveGames(userId);
            await boundGetWaitingGames(userId);
        } catch (error) {
            Toast.show(error);
        }
    });

    const navigateToGameDetails = (gameId) => navigation.navigate('Game Details', { gameId });
    const navigateToWaitingGameDetails = (gameId) => navigation.navigate('Waiting Game Details', { gameId });
    const navigateToSessionMatches = (sessionId) => navigation.navigate('Session Matches', { sessionId });

    return (
        <Home
            loading={loading}
            username={username}
            sessions={availableSessions}
            userMainInfo={userMainInfo}
            liveGames={liveGames}
            waitingGames={waitingGames}
            navigateToGameDetails={navigateToGameDetails}
            navigateToWaitingGameDetails={navigateToWaitingGameDetails}
            navigateToSessionMatches={navigateToSessionMatches} />
    );
}