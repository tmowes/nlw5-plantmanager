import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.shape,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 44,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  buttonActive: {
    backgroundColor: colors.green_light,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 24,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  buttonTextActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
})
