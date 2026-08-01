import { create } from 'zustand'
import {
  getCurrentLocation,
  getPermissionStatus,
  requestPermission,
} from '../api/location'
import { Coord } from '../types'

type PermissionStatus = 'undetermined' | 'granted' | 'denied'

interface LocationStore {
  location: Coord | null
  permission: PermissionStatus
  isLoading: boolean
  error: string | null

  loadLocation: () => Promise<Coord | null>
}

export const useLocationStore = create<LocationStore>((set) => ({
  location: null,
  permission: 'undetermined',
  isLoading: false,
  error: null,

  loadLocation: async () => {
    set({ isLoading: true })
    try {
      let permission = await getPermissionStatus()
      if (permission.status === 'undetermined') {
        permission = await requestPermission()
        set({ permission: permission.status })
      }
      if (permission.status !== 'granted') {
        return null
      }
      const coords = await getCurrentLocation()

      set({ location: coords })
      return coords
    } catch {
      set({ error: 'Не удалось определить местоположение' })
      return null
    } finally {
      set({ isLoading: false })
    }
  },
}))
