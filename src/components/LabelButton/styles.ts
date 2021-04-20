import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 38,
    height: 56,
    width: '100%',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.heading,
  },
})
