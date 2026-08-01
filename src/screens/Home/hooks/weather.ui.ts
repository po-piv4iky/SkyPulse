import { Ionicons } from '@expo/vector-icons'

export type WeatherHighlight = {
  id: string
  title: string
  value: string
  icon: React.ComponentProps<typeof Ionicons>['name']
}

export type HomeWeather = {
  city: string

  date: string
  weekday: string
  time: string

  iconUrl: string | null

  temperature: number
  feelsLike: number

  description: string

  tempMax: number
  tempMin: number

  humidity: number
  sunrise: string
  sunset: string
  windSpeed: number

  highlights: WeatherHighlight[]
}
