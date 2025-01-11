// src/components/LandForm.tsx

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Land } from './LandModel';

interface Props {
  onSubmit: (land: Land) => void;
}

const LandForm: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [soilType, setSoilType] = useState('');

  const handleSubmit = (): void => {
    if (name && size && soilType) {
      onSubmit({ name, size, soilType });
      setName('');
      setSize('');
      setSoilType('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Arazi Adı"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Arazi Boyutu"
        value={size}
        onChangeText={setSize}
      />
      <TextInput
        style={styles.input}
        placeholder="Toprak Türü"
        value={soilType}
        onChangeText={setSoilType}
      />
      <Button title="Kaydet" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default LandForm;
