import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as _ from 'lodash';

import { setNewGame } from '../../redux';
import { SessionMatches } from './SessionMatches';

export const SessionMatchesContainer = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [availableSessions, userMainInfo] = useSelector((state) => [state.session.availableSessions, state.user.mainInfo]);
    const dispatch = useDispatch();
    const { setNewGame: boundSetNewGame } = bindActionCreators({ setNewGame }, dispatch);

    const sessionId = route.params.sessionId;
    const session = _.find(availableSessions, { id: sessionId });

    const [activeIndex, setActiveIndex] = useState(0);
    const [game, setGame] = useState({ sessionId, matches: [] });

    const addMatchBet = (matchId, oddId) => {

        setGame((game) => {
            const newGame = { ...game, matches: { ...game.matches, [matchId]: oddId } };

            if (activeIndex == 4) {
                boundSetNewGame(newGame);
                navigation.navigate('Confirm Game', { sessionId });
            } else {
                setActiveIndex(activeIndex + 1);
            }

            return newGame;
        });
    }

    return <SessionMatches
        matches={session?.matches || []}
        activeIndex={activeIndex}
        userMainInfo={userMainInfo}
        addMatchBet={addMatchBet} />
}