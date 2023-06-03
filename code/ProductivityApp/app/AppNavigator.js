import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Screens/Login';
import Signup from '../components/Screens/Signup';
import Profile from "../components/Screens/Profile"

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
}