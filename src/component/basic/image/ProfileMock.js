import React from 'react';
import { Image } from "react-native";

export const ProfileMock = ({ size, style }) =>
    <Image source={require('../../../../assets/images/profile_mock.png')} style={[{ height: size, width: size }, style]} />