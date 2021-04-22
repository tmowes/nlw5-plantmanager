import { StyleSheet } from 'react-native'

import { colors, fonts } from '../../styles'

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.shape,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    maxWidth: '45%',
    paddingVertical: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    marginVertical: 16,
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
})
