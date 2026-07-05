import GradientBackground from '@/shared/components/GradientBackground/GradientBackground'
import { StyleSheet, Text } from 'react-native'

export default function Settings() {
  return (
    <GradientBackground
      colors={['#1a1a2e', '#16213e', '#0f3460']} // тёмный градиент
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text>Настройки</Text>
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
