

import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveProgress, loadProgress, clearProgress } from '../store/saveProgress';
import { playSound } from '../utils/soundPlayer';
import dragonStory from '../stories/dragon.json';
import brujulaStory from '../stories/brujula.json';
import relojStory from '../stories/reloj.json';
import linternaStory from '../stories/linterna.json';
import Inventory from '../components/Inventory';
import PuzzleGame from './PuzzleGame';

const stories = {
  dragon: dragonStory,
  brujula: brujulaStory,
  reloj: relojStory,
  linterna: linternaStory
};

export default function StoryScreen({ route }) {
  const { storyId } = route.params;
  const story = stories[storyId];
  const [step, setStep] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [userName, setUserName] = useState('');
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const fetchProgress = async () => {
      const progress = await loadProgress(storyId);
      if (progress) {
        setStep(progress.step);
        setInventory(progress.inventory);
      }
    };
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const loadProfile = async () => {
      const profile = await AsyncStorage.getItem('user_profile');
      if (profile) {
        const data = JSON.parse(profile);
        setUserName(data.name);
        setLanguage(data.language);
      }
    };
    loadProfile();
  }, []);

  const current = story.chapters[step];

  const handleOption = (option) => {
    let newInventory = inventory;
    if (option.addItem) {
      newInventory = [...inventory, option.addItem];
      setInventory(newInventory);
      playSound('objeto');
    }
    setStep(option.next);
    playSound('decision');
    saveProgress(storyId, option.next, newInventory.filter(Boolean));
  };

  useEffect(() => {
    if (current.id === 4 || current.id === 5) {
      playSound('final');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current.id]);

  if (current.type === 'puzzle') {
    return <PuzzleGame onComplete={() => setStep(current.next[0])} />;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>{userName}, {current.text[language]}</Text>
      {current.image && (
        <Image
          source={require(`../assets/images/${current.image}`)}
          style={{ width: 200, height: 200, marginVertical: 10 }}
        />
      )}
      {current.options && current.options.map((opt, i) => (
        <Button key={i} title={opt.text[language]} onPress={() => handleOption(opt)} />
      ))}
      <Inventory items={inventory} language={language} />
      <Button title="Reiniciar cuento" onPress={() => { clearProgress(storyId); setStep(0); setInventory([]); }} />
    </View>
  );
}

