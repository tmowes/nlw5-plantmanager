import React from 'react'
import { StatusBar } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'

import * as P from '../pages'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes = () => (
  <>
    <StatusBar
      barStyle="light-content"
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
      <Screen name="Home" component={P.Home} />
    </Navigator>
  </>
)

export default AppRoutes
