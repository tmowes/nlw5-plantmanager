import React from 'react'
import { Image, SafeAreaView, Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import wateringImg from '../../assets/watering.png'
import * as C from '../../components'
import { styles } from './styles'

export default function Welcome() {
  const { navigate } = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} suas plantas {'\n'} de forma fácil
      </Text>
      <Image source={wateringImg} resizeMode="contain" style={styles.image} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <C.NextButton label=">" onPress={() => navigate('Home')} />
    </SafeAreaView>
  )
}
