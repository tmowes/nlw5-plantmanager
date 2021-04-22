import { View } from 'react-native'
import React, { useMemo } from 'react'
import { Text } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'
import format from 'date-fns/format'

import { styles } from './styles'
import { ExpandedPlantCardProps } from './types'

export const ExpandedPlantCard = (props: ExpandedPlantCardProps) => {
  const { icon, label, nextWateredTime, ...attrs } = props
  const formattedWateredTime = useMemo(
    () => format(new Date(nextWateredTime), 'HH:mm'),
    [nextWateredTime]
  )
  return (
    <RectButton style={styles.button} {...attrs}>
      <SvgFromUri uri={icon} height={48} width={48} />
      <Text style={styles.buttonText}>{label}</Text>
      <View>
        <Text style={styles.wateredText}>Regar às</Text>
        <Text style={styles.timeText}>{formattedWateredTime}</Text>
      </View>
    </RectButton>
  )
}
