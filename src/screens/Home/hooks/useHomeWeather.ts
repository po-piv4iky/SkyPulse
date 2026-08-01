import { useWeatherStore } from '@/features/weather/store/weatherStore'
import { formatDate } from '@/features/weather/utils/formatDate'
import { formatTime } from '@/features/weather/utils/formatTime'
import { formatWeekday } from '@/features/weather/utils/formatWeekday'
import { getWeatherIcon } from '@/features/weather/utils/getWeatherIcon'
import { HomeWeather, WeatherHighlight } from './weather.ui'

export const useHomeWeather = (): HomeWeather | null => {
  const weather = useWeatherStore((s) => s.weather)
  if (!weather) {
    return null
  }

  const highlights: WeatherHighlight[] = [
    {
      id: 'humidity',
      title: 'Humidity',
      value: `${weather.main.humidity}%`,
      icon: 'water-outline',
    },
    {
      id: 'wind',
      title: 'Wind',
      value: `${weather.wind.speed} m/s`,
      icon: 'leaf-outline',
    },
    {
      id: 'sunrise',
      title: 'Sunrise',
      value: formatTime(weather.sys.sunrise),
      icon: 'sunny-outline',
    },
    {
      id: 'sunset',
      title: 'Sunset',
      value: formatTime(weather.sys.sunset),
      icon: 'moon-outline',
    },
    {
      id: 'pressure',
      title: 'Pressure',
      value: `${weather.main.pressure} hPa`,
      icon: 'speedometer-outline',
    },
    {
      id: 'Visibility',
      title: 'Visibility',
      value: `${weather.visibility / 1000} km`,
      icon: 'eye-outline',
    },
  ]

  return {
    city: weather.name, // город
    date: formatDate(weather.dt), // день, месяц
    weekday: formatWeekday(weather?.dt), // день недели
    time: formatTime(weather.dt), // текущее время
    iconUrl: getWeatherIcon(weather?.weather[0]?.icon), // строка с путём к иконке
    temperature: Math.round(weather.main.temp), // текущая температура
    description: weather.weather[0].description, // описание погоды
    tempMax: weather.main.temp_max,
    tempMin: weather.main.temp_min,

    feelsLike: Math.round(weather.main.feels_like), // ощущается как
    humidity: weather.main.humidity,
    sunrise: formatTime(weather.sys.sunrise),
    sunset: formatTime(weather.sys.sunset),
    windSpeed: weather.wind.speed,
    highlights,
  }
}
