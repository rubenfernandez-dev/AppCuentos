import React from 'react';
import { View, Text } from 'react-native';

export default function Inventory({ items, language }) {
  const messages = {
    es: "No tienes objetos todavía.",
    en: "You don't have any items yet.",
    de: "Du hast noch keine Gegenstände.",
    fr: "Tu n'as pas encore d'objets."
  };

  return (
    <View style={{ marginTop: 20, padding: 10, borderWidth: 1, borderColor: '#ccc' }}>
      <Text style={{ fontWeight: 'bold' }}>Inventario:</Text>
      {items.length === 0 ? (
        <Text>{messages[language]}</Text>
      ) : (
        items.map((item, i) => <Text key={i}>• {item}</Text>)
      )}
    </View>
  );
}
