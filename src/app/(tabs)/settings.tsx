import GradientBackground from '@/shared/components/GradientBackground/GradientBackground'
import { THEME } from '@/shared/theme'
import { StyleSheet, Text } from 'react-native'

export default function Settings() {
  return (
    <GradientBackground
      colors={THEME.gradients.BACKGROUND_TERTIARY} // тёмный градиент
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
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
