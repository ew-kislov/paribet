import axios from 'axios';

export function configureHttpClient() {
    axios.defaults.baseURL = 'http://api.betteam.tmweb.ru/v1';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers.post['Accept'] = '*/*';
}