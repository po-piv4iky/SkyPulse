import Icon from '@/shared/components/Icon/Icon'
import StyledText from '@/shared/components/StyledText/StyledTex'
import { THEME } from '@/shared/theme'
import { useEffect } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { Tab } from './tabs'


interface TabItemProps {
  tab: Tab
  focused: boolean
  onPress: () => void
  onLongPress?: () => void
}

export default function TabItem({ tab, focused, onPress, onLongPress }: TabItemProps) {
  const scale = useSharedValue(1)
  const opacity = useSharedValue(0)
  const translateY = useSharedValue(0)

  useEffect(() => {
    scale.value = withSpring(focused ? 1.08 : 1)
    opacity.value = withTiming(focused ? 1 : 0, {
      duration: 180,
    })
    translateY.value = withSpring(focused ? -3 : 0)
  }, [focused])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: scale.value,
      },
      {
        translateY: translateY.value,
      },
    ],
  }))

  const animatedBackground = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }))

  return (
    <Pressable
      style={styles.pressable}
      onPress={onPress}
      onLongPress={onLongPress}
      hitSlop={8}
    >
      <Animated.View style={[styles.container, animatedStyle]}>
        <Animated.View
          pointerEvents="none"
          style={[styles.activeBackground, animatedBackground]}
        />

        <Icon
          name={tab.icon}
          color={focused ? THEME.colors.SECONDARY : THEME.colors.TEXT_PRIMARY}
        />

        <StyledText variant="tab" style={[styles.label, focused && styles.activeLabel]}>
          {tab.title}
        </StyledText>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    alignItems: 'center',
  },

  container: {
    position: 'relative',
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 25,
  },
  activeBackground: {
    backgroundColor: THEME.colors.BUTTON_PRIMARY_ACTIVE,
    position: 'absolute',

    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

    borderRadius: 25,
  },
  label: {
    color: THEME.colors.TEXT_PRIMARY, // Цвета  и текст не анимация
  },

  activeLabel: {
    color: THEME.colors.SECONDARY,
  },
})
