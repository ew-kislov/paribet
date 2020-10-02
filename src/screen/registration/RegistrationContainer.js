import React, { useState } from 'react';
import Toast from 'react-native-simple-toast';

import { Registration } from './Registration';
import { register as registerActionCreator } from '../../redux';

export const RegistrationContainer = () => {
    const navigation = useNavigation();

    const [loading] = useSelector((state) => [state.auth.loading]);

    const dispatch = useDispatch();
    const boundRegister = bindActionCreators(registerActionCreator, dispatch);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleEmailChange = (email) => setEmail(email);
    const handleUsernameChange = (username) => setUsername(username);
    const handlePasswordChange = (password) => setPassword(password);
    const handlePasswordConfirmChange = (passwordConfirm) => setPasswordConfirm(passwordConfirm);

    const register = async () => {
        if (password !== passwordConfirm) {
            Toast.show('Пароли не совпадают');
            return;
        }

        try {
            await boundRegister({ username, email, password });
        } catch (error) {
            Toast.show(error);
        }
    }

    const switchToLogin = () => navigation.navigate('Login');

    return (
        <Registration
            loading={loading}
            onEmailChange={handleEmailChange}
            onUsernameChange={handleUsernameChange}
            onPasswordChange={handlePasswordChange}
            onPasswordConfirmChange={handlePasswordConfirmChange}
            register={register}
            switchToLogin={switchToLogin} />
    );
}