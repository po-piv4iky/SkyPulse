import { Coord } from '@/features/location/types'
import { weatherClient } from '@/shared/api/client'
import { WeatherResponse } from '../types/weather.types'

export const getCurrentWeather = async (lat: number, lon: number): Promise<WeatherResponse> => {
  const { data } = await weatherClient.get<WeatherResponse>('/weather', {
    params: { lat, lon },
  })
  return data
}
