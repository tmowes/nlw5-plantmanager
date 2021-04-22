import { View, Text, Image } from 'react-native'
import React from 'react'

import waterdropImg from '../../assets/waterdrop.png'
import { styles } from './styles'
import { TipContainerProps } from './types'

export const TipContainer = (props: TipContainerProps) => {
  const { water_tips, containerStyle = {}, ...attrs } = props
  return (
    <View style={[styles.tipContainer, containerStyle]} {...attrs}>
      <Image source={waterdropImg} style={styles.tipImage} />
      <Text style={styles.tipText}>{water_tips} </Text>
    </View>
  )
}
