import AsyncStorage from '@react-native-async-storage/async-storage'
import format from 'date-fns/format'

import { PlantsProps, StoragePlantsProps } from './types'

export const storageKey = '@plantmanager'

export const savePlant = async (plant: PlantsProps) => {
  try {
    const data = await AsyncStorage.getItem(`${storageKey}:plants`)
    const prevPlants = data ? (JSON.parse(data) as StoragePlantsProps) : {}

    const newPlant = {
      [plant.id]: {
        data: plant,
      },
    }

    await AsyncStorage.setItem(
      `${storageKey}:plants`,
      JSON.stringify({
        ...newPlant,
        ...prevPlants,
      })
    )
  } catch (err) {
    throw new Error(err)
  }
}

export const loadPlants = async () => {
  try {
    const data = await AsyncStorage.getItem(`${storageKey}:plants`)
    const plants = data ? (JSON.parse(data) as StoragePlantsProps) : {}

    return Object.keys(plants)
      .map(plant => ({
        ...plants[plant].data,
        hour: format(
          new Date(plants[plant].data.dateTimeNotification),
          'HH:mm'
        ),
      }))
      .sort(
        (a, b) =>
          Math.floor(new Date(a.dateTimeNotification).getTime() / 1000) -
          Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
      )
  } catch (err) {
    throw new Error(err)
  }
}

export const saveUserName = async (name: string) => {
  try {
    await AsyncStorage.setItem(`${storageKey}:user`, name)
  } catch (err) {
    throw new Error(err)
  }
}

export const loadUserName = async () => {
  try {
    return await AsyncStorage.getItem(`${storageKey}:user`)
  } catch (err) {
    throw new Error(err)
  }
}
