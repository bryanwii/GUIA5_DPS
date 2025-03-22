import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const PlanetCard = ({ planet, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: planet.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{planet.name}</Text>
        <Text style={styles.type}>{planet.type}</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Distancia: </Text>
            {planet.distanceFromSun}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Tamaño: </Text>
            {planet.size}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    width: width * 0.9,
    shadowColor: '#6D28D9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    color: '#F9FAFB',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  type: {
    color: '#8B5CF6',
    fontSize: 16,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  detailRow: {
    marginBottom: 4,
  },
  detailLabel: {
    color: '#A78BFA',
    fontWeight: 'bold',
  },
  detailText: {
    color: '#D1D5DB',
    fontSize: 14,
  },
});

export default PlanetCard;

