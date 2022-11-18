/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from "../screens/Home"
import { MyCar } from "../screens/MyCar"
import { AppStackRoutes } from "./app.stack.routes"
const { Navigator, Screen } = createBottomTabNavigator()

import { Platform } from 'react-native'
import { useTheme } from 'styled-components'

import CarSvg from '../assets/car.svg'
import HomeSvg from '../assets/home.svg'
import PeopleSvg from '../assets/people.svg'



export function AppTabRoutes() {
  const theme = useTheme()
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 78,
          backgroundColor: theme.colors.background_primary
        }
      }}
    >
      <Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <HomeSvg width={24} height={24} fill={color} />
          )
        }}
      />
      <Screen
        name="Profile"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <CarSvg width={24} height={24} fill={color} />
          )
        }}
      />
      <Screen
        name="MyCar"
        component={MyCar}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <PeopleSvg width={24} height={24} fill={color} />
          )
        }}
      />
    </Navigator>
  )
}
