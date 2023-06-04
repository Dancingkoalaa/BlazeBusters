import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import NeighbourcircleScreen from './screens/NeighbourcircleScreen';
import NeighbourMapScreen from './screens/NeighbourMapScreen';
import QuickMessageScreen from './screens/QuickMessageScreen';
import ProfileEditScreen from './screens/user-profile/ProfileEditScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Neighbours circle" component={NeighbourcircleScreen} />
        <Stack.Screen name="Buurtkaart" component={NeighbourMapScreen} />
        <Stack.Screen name="Snel Berichten" component={QuickMessageScreen} />
        <Stack.Screen name="Edit profile" component={ProfileEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


