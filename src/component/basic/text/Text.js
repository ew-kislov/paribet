import React from 'react';
import { Text as BaseText } from 'react-native';

export const Text = ({ font, color, size, children, style }) => {
    return <BaseText style={[{ fontFamily: font, color, fontSize: size }, style]}>{children}</BaseText>
}