import { ReactNode } from 'react'

import { RectButtonProps } from 'react-native-gesture-handler'

export type IconButtonProps = RectButtonProps & {
  icon: ReactNode
  transparent?: boolean
}
