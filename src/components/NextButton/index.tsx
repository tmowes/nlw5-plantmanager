import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'
import { NextButtonProps } from './types'

export default function NextButton({ label, ...attrs }: NextButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8} {...attrs}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  )
}
