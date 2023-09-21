import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './components/Start.js';
import Specialties from './components/Specialties.js';


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen 
        name='Start'
        component={Start}/>

      <Stack.Screen 
      name='Specialties'
      component={Specialties}/>
    
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})