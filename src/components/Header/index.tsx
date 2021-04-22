import React from 'react'
import { View, Text, Image } from 'react-native'

import { styles } from './styles'
import { HeaderProps } from './types'

export const Header = (props: HeaderProps) => {
  const { title, subtitle } = props

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greetings}>{title}</Text>
        <Text style={styles.title}>{subtitle}</Text>
      </View>
      <Image
        source={{ uri: 'https://github.com/tmowes.png' }}
        style={styles.avatar}
      />
    </View>
  )
}
