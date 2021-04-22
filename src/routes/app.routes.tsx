import React from 'react'
import { StatusBar } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'

import * as P from '../pages'
import TabRoutes from './tab.routes'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes = () => (
  <>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    />
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Screen name="Welcome" component={P.Welcome} />
      <Screen name="UserIdentification" component={P.UserIdentification} />
      <Screen name="Confirmation" component={P.Confirmation} />
      <Screen name="PlantSelect" component={TabRoutes} />
      <Screen name="PlantSave" component={P.PlantSave} />
      <Screen name="MyPlants" component={TabRoutes} />
    </Navigator>
  </>
)

export default AppRoutes
