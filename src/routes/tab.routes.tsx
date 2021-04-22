import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import * as P from '../pages'
import { colors } from '../styles'

const { Navigator, Screen } = createBottomTabNavigator()

const TabRoutes = () => (
  <Navigator
    tabBarOptions={{
      activeTintColor: colors.green,
      inactiveTintColor: colors.heading,
      labelPosition: 'beside-icon',
      style: {
        alignItems: 'center',
        height: 64,
      },
    }}
  >
    <Screen
      name="PlantSelect"
      component={P.PlantSelect}
      options={{
        tabBarLabel: 'Nova Planta',
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="add-circle-outline" size={size} color={color} />
        ),
      }}
    />
    <Screen
      name="MyPlants"
      component={P.MyPlants}
      options={{
        tabBarLabel: 'Minhas Plantas',
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons
            name="format-list-bulleted"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Navigator>
)

export default TabRoutes
