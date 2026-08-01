import StyledText from '@/shared/components/StyledText/StyledTex'
import { Image, StyleSheet, View } from 'react-native'
import { useHomeWeather } from '../hooks/useHomeWeather'
import WeatherHighlights from './WeatherHighlights/WeatherHighlights'

export default function WeatherContent() {
  const weather = useHomeWeather()

  if (!weather) {
    return null
  }

  return (
    <View style={styles.container}>
      <StyledText style={styles.date}>
        {weather.weekday}, {weather.date} · {weather.time}
      </StyledText>

      {weather.iconUrl && (
        <Image
          source={{ uri: weather.iconUrl }}
          style={styles.icon}
          resizeMode="contain"
        />
      )}

      <StyledText variant="headlineXl" style={styles.temperature}>
        {Math.round(weather.feelsLike)}°
      </StyledText>

      <StyledText variant="headlineMd" style={styles.description}>
        {weather.description}
      </StyledText>

      <View style={styles.rangeContainer}>
        <StyledText>H: {Math.round(weather.tempMax)}°</StyledText>

        <StyledText>L: {Math.round(weather.tempMin)}°</StyledText>
      </View>

      <WeatherHighlights />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 30,
  },

  date: {
    opacity: 0.8,
  },

  icon: {
    width: 130,
    height: 130,
    marginBottom: 8,
  },

  temperature: {
    marginBottom: 6,
  },

  description: {
    textTransform: 'capitalize',
    marginBottom: 20,
  },

  rangeContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
})
