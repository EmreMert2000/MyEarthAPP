
import React from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';
import useLandViewModel from '../LandViewModel';
import LandForm from '../LandForm';


const LandListScreen: React.FC = () => {
  const { lands, addLand, deleteLand } = useLandViewModel();

  return (
    <View style={styles.container}>
      <FlatList
        data={lands}
        keyExtractor={(item) => item.id?.toString() || ''}
        renderItem={({ item }) => (
          <View style={styles.landItem}>
            <Text>{item.name}</Text>
            <Text>Boyut: {item.size}</Text>
            <Text>Toprak Türü: {item.soilType}</Text>
            <Button title="Sil" onPress={() => deleteLand(item.id!)} />
          </View>
        )}
      />
      <LandForm onSubmit={addLand} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  landItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
});

export default LandListScreen;
