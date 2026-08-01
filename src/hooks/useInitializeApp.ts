import { DEFAULT_LOCATION } from '@/features/location/constants'
import { useLocationStore } from '@/features/location/store/locationStore'
import { useWeatherStore } from '@/features/weather/store/weatherStore'
import { useEffect } from 'react'

export const useInitializeApp = () => {
  const loadLocation = useLocationStore((s) => s.loadLocation)
  const loadWeather = useWeatherStore((s) => s.loadWeather)
  useEffect(() => {
    async function initialize() {
      const coords = await loadLocation()
      await loadWeather(coords ?? DEFAULT_LOCATION)
    }
    initialize()
  }, [loadLocation, loadWeather])
}
