import { THEME } from '@/shared/theme'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, PressableProps, StyleProp, StyleSheet, ViewStyle } from 'react-native'

type IconButtonProps = PressableProps & {
  name: React.ComponentProps<typeof Ionicons>['name']
  size?: 'small' | 'default' | 'large'
  style?: StyleProp<ViewStyle>
}

const SIZE_MAP = {
  small: 32,
  default: 40,
  large: 48,
} as const

const ICON_SIZE_MAP = {
  small: 16,
  default: 22,
  large: 28,
} as const

export default function IconButton({
  name,
  size = 'default',
  style,
  ...props
}: IconButtonProps) {
  const buttonSize = SIZE_MAP[size]

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          width: buttonSize,
          height: buttonSize,
          borderRadius: buttonSize / 2,
          opacity: pressed ? 0.6 : 1,
        },
        style,
      ]}
      {...props}
    >
      <Ionicons name={name} size={ICON_SIZE_MAP[size]} color={THEME.colors.WHITE} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.colors.SURFACE_CONTAINER_HIGH,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
