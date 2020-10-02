import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Toast from 'react-native-simple-toast';

import { getWaitingGameDetails, useEffectAsync } from '../../redux';
import { WaitingGameDetails } from './WaitingGameDetails';

export const WaitingGameDetailsContainer = () => {
    const route = useRoute();
    const dispatch = useDispatch();

    const [
        loading,
        waitingGameDetails,
        username,
        photo,
        error
    ] = useSelector((state) => ([
        state.game.loading || state.user.loading,
        state.game.waitingGameDetails,
        state.auth.username,
        state.user.mainInfo.photo,
        state.game.error
    ]));

    useEffectAsync(async () => {
        const { gameId } = route.params;
        const boundGetWaitingGameDetails = bindActionCreators(getWaitingGameDetails, dispatch);

        try {
            await boundGetWaitingGameDetails(gameId);
        } catch (catchedError) {
            Toast.show(error);
        }
    });

    return <WaitingGameDetails loading={loading} username={username} photo={photo} matches={waitingGameDetails?.matches} />
}