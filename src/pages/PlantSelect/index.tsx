import React, { useCallback, useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import * as C from '../../components'
import { api } from '../../services'
import { colors } from '../../styles'
import { styles } from './styles'
import { PlantsEnvProps, PlantsProps } from '../../libs/storage/types'
import { loadUserName } from '../../libs/storage'

export const PlantSelect = () => {
  const [plantsEnv, setPlantsEnv] = useState<PlantsEnvProps[]>([])
  const [selectedEnv, setSelectedEnv] = useState('all')
  const [plants, setPlants] = useState<PlantsProps[]>([])
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [loadMore, setLoadMore] = useState(false)
  const [name, setName] = useState<string>('')

  const { navigate } = useNavigation()

  const loadPlants = useCallback(async () => {
    const { data } = await api.get<PlantsProps[]>('plants', {
      params: {
        _sort: 'name',
        _order: 'asc',
        _page: page,
        _limit: 8,
      },
    })
    if (!data) {
      return setIsLoading(true)
    }
    if (page > 1) {
      setPlants(prev => [...prev, ...data])
      setFilteredPlants(prev => [...prev, ...data])
    } else {
      setPlants(data)
      setFilteredPlants(data)
    }
    setIsLoading(false)
    return setLoadMore(false)
  }, [page])

  const handleEnvSelection = (env: string) => {
    setSelectedEnv(env)

    if (env === 'all') {
      return setFilteredPlants(plants)
    }

    return setFilteredPlants(
      plants.filter(plant => plant.environments.includes(env))
    )
  }

  const handleLoadMore = (distance: number) => {
    if (distance < 1) {
      return
    }
    setLoadMore(true)
    setPage(prev => prev + 1)
    loadPlants()
  }

  useEffect(() => {
    const loadEnvironment = async () => {
      const { data } = await api.get<PlantsEnvProps[]>('plants_environments')
      setPlantsEnv(data)
    }
    loadEnvironment()
  }, [])

  useEffect(() => {
    loadPlants()
  }, [loadPlants])

  const plantSelect = (plant: PlantsProps) => {
    navigate('PlantSave', { plant })
  }

  useEffect(() => {
    const loadAsyncStorage = async () => {
      const user = await loadUserName()
      setName(user || '')
    }
    loadAsyncStorage()
  }, [])

  if (isLoading) {
    return <C.LoadAnimation />
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <C.Header title="Olá," subtitle={name} />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.plantsEnvList}
        >
          {plantsEnv.map(({ key, title }) => (
            <C.EnvButton
              key={key}
              label={title}
              active={key === selectedEnv}
              onPress={() => handleEnvSelection(key)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleLoadMore(distanceFromEnd)
          }
          renderItem={({ item }) => (
            <C.SimplePlantCard
              icon={item.photo}
              label={item.name}
              onPress={() => plantSelect(item)}
            />
          )}
          ListFooterComponent={
            loadMore ? (
              <ActivityIndicator size="large" color={colors.green} />
            ) : null
          }
        />
      </View>
    </View>
  )
}
