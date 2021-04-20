import React from 'react'
import { View, Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import * as C from '../../components'
import { styles } from './styles'

export const Confirmation = () => {
  const {} = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.emoji}>😄</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.description}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <C.LabelButton label="Começar" />
      </View>
    </View>
  )
}
