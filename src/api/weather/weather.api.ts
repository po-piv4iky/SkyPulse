import { geoClient, weatherClient } from '../client'
import { GeoResponse, WeatherResponse } from './weather.types'

export const getCurrentWeather = async (lat: number, lon: number)=> {
  const response = await weatherClient.get<WeatherResponse>('/weather', {
    params: { lat, lon },
  })
  return response.data
}

export const searchCity = async(cityName: string) => {
    const response = await geoClient.get<GeoResponse>('/direct', {
        params: {
            q: cityName,
            limit: 5
        }
    })
    return response.data
}
