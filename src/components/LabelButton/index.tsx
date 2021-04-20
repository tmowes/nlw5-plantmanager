import React from 'react'
import { Text } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'

import { styles } from './styles'
import { LabelButtonProps } from './types'

export const LabelButton = ({ label, ...attrs }: LabelButtonProps) => (
  <RectButton style={styles.button} {...attrs}>
    <Text style={styles.buttonText}>{label}</Text>
  </RectButton>
)
