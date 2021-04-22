import { StyleSheet } from 'react-native'

import { colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.shape,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    backgroundColor: 'transparent',
    width: 200,
    height: 200,
  },
})
