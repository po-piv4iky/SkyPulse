import { SCREEN_CONFIG } from '@/config/screenConfig'

import IconButton from '@/shared/components/IconButton/IconButton'
import { THEME } from '@/shared/theme'
import { useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import HeaderLeft from './HeaderLeft/HeaderLeft'

type HeaderProps = {
  config: (typeof SCREEN_CONFIG)[keyof typeof SCREEN_CONFIG]
}

export default function Header({ config }: HeaderProps) {
  const router = useRouter()
  const handleSearchPress = () => {
    router.push('/search')
  }
  return (
    <View style={styles.container}>
      <HeaderLeft title={config.title} iconName={config.iconName} />
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
