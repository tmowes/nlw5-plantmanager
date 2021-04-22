import { RectButtonProps } from 'react-native-gesture-handler'

export type ExpandedPlantCardProps = RectButtonProps & {
  icon: string
  label: string
  nextWateredTime: Date
}
