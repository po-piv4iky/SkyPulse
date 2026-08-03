import { GeoLocation } from '@/features/weather/types/weather.api'
import { geoClient } from '@/shared/api/client'

export const searchCity = async (cityName: string): Promise<GeoLocation[]> => {
  const { data } = await geoClient.get('/direct', {
    params: {
      q: cityName,
      limit: 5,
    },
  })
  return data
}
