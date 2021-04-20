import React, { useEffect, useState } from 'react'

import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost'

import AppRoutes from './app.routes'

const Routes = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  })

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 200)
  }, [])

  if (isLoading && !fontsLoaded) {
    return <AppLoading />
  }

  return <AppRoutes />
}

export default Routes
