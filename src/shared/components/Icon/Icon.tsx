import { THEME } from '@/shared/theme'
import { Ionicons } from '@expo/vector-icons'
import { ColorValue } from 'react-native'

interface IconProps {
  name: React.ComponentProps<typeof Ionicons>['name']
  size?: 'small' | 'default' | 'large' | number
  color?: string | ColorValue // 👈 поддержка react-native цветов
}

const ICON_SIZES = {
  small: 18,
  default: 24,
  large: 32,
} as const

const DEFAULT_COLOR = '#007AFF' // 👈 гарантированный цвет

export default function Icon({
  name,
  size = 'default',
  color = THEME.colors.PRIMARY ?? DEFAULT_COLOR, // 👈 двойная защита
}: IconProps) {
  return (
    <Ionicons
      name={name}
      size={typeof size === 'number' ? size : ICON_SIZES[size]}
      color={color}
    />
  )
}
