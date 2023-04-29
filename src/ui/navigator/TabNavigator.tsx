import TodayScreen from '../screens/TodayScreen'
import ThisMonthScreen from '../screens/ThisMonthScreen'
import ThisYearScreen from '../screens/ThisYearScreen'
import SettingsScreen from '../screens/SettingsScreen'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator>
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="April" component={ThisMonthScreen} />
      <Tab.Screen name="2023" component={ThisYearScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator
