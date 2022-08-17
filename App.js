import { View, Text } from 'react-native'
import React from 'react'
import Home from './components/Home'
import Detail from './components/Detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// constante pour la navigation
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"
      //Pour cacher le header de la navigation
      screenOptions={{headerShown:false}}>
      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App