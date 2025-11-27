import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const loadProfile = async () => {
      const profile = await AsyncStorage.getItem('user_profile');
      if (profile) {
        const data = JSON.parse(profile);
        setName(data.name);
        setAge(data.age.toString());
        setLanguage(data.language);
      }
    };
    loadProfile();
  }, []);

  const saveProfile = async () => {
    const data = { name, age, language };
    await AsyncStorage.setItem('user_profile', JSON.stringify(data));
    navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nombre:</Text>
      <TextInput value={name} onChangeText={setName} style={{ borderBottomWidth: 1, marginBottom: 20 }} />
      <Text>Edad:</Text>
      <TextInput value={age} onChangeText={setAge} keyboardType="numeric" style={{ borderBottomWidth: 1, marginBottom: 20 }} />
      <Text>Idioma:</Text>
      <TextInput value={language} onChangeText={setLanguage} style={{ borderBottomWidth: 1, marginBottom: 20 }} />
      <Button title="Guardar" onPress={saveProfile} />
    </View>
  );
}
