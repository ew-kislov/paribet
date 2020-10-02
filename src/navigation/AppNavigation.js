import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    LoginContainer,
    IntroPageContainer,
    RegistrationContainer,
    HomeContainer,
    GameDetailsContainer,
    WaitingGameDetailsContainer,
    SessionMatchesContainer,
    ConfirmGameContainer,
    ProfileContainer,
    RatingContainer
} from '../screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const IntroNavigator = () =>
    <NavigationContainer>
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Intro" component={IntroPageContainer} />
        </Stack.Navigator>
    </NavigationContainer>

export const MainNavigator = () =>
    <NavigationContainer>
        <Tab.Navigator headerMode="none">
            <Tab.Screen name="Home Navigator" component={HomeNavigator} options={{ tabBarIcon: ({ size, focused }) => <Image source={focused ? require('../assets/images/home_active.png') : require('../assets/images/home.png')} style={{ height: 25, width: 25, resizeMode: 'contain', marginTop: 12 }} />, tabBarLabel: '' }} />
            <Tab.Screen name="Rating Navigator" component={RatingNavigator} options={{ tabBarIcon: ({ size, focused }) => <Image source={focused ? require('../assets/images/rating_active.png') : require('../assets/images/rating.png')} style={{ height: 25, width: 25, resizeMode: 'contain', marginTop: 12 }} />, tabBarLabel: '' }} />
            <Tab.Screen name="Profile Navigator" component={ProfileNavigator} options={{ tabBarIcon: ({ size, focused }) => <Image source={focused ? require('../assets/images/profile_active.png') : require('../assets/images/profile.png')} style={{ height: 25, width: 25, resizeMode: 'contain', marginTop: 12 }} />, tabBarLabel: '' }} />
        </Tab.Navigator>
    </NavigationContainer>

export const AuthNavigator = () =>
    <NavigationContainer>
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={LoginContainer} />
            <Stack.Screen name="Registration" component={RegistrationContainer} />
        </Stack.Navigator>
    </NavigationContainer>

const HomeNavigator = () =>
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeContainer} />
        <Stack.Screen name="Session Matches" component={SessionMatchesContainer} />
        <Stack.Screen name="Confirm Game" component={ConfirmGameContainer} />
        <Stack.Screen name="Game Details" component={GameDetailsContainer} />
        <Stack.Screen name="Waiting Game Details" component={WaitingGameDetailsContainer} />
    </Stack.Navigator>

const RatingNavigator = () =>
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Rating" component={RatingContainer} />
        <Stack.Screen name="Profile" component={ProfileContainer} />
    </Stack.Navigator>

const ProfileNavigator = () =>
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Profile" component={ProfileContainer} />
        <Stack.Screen name="Game Details" component={GameDetailsContainer} />
    </Stack.Navigator>