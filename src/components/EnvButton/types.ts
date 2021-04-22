import { RectButtonProps } from 'react-native-gesture-handler'

export type EnvButtonProps = RectButtonProps & {
  label: string
  active?: boolean
}
