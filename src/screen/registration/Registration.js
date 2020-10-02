import React from 'react';

import { InitialLayout, Text, PrimaryButton, ActiveHeaderText, TextInput } from '../../component';
import { Font } from '../../style';
import { TouchableOpacity, View } from 'react-native';

export const Registration = ({ loading, onEmailChange, onUsernameChange, onPasswordChange, onPasswordConfirmChange, register, switchToLogin }) =>
    <InitialLayout>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 60 }}>
            <TouchableOpacity onPress={switchToLogin}>
                <Text font={Font.Bold} size={24} color='#bcbcbc'>Вход</Text>
            </TouchableOpacity>
            <ActiveHeaderText>Регистрация</ActiveHeaderText>
        </View>

        <View style={{ marginHorizontal: 23, marginTop: 40 }}>
            <Text size={14} font={Font.Regular} color='#6D7885'>E-mail</Text>
            <TextInput onChangeText={onEmailChange} style={{ marginTop: 8 }} placeholder='Введите ваш e-mail' />
            <Text size={14} font={Font.Regular} color='#6D7885' style={{ marginTop: 25 }}>Имя</Text>
            <TextInput onChangeText={onUsernameChange} style={{ marginTop: 8 }} placeholder='Введите ваше имя' />
            <Text size={14} font={Font.Regular} color='#6D7885' style={{ marginTop: 25 }}>Пароль</Text>
            <TextInput onChangeText={onPasswordChange} style={{ marginTop: 8 }} secureTextEntry={true} placeholder='Придумайте пароль' />
            <Text size={14} font={Font.Regular} color='#6D7885' style={{ marginTop: 25 }}>Подтвердите пароль</Text>
            <TextInput onChangeText={onPasswordConfirmChange} style={{ marginTop: 8 }} secureTextEntry={true} placeholder='Подтвердите пароль' />
        </View>

        <PrimaryButton loading={loading} onPress={register} style={{ marginTop: 40 }}>Зарегистрироваться</PrimaryButton>
    </InitialLayout>