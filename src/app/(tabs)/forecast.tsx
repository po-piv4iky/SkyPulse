import GradientBackground from '@/shared/components/GradientBackground/GradientBackground'
import { StyleSheet, Text } from 'react-native'

export default function Forecast() {
  return (
    <GradientBackground style={styles.container}>
      <Text>Forecast</Text>
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
