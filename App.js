import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import NeighbourcircleScreen from './screens/NeighbourcircleScreen';
import NeighbourMapScreen from './screens/NeighbourMapScreen';
import QuickMessageScreen from './screens/QuickMessageScreen';
import ProfileEditScreen from './screens/user-profile/ProfileEditScreen';
import NeighbourProfileScreen from './screens/user-profile/NeighbourProfileScreen';
import ImageSelector from './screens/Imagepicker';
import NotificationScreen from './screens/NotificationScreen';
import EventScreen from './screens/EventScreen';

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
        <Stack.Screen name="Neighbour profile" component={NeighbourProfileScreen} />
        <Stack.Screen name="Imagepicker" component={ImageSelector} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Neighbour profile" component={EventScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


