export type PlantsEnvProps = {
  key: string
  title: string
}

export type PlantsProps = {
  id: string
  name: string
  about: string
  water_tips: string
  photo: string
  environments: string[]
  frequency: Frequency
  dateTimeNotification: Date
}

export type Frequency = {
  times: number
  repeat_every: string
}

export type StoragePlantsProps = {
  [id: string]: {
    data: PlantsProps
  }
}
