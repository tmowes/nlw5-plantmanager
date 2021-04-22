/* eslint-disable radar/no-duplicate-string */
import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.shape,
    paddingTop: 28,
    paddingHorizontal: 20,
    paddingBottom: 72,
  },
  plant: {
    marginTop: -48,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.text,
  },

  controller: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  selector: {
    marginBottom: 40,
  },
  labelAlert: {
    fontSize: 14,
    lineHeight: 23,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.complement,
  },
  dateTimeAndroid: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  datetimeText: {
    fontSize: 20,
    lineHeight: 26,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.text,
  },
  actionContainer: {
    paddingHorizontal: 20,
  },
})
