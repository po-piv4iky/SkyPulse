import GradientBackground from '@/shared/components/GradientBackground/GradientBackground'
import { StyleSheet, Text, View } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <GradientBackground>
        <Text>Home</Text>
      </GradientBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
