import { SCREEN_CONFIG } from '@/config/screenConfig'

import { useLocationStore } from '@/features/location/store/locationStore'
import { useWeatherStore } from '@/features/weather/store/weatherStore'
import IconButton from '@/shared/components/IconButton/IconButton'
import { THEME } from '@/shared/theme'
import { useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import HeaderLeft from './HeaderLeft/HeaderLeft'

type HeaderProps = {
  config: (typeof SCREEN_CONFIG)[keyof typeof SCREEN_CONFIG]
}

export default function Header({ config }: HeaderProps) {
  const loadLocation = useLocationStore((s) => s.loadLocation)
  const weather = useWeatherStore((s) => s.weather)
  const city = weather?.name
  const title = config.showLocation ? (city ?? config.title) : config.title
  const router = useRouter()
  const handleSearchPress = () => {
    router.push('/search')
  }
  return (
    <View style={styles.container}>
      <HeaderLeft title={title} iconName={config.iconName} onIconPress={loadLocation} />
      {config.showSearch && <IconButton name="search" onPress={handleSearchPress} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 25,
    paddingBottom: 20,
    paddingTop: 30,
    backgroundColor: THEME.colors.OVERLAY.dark,
  },
})
