import React from 'react'
import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabNavigator from './ui/navigator/TabNavigator'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App
