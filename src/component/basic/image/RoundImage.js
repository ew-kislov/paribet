import React from 'react';
import { Image } from 'react-native';

export const RoundImage = ({ size = 30, border = 2, url, style }) => {
    return <Image
        source={url ? { uri: 'http://betteam.tmweb.ru/img/avatars/150x150/' + url } : require('../../../../assets/images/profile_mock.png')}
        borderRadius={100} resizeMode='cover'
        style={[{ height: size, width: size, borderColor: '#FFFFFF', borderWidth: border }, style]}
    />
}
