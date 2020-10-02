import React from 'react';
import { ScrollView, StatusBar, SafeAreaView, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import LoadingView from 'react-native-loading-view';
import LinearGradient from 'react-native-linear-gradient';

export const MainLayout = ({ withHeader, children, backgroundColor, loading }) => {
    return (
        <>
            <StatusBar backgroundColor='#89E8FD' barStyle="light-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <LoadingView loading={loading} indicator={<ActivityIndicator size="large" color="#45ade1" />}>
                    <ScrollView style={{ backgroundColor: backgroundColor || '#E5E5E5' }} contentContainerStyle={{ flexGrow: 1 }}>
                        {withHeader && <LinearGradient colors={['#89E8FD', '#8EC4F5']} style={styles.header} />}
                        {children}
                    </ScrollView>
                </LoadingView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 180,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    }
});
