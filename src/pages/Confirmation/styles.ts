import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  form: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 54,
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    textAlign: 'center',
    marginTop: 24,
  },
  description: {
    fontSize: 17,
    lineHeight: 25,
    color: colors.heading,
    fontFamily: fonts.text,
    textAlign: 'center',
    marginVertical: 24,
  },
})
