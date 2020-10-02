import React from 'react';
import { ScrollView, StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';
import { KeyboardShiftLayout } from './KeyboardShiftLayout';

export const InitialLayout = ({ children }) =>
    <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='#FFF' barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <KeyboardShiftLayout style={styles.scrollView} contentContainerStyle={{ flex: 1 }}>
                {children}
            </KeyboardShiftLayout>
        </SafeAreaView>
    </View>

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#FFF',
        flex: 1
    }
});
