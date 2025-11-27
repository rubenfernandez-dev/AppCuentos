import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function PuzzleGame({ onComplete }) {
  const [solved, setSolved] = useState(false);

  const solvePuzzle = () => {
    setSolved(true);
    onComplete();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Minijuego: Ordena las piezas del símbolo mágico.</Text>
      <Text>(Aquí iría la lógica de arrastrar piezas con librerías como react-native-draggable)</Text>
      {!solved ? (
        <Button title="Resolver Puzzle" onPress={solvePuzzle} />
      ) : (
        <Text>¡Puzzle completado!</Text>
      )}
    </View>
  );
}
