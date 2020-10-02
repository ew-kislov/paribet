import React from 'react';

import { InitialLayout, Text, PrimaryButton, ActiveHeaderText, TextInput, OutlineButton } from '../../component';
import { Font } from '../../style';
import { Image, TouchableOpacity, View } from 'react-native';

export const Login = ({ loading, onUsernameChange, onPasswordChange, login, switchToRegistration, googleLogin }) =>
    <InitialLayout>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 60 }}>
            <ActiveHeaderText>Вход</ActiveHeaderText>
            <TouchableOpacity onPress={switchToRegistration}>
                <Text font={Font.Bold} size={24} color='#bcbcbc'>Регистрация</Text>
            </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: 23, marginTop: 40 }}>
            <Text size={14} font={Font.Regular} color='#6D7885'>Имя</Text>
            <TextInput onChangeText={onUsernameChange} style={{ marginTop: 8 }} placeholder='Введите ваше имя' />
            <Text size={14} font={Font.Regular} color='#6D7885' style={{ marginTop: 25 }}>Пароль</Text>
            <TextInput onChangeText={onPasswordChange} style={{ marginTop: 8 }} secureTextEntry={true} placeholder='Введите ваш пароль' />
        </View>

        <OutlineButton onPress={googleLogin} icon={<Image source={require('../../../assets/images/google.png')} style={{ width: 24, height: 24 }} />}  style={{ marginTop: 20 }}>Войти через</OutlineButton>
        <PrimaryButton loading={loading} onPress={login} style={{ marginTop: 8 }}>Войти</PrimaryButton>
    </InitialLayout>