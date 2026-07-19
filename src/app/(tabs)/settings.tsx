import ScreenLayout from '@/shared/components/Layout/ScreenLayout'
import { StyleSheet, Text } from 'react-native'

export default function Settings() {
  return (
    <ScreenLayout>
      <Text>Settings</Text>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
