import StyledText from '@/shared/components/StyledText/StyledTex'
import { THEME } from '@/shared/theme'
import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import Search from './Search/Search'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const progress = useSharedValue(0)
  useEffect(() => {
    progress.value = withTiming(isSearchOpen ? 1 : 0, {
      duration: 300,
    })
  }, [isSearchOpen])
  const logoAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progress.value, [0, 1], [1, 0]),
      transform: [
        {
          translateX: interpolate(progress.value, [0, 1], [0, -25]),
        },
      ],
    }
  })
  return (
    <View style={styles.headerContainer}>
      <Animated.View style={logoAnimatedStyle}>
        <StyledText variant="headline">Sky Pulse</StyledText>
      </Animated.View>

      <Search
        progress={progress}
        onOpen={() => setIsSearchOpen(true)}
        onClose={() => setIsSearchOpen(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    paddingHorizontal: THEME.spacing.MD,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

// const styles = StyleSheet.create({
//   headerContainer: {
//     paddingTop: 40,
//     paddingBottom: THEME.spacing.SM,
//     paddingHorizontal: THEME.spacing.MD,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     color: THEME.colors.PRIMARY,
//   },
// })
