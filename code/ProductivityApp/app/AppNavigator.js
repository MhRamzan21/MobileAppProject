import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Screens/Login';
import Signup from '../components/Screens/Signup';
import Profile from "../components/Screens/Profile"
import Privacy from '../components/Screens/Privacy';
import ChangePass from '../components/Screens/ChangePass';
import DeleteAccount from '../components/Screens/DeleteAccount';
import Dashboard from '../components/Screens/Dashboard';
import AddTask from '../components/Screens/AddTask';
import TaskDetails from '../components/Screens/TaskDetails';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
      <Stack.Screen name= "Privacy" component={Privacy} />
      <Stack.Screen name= "ChangePass" component={ChangePass} />
      <Stack.Screen name="dash" component={Dashboard} />
      <Stack.Screen name='add' component={AddTask} />
      <Stack.Screen name='TaskDetails' component={TaskDetails} />

    </Stack.Navigator>
  );
}