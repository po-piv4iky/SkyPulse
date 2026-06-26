import { THEME } from '@/shared/theme'
import { Ionicons } from '@expo/vector-icons'

interface IconProps {
  name: React.ComponentProps<typeof Ionicons>['name']
  size?: 'small' | 'default' | 'large'
  color?: string
}

const ICON_SIZES = {
  small: 18,
  default: 24,
  large: 32,
} as const

export default function Icon({
  name,
  size = 'default',
  color = THEME.colors.PRIMARY,
}: IconProps) {
  return <Ionicons name={name} size={ICON_SIZES[size]} color={color} />
}
