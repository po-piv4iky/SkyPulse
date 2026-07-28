export interface WeatherResponse {
  name: string
  weather: {
    description: 'overcast clouds'
    icon: '04n'
  }[]
  main: {
    temp: number
    feels_like: number
    humidity: number
  }
  wind: {
    speed: number
  }
}

export interface GeoResponse {
  name: string
  lat: number
  lon: number
  country: string
  state?: string
}[]
