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
      <Screen name="UserIdentification" component={P.UserIdentification} />
      <Screen name="Confirmation" component={P.Confirmation} />
    </Navigator>
  </>
)

export default AppRoutes
