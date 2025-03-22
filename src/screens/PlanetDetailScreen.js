import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, StatusBar } from 'react-native';
import planets from '../data/planets';

const { width } = Dimensions.get('window');

const PlanetDetailScreen = ({ route }) => {
  const { planetId } = route.params;
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const foundPlanet = planets.find(p => p.id === planetId);
    setPlanet(foundPlanet);
  }, [planetId]);

  if (!planet) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: planet.image }} style={styles.image} />
        
        <View style={styles.headerContainer}>
          <Text style={styles.name}>{planet.name}</Text>
          <Text style={styles.type}>{planet.type}</Text>
        </View>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.description}>{planet.description}</Text>
          
          <Text style={styles.sectionTitle}>Características</Text>
          
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Distancia al Sol:</Text>
              <Text style={styles.infoValue}>{planet.distanceFromSun}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Tamaño:</Text>
              <Text style={styles.infoValue}>{planet.size}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Período Orbital:</Text>
              <Text style={styles.infoValue}>{planet.orbitalPeriod}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F172A',
  },
  loadingText: {
    color: '#F9FAFB',
    fontSize: 18,
  },
  image: {
    width: width,
    height: width * 0.75,
    resizeMode: 'cover',
  },
  headerContainer: {
    padding: 20,
    backgroundColor: 'rgba(31, 41, 55, 0.95)',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F9FAFB',
    marginBottom: 5,
  },
  type: {
    fontSize: 18,
    color: '#8B5CF6',
    fontStyle: 'italic',
  },
  detailsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#A78BFA',
    marginBottom: 10,
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#D1D5DB',
    marginBottom: 10,
  },
  infoCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  infoLabel: {
    fontSize: 16,
    color: '#A78BFA',
    fontWeight: 'bold',
  },

