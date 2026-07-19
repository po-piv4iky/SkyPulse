import ScreenLayout from '@/shared/components/Layout/ScreenLayout'
import { StyleSheet, Text } from 'react-native'

export default function Home() {
  return (
    <ScreenLayout>
      <Text>Home</Text>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
