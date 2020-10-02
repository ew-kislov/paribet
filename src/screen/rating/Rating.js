import React, { useRef } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import { MainLayout, Text, RoundImage, RoundIcon } from '../../component';
import { Font } from '../../style';
import { ScrollView } from 'react-native-gesture-handler';

const getLogoFromLeagueId = (leagueId) => {
    switch (leagueId) {
        case 1: return require('../../../assets/images/league_bronze.png');
        case 2: return require('../../../assets/images/league_silver.png');
        case 3: return require('../../../assets/images/league_gold.png');
        default: return require('../../../assets/images/league_bronze.png');
    }
}

export const Rating = ({
    loading,
    leagues,
    activeLeague = {},
    changeLeague,
    activeGroup,
    setActiveGroup,
    groupRating,
    username,
    navigateToProfile
}) => {
    const scrollView = useRef(null);

    function handleScroll(event, index) {
        setActiveGroup(index);
        scrollView.current.scrollTo({ x: 100 * (index - 1) - 29 });
    }

    return (
        <MainLayout withHeader={true} backgroundColor='#F3F3F3' loading={loading}>
            <View style={styles.logoRow}>
                {
                    leagues && leagues.map((league) =>
                        <TouchableOpacity onPress={() => changeLeague(league.id)}>
                            <RoundIcon size={league.id === activeLeague.id ? 84 : 60}>
                                <Image source={getLogoFromLeagueId(league.id)} style={{ width: league.id === activeLeague.id ? 43 : 30, height: league.id === activeLeague.id ? 43 : 30 }} />
                            </RoundIcon>
                        </TouchableOpacity>
                    )
                }
            </View>
            <Text size={18} color='#ffffff' font={Font.Medium} style={{ marginTop: 20, textAlign: 'center' }}>{activeLeague.name} лига</Text>

            <View style={{ height: 53, borderBottomWidth: 1, borderBottomColor: '#E7E7E7', marginTop: 30, paddingVertical: 10 }}>
                <ScrollView ref={scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        activeLeague && activeLeague.groups && activeLeague.groups.map((group, index) =>
                            <TouchableOpacity onPress={(event) => handleScroll(event, index)} style={index == activeGroup ? styles.activeGroupTab : styles.inactiveGroupTab}>
                                {
                                    index == activeGroup ? <Text size={17} color='#fff' font={Font.Medium}>Группа {group}</Text> : <Text size={17} color='#32323250' font={Font.Regular}>Группа {group}</Text>
                                }
                            </TouchableOpacity>
                        )
                    }
                </ScrollView>
            </View>

            <View style={styles.ratingView}>
                {
                    groupRating?.map((user) =>
                        <TouchableOpacity style={{ height: 60, paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center', backgroundColor: user.username === username ? '#e9f4fd' : '#ffffff' }} onPress={() => navigateToProfile(user.id, user.username)}>
                            <View style={{ height: 18, width: 18, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: user.category === 'top' ? '#6EB3F2' : user.category === 'down' ? '#FF4D4D' : null }}>
                                {user.category ? <Text size={14} color='#fff' font={Font.Medium}>{user.position}</Text> : <Text size={14} color='#32323250' font={Font.Regular}>{user.position}</Text>}
                            </View>
                            <RoundImage url={user.photo} size={40} style={{ marginLeft: 8 }} />
                            <Text size={17} color='#323232' font={Font.Regular} style={{ marginLeft: 9 }}>{user.username.length > 16 ? user.username.substr(0, 14) + '...' : user.username}</Text>
                            <Text size={15} color='#323232' font={Font.Bold} style={{ marginLeft: 'auto' }}>{user.score} очков</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    logoRow: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 25,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    activeGroupTab: {
        backgroundColor: '#6EB3F2',
        borderRadius: 6,
        marginHorizontal: 10,
        justifyContent: 'center',
        width: 80,
        alignItems: 'center'
    },
    inactiveGroupTab: {
        marginHorizontal: 10,
        justifyContent: 'center',
        width: 80,
        alignItems: 'center'
    },
    ratingView: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 15
    }
});