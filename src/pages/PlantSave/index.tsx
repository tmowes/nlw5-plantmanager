import React, { useMemo, useState } from 'react'
import { View, Text, Platform, Alert } from 'react-native'

import format from 'date-fns/format'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { Entypo } from '@expo/vector-icons'
import { SvgFromUri } from 'react-native-svg'
import { useNavigation, useRoute } from '@react-navigation/native'
import isBefore from 'date-fns/isBefore'
import { RectButton } from 'react-native-gesture-handler'

import * as C from '../../components'
import { colors } from '../../styles'
import { styles } from './styles'
import { PlantsProps } from '../../libs/storage/types'
import { savePlant } from '../../libs/storage'
import { ConfirmationParams } from '../Confirmation/types'

export const PlantSave = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')
  const { goBack, navigate } = useNavigation()
  const { params } = useRoute()
  const { plant } = params as { plant: PlantsProps }

  const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(prev => !prev)
    }
    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date())
      return Alert.alert('Escolha uma hora futura! ⏰')
    }

    if (dateTime) {
      setSelectedDateTime(dateTime)
    }
  }

  const formatedSelectedDateTime = useMemo(
    () => format(selectedDateTime, 'HH:mm'),
    [selectedDateTime]
  )

  const handleSavePlant = async () => {
    try {
      await savePlant({ ...plant, dateTimeNotification: selectedDateTime })

      const confirmationParams: ConfirmationParams = {
        icon: 'hug',
        title: 'Tudo certo',
        subtitle:
          'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
        buttonLabel: 'Muito obrigado :D',
        nextScreen: 'MyPlants',
      }

      return navigate('Confirmation', { ...confirmationParams })
    } catch {
      Alert.alert('Não foi possivel salvar.')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <C.IconButton
          onPress={goBack}
          transparent
          icon={<Entypo name="chevron-left" color={colors.heading} size={32} />}
        />
        <SvgFromUri uri={plant.photo} width="100%" style={styles.plant} />
        <Text style={styles.title}>{plant.name}</Text>
        <Text style={styles.subtitle}>{plant.about}</Text>
      </View>
      <C.TipContainer
        water_tips={plant.water_tips}
        containerStyle={{ marginTop: -64, marginBottom: 32 }}
      />
      <View style={styles.controller}>
        <View style={styles.selector}>
          <Text style={styles.labelAlert}>
            Escolha o melhor horário para ser lembrado:
          </Text>
          {showDatePicker && (
            <DateTimePicker
              mode="time"
              display="spinner"
              value={selectedDateTime}
              onChange={handleChangeTime}
            />
          )}
          {Platform.OS === 'android' && (
            <RectButton
              style={styles.dateTimeAndroid}
              onPress={() => setShowDatePicker(prev => !prev)}
            >
              <Entypo name="clock" color={colors.heading} size={32} />
              <Text style={styles.datetimeText}>
                {`Alterar horário: ${formatedSelectedDateTime}`}
              </Text>
            </RectButton>
          )}
        </View>
      </View>
      <View style={styles.actionContainer}>
        <C.LabelButton label="Cadastrar planta" onPress={handleSavePlant} />
      </View>
    </View>
  )
}
