import React from 'react'
import { Text } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import { styles } from './styles'
import { SimplePlantCardProps } from './types'

export const SimplePlantCard = ({
  icon,
  label,
  ...attrs
}: SimplePlantCardProps) => (
  <RectButton style={styles.button} {...attrs}>
    <SvgFromUri uri={icon} height={64} width={64} />
    <Text style={styles.buttonText}>{label}</Text>
  </RectButton>
)
