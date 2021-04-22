import React, { useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import formatDistance from 'date-fns/formatDistance'
import { ptBR } from 'date-fns/locale'

import * as C from '../../components'
import { styles } from './styles'
import { PlantsProps } from '../../libs/storage/types'
import { loadPlants } from '../../libs/storage'

export const MyPlants = () => {
  const {} = useNavigation()
  const [plantsList, setPlantsList] = useState<PlantsProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [nextWatered, setNextWatered] = useState<string>('')

  useEffect(() => {
    const loadAsyncStorage = async () => {
      const storagePlants = await loadPlants()

      const nextTime = formatDistance(
        new Date(storagePlants[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: ptBR }
      )

      setNextWatered(`Regue sua ${storagePlants[0].name} daqui a ${nextTime}.`)

      setPlantsList(storagePlants)
    }
    loadAsyncStorage()
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <C.LoadAnimation />
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <C.Header title="Minhas" subtitle="Plantinhas" />
      </View>
      <C.TipContainer water_tips={nextWatered} />
      <View style={styles.plants}>
        <Text style={styles.title}>Próximas regadas</Text>
        <FlatList
          data={plantsList}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <C.ExpandedPlantCard
              icon={item.photo}
              label={item.name}
              nextWateredTime={item.dateTimeNotification}
            />
          )}
        />
      </View>
    </View>
  )
}
