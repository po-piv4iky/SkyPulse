import HomeContent from '@/screens/Home/HomeContent'
import ScreenLayout from '@/shared/components/Layout/ScreenLayout'
import { StyleSheet, Text } from 'react-native'

export default function Home() {
 
  return (
    <ScreenLayout>
      <HomeContent />
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
