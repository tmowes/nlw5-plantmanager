import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

import colors from '../styles/colors'
import AppRoutes from './app.routes'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Routes = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  if (isLoading) {
    return (
      <View style={styles.wrapper}>
        <ActivityIndicator size={64} color={colors.green} />
      </View>
    )
  }

  return <AppRoutes />
}

export default Routes
