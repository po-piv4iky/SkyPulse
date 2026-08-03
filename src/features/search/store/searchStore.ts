import { GeoLocation } from '@/features/weather/types/weather.api'
import { create } from 'zustand'
import { searchCity } from '../api/searchCity'

interface SearchStore {
  query: string
  results: GeoLocation[]
  isLoading: boolean
  error: string | null

  setQuery: (query: string) => void
  search: (query: string) => Promise<void>
}

export const useSearchStore = create<SearchStore>((set) => ({
  query: '',
  results: [],
  isLoading: false,
  error: null,

  setQuery: (query) => {
    set({ query })
  },
  search: async (query) => {
    if (!query.trim()) {
      set({
        results: [],
        isLoading: false,
        error: null,
      })
      return
    }
    set({ isLoading: true, error: null })
    try {
      const cities = await searchCity(query)
      set({ results: cities })
    } catch {
      set({ error: 'Не удалось найти город' })
    } finally {
      set({
        isLoading: false,
      })
    }
  },
}))
