import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.heading,
  },
})
