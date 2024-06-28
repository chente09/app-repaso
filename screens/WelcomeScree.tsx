import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Materia {
  id: string;
  nombre: string;
  imagen: string;
}
interface Deporte {
  id: string;
  nombre: string;
  imagen: string;
}
const materiasFavoritas: Materia[] = [
  { id: '1', nombre: 'JavaScript', imagen: 'https://i.pinimg.com/564x/7b/56/8e/7b568e01183f783a02fa62c7691e3d84.jpg' },
  { id: '2', nombre: 'AppWeb', imagen: 'https://i.pinimg.com/236x/e0/74/2e/e0742eb995530288e38912fae386887e.jpg' },
  { id: '3', nombre: 'AppMoviles', imagen: 'https://i.pinimg.com/564x/66/3b/2c/663b2c88249b087aaeab7180dd19df1e.jpg' },
  { id: '4', nombre: 'Office Essentials', imagen: 'https://i.pinimg.com/564x/61/93/2e/61932e4a918b1033349807b27670c69c.jpg' },
  { id: '5', nombre: 'Base de Datos', imagen: 'https://i.pinimg.com/736x/7b/e1/df/7be1df033d0455595a3b585f17d7b754.jpg' },
];
const deportesFavoritos: Deporte[] = [
  { id: '1', nombre: 'Karate', imagen: 'https://i.pinimg.com/564x/cd/6e/0f/cd6e0fe86beb0fd68208a55b6e3b6ec8.jpg' },
  { id: '2', nombre: 'Running', imagen: 'https://i.pinimg.com/564x/31/89/19/31891953c5805b3b27693e3aa3350811.jpg' },
  { id: '3', nombre: 'Trail', imagen: 'https://i.pinimg.com/564x/68/18/4f/68184f8579b9a16de49246b372fd70a3.jpg' },
  { id: '4', nombre: 'Natación', imagen: 'https://i.pinimg.com/564x/90/b2/a1/90b2a1a65d6577dcd745c759c1662a4a.jpg' },
  { id: '5', nombre: 'Ciclismo', imagen: 'https://i.pinimg.com/564x/50/22/75/502275d26875c19aab1f937c5f4f638a.jpg' },
];

export default function WelcomeScreen() {
  return (
    // Nombre, FlatList en modo horizontal, materias favoritas con cuatro imágenes,
    // FlatList con cuatro series o deportes favoritos
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Vicente Nenger</Text>
      <Text style={styles.sectionTitle}>Materias Favoritas</Text>
      <FlatList
        horizontal
        data={materiasFavoritas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imagen }} style={styles.image} />
            <Text style={styles.item}>{item.nombre}</Text>
          </View>
        )}
      />
      <Text style={styles.sectionTitle}>Deportes Favoritos</Text>
      <FlatList
        data={deportesFavoritos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer2}>
            <Image source={{ uri: item.imagen }} style={styles.image2} />
            <Text style={styles.item}>{item.nombre}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16,
    backgroundColor:'#8e837bf7'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom:1,
    height:400
  },
  itemContainer2: {
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 20,
    
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginBottom: 10,
  },
  image2: {
    width: 200,
    height: 200,
    borderRadius: 25,
    marginBottom: 10,
  },
});
