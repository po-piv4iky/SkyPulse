import { Coord } from '@/features/location/types'
import { create } from 'zustand'
import { getCurrentWeather } from '../api/weather.api'
import { WeatherResponse } from '../types/weather.api'

interface WeatherStore {
  weather: WeatherResponse | null
  isLoading: boolean
  error: string | null
  loadWeather: (coords: Coord) => Promise<void>
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  weather: null,
  isLoading: false,
  error: null,
  loadWeather: async (coords) => {
    try {
      const weather = await getCurrentWeather(coords)
      set({ weather: weather })
    } catch {
      set({ error: 'Не удалось загрузить погоду' })
    } finally {
      set({ isLoading: false })
    }
  },
}))
