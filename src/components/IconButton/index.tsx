import React from 'react'

import { RectButton } from 'react-native-gesture-handler'

import { styles } from './styles'
import { IconButtonProps } from './types'

export const IconButton = ({ icon, ...attrs }: IconButtonProps) => (
  <RectButton style={styles.button} {...attrs}>
    {icon}
  </RectButton>
)
