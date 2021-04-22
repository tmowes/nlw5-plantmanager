import React from 'react'
import { Text } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'

import { styles } from './styles'
import { EnvButtonProps } from './types'

export const EnvButton = ({
  label,
  active = false,
  ...attrs
}: EnvButtonProps) => (
  <RectButton style={[styles.button, active && styles.buttonActive]} {...attrs}>
    <Text style={[styles.buttonText, active && styles.buttonTextActive]}>
      {label}
    </Text>
  </RectButton>
)
