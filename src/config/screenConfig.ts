import { THEME } from '@/shared/theme'
import { Ionicons } from '@expo/vector-icons'

type ScreenConfig = {
  title: string
  showSearch: boolean
  showLocation: boolean
  iconName?: React.ComponentProps<typeof Ionicons>['name']
  gradient: readonly string[]
}

export const SCREEN_CONFIG = {
  '/': {
    title: 'Current Location',
    showSearch: true,
    iconName: 'location-outline',
    showLocation: true,
    gradient: THEME.gradients.BACKGROUND,
  },

  '/forecast': {
    title: 'Current City',
    showSearch: true,
    iconName: 'location-outline',
    showLocation: false,
    gradient: THEME.gradients.BACKGROUND_SECONDARY,
  },

  '/save': {
    title: 'Saved Cities',
    showSearch: true,
    iconName: 'location-outline',
    showLocation: false,
    gradient: THEME.gradients.BACKGROUND,
  },

  '/settings': {
    title: 'Settings',
    showSearch: false,
    iconName: undefined,
    showLocation: false,
    gradient: THEME.gradients.BACKGROUND_TERTIARY,
  },
} satisfies Record<string, ScreenConfig>

// satisfies сделдаети точные значения не просто string
// {
//   [key: string]: ScreenConfig
// }
