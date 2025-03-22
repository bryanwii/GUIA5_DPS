import React from 'react';
import { StyleSheet, View, FlatList, Text, StatusBar, ImageBackground } from 'react-native';
import PlanetCard from '../components/PlanetCard';
import planets from '../data/planets';

const HomeScreen = ({ navigation }) => {
  const renderPlanetCard = ({ item }) => (
    <PlanetCard
      planet={item}
      onPress={() => navigation.navigate('PlanetDetail', { planetId: item.id })}
    />
  );

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1000' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Sistema Solar</Text>
        <Text style={styles.subtitle}>Explora los planetas de nuestro sistema</Text>
        
        <FlatList
          data={planets}
          renderItem={renderPlanetCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'rgba(13, 17, 23, 0.85)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F9FAFB',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#A78BFA',
    textAlign: 'center',
    marginBottom: 24,
  },
  listContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});

export default HomeScreen;

