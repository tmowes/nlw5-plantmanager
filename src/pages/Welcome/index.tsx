import React from 'react'
import { Image, SafeAreaView, Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import wateringImg from '../../assets/watering.png'
import * as C from '../../components'
import { styles } from './styles'
import colors from '../../styles/colors'

export const Welcome = () => {
  const { navigate } = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie{'\n'}suas plantas de{'\n'}forma fácil
      </Text>
      <Image source={wateringImg} resizeMode="contain" style={styles.image} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <C.IconButton
        onPress={() => navigate('UserIdentification')}
        icon={<Entypo name="chevron-right" color={colors.white} size={32} />}
      />
    </SafeAreaView>
  )
}
