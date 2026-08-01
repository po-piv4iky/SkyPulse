import { Coord } from '@/features/location/types'
import { weatherClient } from '@/shared/api/client'
import { WeatherResponse } from '../types/weather.api'

export const getCurrentWeather = async (coords: Coord): Promise<WeatherResponse> => {
  const { data } = await weatherClient.get<WeatherResponse>('/weather', {
    params: { lat: coords.latitude, lon: coords.longitude },
  })
  return data
}

// export const searchCity = async (cityName: string) => {
//   const response = await geoClient.get<GeoResponse>('/direct', {
//     params: {
//       q: cityName,
//       limit: 5,
//     },
//   })
//   return response.data
// }
