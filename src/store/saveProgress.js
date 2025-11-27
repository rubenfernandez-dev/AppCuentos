import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveProgress = async (storyId, step, inventory) => {
  try {
    const data = { step, inventory };
    await AsyncStorage.setItem(`progress_${storyId}`, JSON.stringify(data));
  } catch (error) {
    console.error("Error guardando progreso:", error);
  }
};

export const loadProgress = async (storyId) => {
  try {
    const data = await AsyncStorage.getItem(`progress_${storyId}`);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error cargando progreso:", error);
    return null;
  }
};

export const clearProgress = async (storyId) => {
  try {
    await AsyncStorage.removeItem(`progress_${storyId}`);
  } catch (error) {
    console.error("Error borrando progreso:", error);
  }
};
