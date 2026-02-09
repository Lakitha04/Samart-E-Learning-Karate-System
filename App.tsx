import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import index from './app/index'; // Adjust the import according to your file structure
import introduction from './app/introduction'; // Adjust accordingly

// Create a Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={index}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Introduction"
          component={introduction}
          options={{ title: 'Introduction' }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
