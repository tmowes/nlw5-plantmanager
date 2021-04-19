import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.heading,
  },
  image: {
    width: '100%',
  },
  button: {
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 38,
    height: 56,
    width: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
})
