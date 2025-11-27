import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translations } from '../store/translations';

export default function HomeScreen({ navigation }) {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const loadProfile = async () => {
      const profile = await AsyncStorage.getItem('user_profile');
      if (profile) {
        const data = JSON.parse(profile);
        setLanguage(data.language);
      }
    };
    loadProfile();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>
        Biblioteca de Cuentos Interactivos
      </Text>
      <Button title={translations[language].dragon} onPress={() => navigation.navigate('Story', { storyId: 'dragon' })} />
      <Button title={translations[language].brujula} onPress={() => navigation.navigate('Story', { storyId: 'brujula' })} />
      <Button title={translations[language].reloj} onPress={() => navigation.navigate('Story', { storyId: 'reloj' })} />
      <Button title={translations[language].linterna} onPress={() => navigation.navigate('Story', { storyId: 'linterna' })} />
    </View>
  );
}
