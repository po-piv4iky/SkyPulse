import { SCREEN_CONFIG } from '@/config/screenConfig'
import StyledText from '@/shared/components/StyledText/StyledTex'
import { THEME } from '@/shared/theme'
import { StyleSheet, View } from 'react-native'

type HeaderProps = {
  config: (typeof SCREEN_CONFIG)[keyof typeof SCREEN_CONFIG]
}

export default function Header({ config }: HeaderProps) {
  return (
    <View style={styles.container}>
      <StyledText>{config.title}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: THEME.colors.OVERLAY.dark,
  },
})
