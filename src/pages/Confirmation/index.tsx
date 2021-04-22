import React from 'react'
import { View, Text } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'

import * as C from '../../components'
import { styles } from './styles'
import { ConfirmationParams } from './types'

const emojis = {
  smile: '😄',
  hug: '🤗',
}

export const Confirmation = () => {
  const { navigate } = useNavigation()
  const { params } = useRoute()
  const {
    icon,
    title,
    subtitle,
    buttonLabel,
    nextScreen,
  } = params as ConfirmationParams

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{subtitle}</Text>
        <C.LabelButton
          label={buttonLabel}
          onPress={() => navigate(nextScreen)}
        />
      </View>
    </View>
  )
}
