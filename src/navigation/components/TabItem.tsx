import Icon from '@/shared/components/Icon/Icon'
import StyledText from '@/shared/components/StyledText/StyledTex'
import { THEME } from '@/shared/theme'
import { Pressable, StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { Tab } from '../tabs'

interface TabItemProps {
  tab: Tab
  focused: boolean
  onPress: () => void
  onLongPress?: () => void
}

export default function TabItem({ tab, focused, onPress, onLongPress }: TabItemProps) {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withTiming(focused ? 1.08 : 1, {
          duration: 180,
        }),
      },
    ],
  }))

  return (
    <Pressable
      style={styles.pressable}
      onPress={onPress}
      onLongPress={onLongPress}
      hitSlop={8}
    >
      <Animated.View
        style={[styles.container, focused && styles.activeContainer, animatedStyle]}
      >
        <Icon
          name={tab.icon}
          color={focused ? THEME.colors.SECONDARY : THEME.colors.TEXT_PRIMARY}
        />

        <StyledText style={[styles.label, focused && styles.activeLabel]}>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 16,
    paddingVertical: 10,

    borderRadius: 18,
  },

  activeContainer: {
    backgroundColor: THEME.colors.BUTTON_PRIMARY_ACTIVE,
  },

  label: {
    marginLeft: 8,
    color: THEME.colors.TEXT_PRIMARY,
  },

  activeLabel: {
    color: THEME.colors.SECONDARY,
  },
})
