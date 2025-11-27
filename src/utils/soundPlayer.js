import { Audio } from 'expo-av';

// Mapa de sonidos estáticos
const soundMap = {
  dragon: require('../../assets/sounds/dragon.mp3'),
  brujula: require('../../assets/sounds/brujula.mp3'),
  reloj: require('../../assets/sounds/reloj.mp3'),
  linterna: require('../../assets/sounds/linterna.mp3')
};

// Función para reproducir sonido según el archivo
export const playSound = async (file) => {
  try {
    const { sound } = await Audio.Sound.createAsync(soundMap[file]);
    await sound.playAsync();
  } catch (error) {
    console.error('Error al reproducir sonido:', error);
  }
};
