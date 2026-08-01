import { StyleSheet, View } from 'react-native'
import { useHomeWeather } from '../../hooks/useHomeWeather'
import WeatherCard from './WeatherCard'

export default function WeatherHighlights() {
  const weather = useHomeWeather()

  if (!weather) {
    return null
  }

  return (
    <View style={styles.container}>
      {weather.highlights.map((item) => (
        <WeatherCard
          key={item.id}
          title={item.title}
          icon={item.icon}
          value={item.value}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },
})
