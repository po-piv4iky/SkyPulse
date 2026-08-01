import LocationError from '@/features/location/components/LocationError'
import LocationPermissionDenied from '@/features/location/components/LocationPermissionDenied'
import { useLocationStore } from '@/features/location/store/locationStore'
import Loader from '@/shared/components/Loader/Loader'
import { StyleSheet } from 'react-native'
import WeatherContent from './components/WeatherContent'

export default function HomeContent() {
  const isLoading = useLocationStore((s) => s.isLoading)
  const permission = useLocationStore((s) => s.permission)
  const error = useLocationStore((s) => s.error)

  if (isLoading) {
    return <Loader />
  }
  if (error) {
    return <LocationError message={error} />
  }
  if (permission === 'denied') {
    return <LocationPermissionDenied />
  }

  return <WeatherContent />
}
const styles = StyleSheet.create({})
