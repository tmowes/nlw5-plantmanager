import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import * as C from '../../components'
import colors from '../../styles/colors'
import { styles } from './styles'

export const UserIdentification = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState('')

  const { navigate } = useNavigation()

  const handleInputChange = (value: string) => {
    setIsFilled(!!value)
    setName(value)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <Text style={styles.emoji}>{isFilled ? '😄' : '😀'}</Text>
          <Text style={styles.title}>Como podemos{'\n'}chamar você?</Text>
          <TextInput
            placeholder="Digite um nome"
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            value={name}
            onChangeText={handleInputChange}
            style={[
              styles.input,
              (isFocused || isFilled) && { borderBottomColor: colors.green },
            ]}
          />
          <C.LabelButton
            label="Continuar"
            onPress={() => navigate('Confirmation')}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
