import { GeoLocation, WeatherResponse } from '@/features/weather/types/weather.types'
import { SearchResult } from '../types/search.types'

export const mapSearchResult = (
  weather: WeatherResponse,
  city: GeoLocation,
): SearchResult => {
  return {
    name: city.name,
    country: city.country,
    state: city.state,
    lat: city.lat,
    lon: city.lon,
    temperature: weather.main.temp,
    icon: weather?.weather[0]?.icon,
    description: weather.weather[0].description,
  }
}
