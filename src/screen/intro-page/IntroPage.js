import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { InitialLayout, Stepper, Text, PrimaryButton } from '../../component';
import { Font } from '../../style';

export const IntroPage = ({ step, image, title, handleNextStep, handleSkip, imageHeight, imageWidth }) =>
    <InitialLayout>
        <Stepper step={step} style={{ marginTop: 30, marginHorizontal: 20 }} activeColor='#68E1FD' inactiveColor='#E0E0E0' />

        <TouchableOpacity onPress={handleSkip}>
            <Text size={17} color='#9F9F9F' font={Font.Regular} style={{ textAlign: 'right', marginRight: 20, marginTop: 24 }}>Пропустить</Text>
        </TouchableOpacity>

        <Image source={image} style={{ width: imageWidth, height: imageHeight, marginTop: 40 }} />
        <Text size={28} color='#000000' font={Font.Bold} style={{ marginTop: 30, marginLeft: 20 }}>{title}</Text>

        <PrimaryButton onPress={handleNextStep} style={{ position: 'absolute', bottom: 34, left: 0, right: 0 }}>Далее</PrimaryButton>
    </InitialLayout>