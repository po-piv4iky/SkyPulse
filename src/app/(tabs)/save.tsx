import ScreenLayout from '@/shared/components/Layout/ScreenLayout'
import { StyleSheet, Text } from 'react-native'

export default function Save() {
  return (
    <ScreenLayout>
      <Text>Save</Text>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
