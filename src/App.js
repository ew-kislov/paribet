import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import LoadingView from 'react-native-loading-view';
import { bindActionCreators } from 'redux';

import { store, isFinishedIntro, loadAuthInfo, useEffectAsync } from './redux';
import { AuthNavigator, IntroNavigator, MainNavigator } from './navigation/AppNavigation';

const App = () => {
    const [
        loading,
        finishedIntro,
        token
    ] = useSelector((state) => [
        state.preferences.loading || state.auth.loading,
        state.preferences.finishedIntro,
        state.auth.token
    ]);

    const dispatch = useDispatch();
    const boundIsFinishedIntro = bindActionCreators(isFinishedIntro, dispatch);
    const boundLoadAuthInfo = bindActionCreators(loadAuthInfo, dispatch);

    useEffectAsync(() => {
        await boundIsFinishedIntro();
        await boundLoadAuthInfo();

        SplashScreen.hide();
    });

    return (
        <LoadingView loading={loading} indicator={<ActivityIndicator size="large" color="#45ade1" />}>
            {
                !finishedIntro ? <IntroNavigator /> : token ? <MainNavigator /> : <AuthNavigator />
            }
        </LoadingView>
    );
};

export const ConnectedApp = () => <Provider store={store}><App /></Provider>;
