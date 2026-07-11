import GradientBackground from '@/shared/components/GradientBackground/GradientBackground'
import { THEME } from '@/shared/theme'
import { StyleSheet, Text } from 'react-native'

export default function Save() {
  return (
    <GradientBackground
      style={styles.container}
      colors={THEME.gradients.BACKGROUND_SECONDARY}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <Text>Save</Text>
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
