import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { bindActionCreators } from 'redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as _ from 'lodash';

import { setGameLoading, addGame as addGameActionCreator, resetSessions, getWaitingGames, getLiveGames } from '../../redux';
import { ConfirmGame } from './ConfirmGame';

export const ConfirmGameContainer = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();

    const [
        userId,
        availableSessions,
        newGame,
        userMainInfo
    ] = useSelector((state) => [
        state.auth.id,
        state.session.availableSessions,
        state.game.newGame,
        state.user.mainInfo
    ]);

    const sessionId = route.params.sessionId;
    const session = _.find(availableSessions, { id: sessionId });

    const boundSetGameLoading = bindActionCreators(setGameLoading, dispatch);
    const boundAddGame = bindActionCreators(addGameActionCreator, dispatch);
    const boundResetSessions = bindActionCreators(resetSessions, dispatch);
    const boundGetWaitingGames = bindActionCreators(getWaitingGames, dispatch);
    const boundGetLiveGames = bindActionCreators(getLiveGames, dispatch);

    const addGame = async () => {
        try {
            await boundAddGame(sessionId, newGame.matches);
            await boundResetSessions();

            await boundSetGameLoading();
            boundGetWaitingGames(userId);
            boundGetLiveGames(userId);

            Toast.show('Прогнозы добавлены');
        } catch (error) {
            Toast.show(error.message);
        }

        navigation.navigate('Home');
    }

    return <ConfirmGame userMainInfo={userMainInfo} newGame={newGame} matches={session?.matches || []} addGame={addGame} />
}