import ScreenLayout from '@/shared/components/Layout/ScreenLayout'
import { StyleSheet, Text } from 'react-native'

export default function Forecast() {
  return (
    <ScreenLayout>
      <Text>Forecast</Text>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
