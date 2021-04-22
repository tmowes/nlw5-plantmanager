import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 24,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 23,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  plantsEnvList: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginLeft: 20,
    height: 48,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
})
