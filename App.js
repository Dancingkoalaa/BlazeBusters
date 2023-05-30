import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import NeighbourcircleScreen from './screens/NeighbourcircleScreen';
import NeighbourMapScreen from './screens/NeighbourMapScreen';
import QuickMessageScreen from './screens/QuickMessageScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profiel" component={ProfileScreen} />
        <Stack.Screen name="Neighbours circle" component={NeighbourcircleScreen} />
        <Stack.Screen name="Buurtkaart" component={NeighbourMapScreen} />
        <Stack.Screen name="Snel Berichten" component={QuickMessageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



