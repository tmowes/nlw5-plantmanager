import { StyleSheet } from 'react-native'

import { colors, fonts } from '../../styles'

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.shape,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 26,
    color: colors.heading,
    fontFamily: fonts.heading,
    textAlign: 'left',
    marginRight: 'auto',
  },
  wateredText: {
    fontSize: 14,
    color: colors.body_dark,
    fontFamily: fonts.complement,
  },
  timeText: {
    fontSize: 14,
    textAlign: 'right',
    color: colors.heading,
    fontFamily: fonts.text,
  },
})
