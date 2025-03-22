import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Importar las pantallas
import HomeScreen from './src/screens/HomeScreen';
import PlanetDetailScreen from './src/screens/PlanetDetailScreen';

// Crear el navegador Stack
const Stack = createNativeStackNavigator();

// Tema personalizado oscuro para la navegación
const SpaceTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8A2BE2', // Violeta intenso
    background: '#0C0E18', // Azul oscuro casi negro
    card: '#1A1B2E', // Azul oscuro para tarjetas
    text: '#E6E6FA', // Lavanda claro para texto
    border: '#3D3D5C', // Borde azul grisáceo
    notification: '#FF6B6B', // Rojo coral para notificaciones
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={SpaceTheme}>
        <StatusBar style="light" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1A1B2E',
            },
            headerTintColor: '#E6E6FA',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            contentStyle: {
              backgroundColor: '#0C0E18',
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              title: 'Sistema Solar',
              headerTransparent: true,
              headerLargeTitle: true,
            }} 
          />
          <Stack.Screen 
            name="PlanetDetail" 
            component={PlanetDetailScreen} 
            options={({ route }) => ({ 
              title: route.params?.name || 'Detalle del Planeta',
              headerTransparent: true,
            })} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

