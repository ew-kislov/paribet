import React from 'react';
import { View } from 'react-native';

import Swiper from 'react-native-deck-swiper';

import { MainLayout, MatchBetPanel, UserInfoPanel, Stepper, Text } from '../../component';

export const SessionMatches = ({ matches, activeIndex, userMainInfo, addMatchBet }) =>
    matches.length == 0 ?
        <View /> :
        <MainLayout withHeader={true}>
            <UserInfoPanel userInfo={userMainInfo} style={{ marginTop: 25, marginHorizontal: 15 }} />
            <View style={{ flex: 1, marginTop: -35 }}>
                <Swiper
                    cards={matches}
                    backgroundColor='#00000000'
                    disableBottomSwipe
                    onSwipedLeft={(index) => addMatchBet(matches[index].id, 1)}
                    onSwipedRight={(index) => addMatchBet(matches[index].id, 2)}
                    onSwipedTop={(index) => addMatchBet(matches[index].id, 3)}
                    renderCard={(match) =>
                        <MatchBetPanel
                            match={match}
                            homeWin={() => addMatchBet(match.id, 1)}
                            awayWin={() => addMatchBet(match.id, 2)}
                            draw={() => addMatchBet(match.id, 3)} />}
                />
            </View>


            <Stepper activeColor='#6EB3F2' inactiveColor='#DCDCDC' step={activeIndex + 1} style={{ marginBottom: 90, marginHorizontal: 70 }} />
        </MainLayout>
