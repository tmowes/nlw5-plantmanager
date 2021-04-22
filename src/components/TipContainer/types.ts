import { StyleProp, ViewProps, ViewStyle } from 'react-native'

export type TipContainerProps = ViewProps & {
  water_tips: string
  containerStyle?: StyleProp<ViewStyle>
}
