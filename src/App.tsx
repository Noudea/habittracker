import React from 'react'
import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MenuProvider } from 'react-native-popup-menu'

import TabNavigator from './ui/navigator/TabNavigator'

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <MenuProvider>
        <TabNavigator />
      </MenuProvider>
    </NavigationContainer>
  )
}

export default App
