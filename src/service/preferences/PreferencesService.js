import AsyncStorage from '@react-native-community/async-storage';

export class PreferencesService {
    async markFinishedIntro() {
        await AsyncStorage.setItem('finished-intro', JSON.stringify(true));
    }

    async isFinishedIntro() {
        const finishedIntro = await AsyncStorage.getItem('finished-intro');

        if (!finishedIntro) {
            return false;
        }
        return JSON.parse(finishedIntro);
    }
}