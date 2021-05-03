// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import { useFonts } from 'expo-font'

import BookDetail from './screens/BookDetail';
import Tabs from './navigation/tabs';

const theme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        border:'transparent'
    }
}

const Stack = createStackNavigator()

export default function App() {

    const [loaded] = useFonts({
        RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
        RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
        RobotoBlack: require('./assets/fonts/Roboto-Black.ttf'),
    
      });
      
      if (!loaded) {
        return null;
      }
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
            initialRouteName={'Home'}
            > 
                <Stack.Screen name='Home' component={Tabs} />{/* bottom tabs */}
                <Stack.Screen name='BookDetail' component={BookDetail} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
