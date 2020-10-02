import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Toast from 'react-native-simple-toast';
import { useRoute, useNavigation } from '@react-navigation/native';

import { Profile } from './Profile';
import {
    getUserStats,
    getUserLastGames,
    getUserMainInfo,
    getChosenUserStats,
    getChosenUserLastGames,
    getChosenUserMainInfo,
    logout as logoutActionCreator,
    useEffectAsync
} from '../../redux';

export const ProfileContainer = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const navigation = useNavigation();

    const paramUserId = route?.params?.userId;
    const paramUsername = route?.params?.username;

    const [
        loading,
        userId,
        username,
        userMainInfo,
        userStats,
        userLastGames
    ] = useSelector((state) => [
        state.auth.loading || state.user.loading,
        paramUserId || state.auth.id,
        paramUsername || state.auth.username,
        paramUserId ? state.user.chosenMainInfo : state.user.mainInfo,
        paramUserId ? state.user.chosenStats : state.user.stats,
        paramUserId ? state.user.chosenLastGames : state.user.lastGames
    ]);

    const {
        getUserStats: boundGetUserStats,
        getUserLastGames: boundGetUserLastGames,
        getUserMainInfo: boundGetUserMainInfo,
        logoutActionCreator: logout
    } = bindActionCreators({
        getUserStats: paramUserId ? getChosenUserStats : getUserStats,
        getUserLastGames: paramUserId ? getChosenUserLastGames : getUserLastGames,
        getUserMainInfo: paramUserId ? getChosenUserMainInfo : getUserMainInfo,
        logoutActionCreator
    }, dispatch);

    useEffectAsync(async () => {
        try {
            await boundGetUserMainInfo(userId);
            await boundGetUserStats(userId);
            await boundGetUserLastGames(userId);
        } catch (error) {
            Toast.show(error.message);
        }
    });

    const navigateToGameDetails = (gameId) => navigation.navigate('Game Details', { gameId });

    return <Profile
        loading={loading}
        username={username}
        userMainInfo={userMainInfo}
        userStats={userStats}
        lastGames={userLastGames}
        navigateToGameDetails={navigateToGameDetails}
        logout={logout} />
}