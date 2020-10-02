import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Toast from 'react-native-simple-toast';

import { GameDetails } from './GameDetails';
import { getGameDetails, useEffectAsync } from '../../redux';

export const GameDetailsContainer = () => {
    const route = useRoute();
    const dispatch = useDispatch();

    const [ loading, gameDetails, error ] = useSelector((state) => [ state.game.loading, state.game.gameDetails, state.game.error ])

    useEffectAsync(async () => {
        const { gameId } = route.params;
        const { getGameDetails: boundGetGameDetails } = bindActionCreators({ getGameDetails }, dispatch);

        try {
            await boundGetGameDetails(gameId);
        } catch (catchedError) {
            Toast.show(error);
        }
    });

    return <GameDetails loading={loading} gameDetails={gameDetails} />
}