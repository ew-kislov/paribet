import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Toast from 'react-native-simple-toast';
import * as _ from 'lodash';
import { useNavigation } from '@react-navigation/native';

import { Rating } from './Rating';
import { getLeagues, useEffectAsync } from '../../redux';

export const RatingContainer = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [
        loading,
        leagues,
        userMainInfo,
        username
    ] = useSelector((state) => [
        state.rating.loading,
        state.rating.leagues,
        state.user.mainInfo,
        state.auth.username
    ]);

    const boundGetLeagues = bindActionCreators(getLeagues, dispatch);

    const [isInitiated, setInitiated] = useState(false);
    const [activeLeagueId, setActiveLeagueId] = useState(userMainInfo.leagueId || 1);
    const [activeGroup, setActiveGroup] = useState(0);

    const activeLeague = _.find(leagues, { id: activeLeagueId });

    useEffectAsync(async () => {
        try {
            await boundGetLeagues();
        } catch (error) {
            console.log(error.message)
            Toast.show(error.message);
        }
    });

    if (activeLeague && !isInitiated) {
        const activeGroupId = _.indexOf(activeLeague.groups, userMainInfo.groupId);
        setActiveGroup(activeGroupId);
        setInitiated(true);
    }

    const changeLeague = (id) => {
        setActiveLeagueId(id);
        setActiveGroup(0);
    }

    const navigateToProfile = (userId, username) => {
        navigation.navigate('Profile', { userId, username });
    }

    return <Rating
        loading={loading}
        leagues={leagues}
        activeLeague={activeLeague}
        changeLeague={changeLeague}
        activeGroup={activeGroup}
        setActiveGroup={setActiveGroup}
        groupRating={activeLeague?.rating[activeGroup]}
        username={username}
        navigateToProfile={navigateToProfile} />
}