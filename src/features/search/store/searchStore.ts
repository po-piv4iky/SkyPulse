import { getCurrentWeather } from '@/features/weather/api/weather.api'
import { create } from 'zustand'
import { searchCity } from '../api/searchCity'
import { SearchResult } from '../types/search.types'
import { mapSearchResult } from '../utils/mapSearchResult'

interface SearchStore {
  results: SearchResult[]
  isLoading: boolean
  error: string | null

  search: (query: string) => Promise<void>
}

export const useSearchStore = create<SearchStore>((set) => ({
  results: [],
  isLoading: false,
  error: null,

  search: async (query) => {
    set({ isLoading: true, error: null })
    try {
      const cities = await searchCity(query)
      const results = await Promise.all(
        cities.map(async (city) => {
          const weather = await getCurrentWeather(city.lat, city.lon)
          return mapSearchResult(weather, city)
        }),
      )
      set({ results, error: null })
    } catch {
      set({ results: [], error: 'Не удалось найти город' })
    } finally {
      set({
        isLoading: false,
      })
    }
  },
}))
