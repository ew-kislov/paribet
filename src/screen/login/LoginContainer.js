import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';

import { Login } from './Login';
import { login as loginActionCreator, googleLogin as googleLoginActionCreator } from '../../redux';
import { bindActionCreators } from 'redux';
import { useNavigation } from '@react-navigation/native';

export const LoginContainer = () => {
    const navigation = useNavigation();

    const [loading] = useSelector((state) => [state.auth.loading]);

    const dispatch = useDispatch();
    const {
        loginActionCreator: boundLogin,
        googleLoginActionCreator: boundGoogleLogin
    } = bindActionCreators({
        loginActionCreator,
        googleLoginActionCreator
    }, dispatch);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (username) => setUsername(username);
    const handlePasswordChange = (password) => setPassword(password);

    const login = async () => {
        try {
            await boundLogin({ username, password });
        } catch (error) {
            Toast.show(error);
        }
    }

    const googleLogin = async () => {
        try {
            await boundGoogleLogin();
        } catch (error) {
            Toast.show(error);
        }
    }

    const switchToRegistration = () => navigation.navigate('Registration');

    return (
        <Login
            loading={loading}
            onUsernameChange={handleUsernameChange}
            onPasswordChange={handlePasswordChange}
            login={login}
            switchToRegistration={switchToRegistration}
            googleLogin={googleLogin} />
    );
}