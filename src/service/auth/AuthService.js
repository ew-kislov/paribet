import axios from 'axios';
import qs from 'querystring';
import { GoogleSignin } from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-community/async-storage'

export class AuthService {
    /**
     * Registers user
     * @param {Object} user
     * @param {string} user.username
     * @param {string} user.email
     * @param {string} user.password
     * @returns {string}
     */
    async register(user) {
        const response = await axios.post('/site/signup', qs.stringify(user));
        const responseData = await response.data;

        if (responseData.data.token) {
            const token = responseData.data.token;
            const id = responseData.data.id;

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await this._addAuthDataToStorage({ id, token, username: user.username });

            return { id, token, username: user.username };
        } else {
            const emailError = responseData.data?.email ? responseData.data?.email[0] : null;
            const usernameError = responseData.data?.username ? responseData.data?.username[0] : null;
            throw new Error(emailError || usernameError || 'Во время регистрации произошла ошибка');
        }
    }

    /**
     * Logs user in
     * @param {Object} user
     * @param {string} user.username
     * @param {string} user.password
     * @returns {string}
     */
    async login(user) {
        const response = await axios.post('/site/login', qs.stringify(user));
        const responseData = await response.data;

        if (responseData.data.token) {
            const token = responseData.data.token;
            const id = responseData.data.id;

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await this._addAuthDataToStorage({ id, token, username: user.username });

            return { id, token, username: user.username };
        } else {
            const usernameError = responseData.data?.username ? responseData.data?.username[0] : null;
            const passwordError = responseData.data?.password ? responseData.data?.password[0] : null;
            console.log(usernameError || passwordError || 'Во время аутентификации произошла ошибка');
            throw new Error(usernameError || passwordError || 'Во время аутентификации произошла ошибка');
        }
    }

    async googleLogin() {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
            offlineAccess: false,
            forceCodeForRefreshToken: true,
            androidClientId: '298320704850-8antkndqauo5basm7s35fngddg8pd06j.apps.googleusercontent.com',
            forceConsentPrompt: true
        });

        const userData = await GoogleSignin.signIn();

        const user = {
            username: userData.user.name,
            email: userData.user.email,
            social_id: userData.user.id,
            avatar: userData.user.photo
        }

        const response = await axios.post('/site/google-auth', qs.stringify(user));
        const responseData = await response.data;

        const token = responseData.data.token;
        const id = responseData.data.id;

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await this._addAuthDataToStorage({ id, token, username: user.username });

        return { id, token, username: user.username };
    }

    async loadAuthInfo() {
        const token = await AsyncStorage.getItem('token');
        const username = await AsyncStorage.getItem('username');
        const idString = await AsyncStorage.getItem('id');

        const id = JSON.parse(idString);

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        return { id, token, username };
    }

    /**
     * Logs user out
     */
    async logout() {
        axios.defaults.headers.common['Authorization'] = null;
        await this._removeAuthDataFromStorage();
    }

    /**
     * Adds auth data(token etc) to AsyncStorage
     * @param {Object} authInfo
     * @param {string} authInfo.token
     */
    async _addAuthDataToStorage({ token, id, username }) {
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('id', JSON.stringify(id));
    }

    /**
     * Removes auth data(token etc) from AsyncStorage
     */
    async _removeAuthDataFromStorage() {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('username');
        await AsyncStorage.removeItem('id');
    }
}