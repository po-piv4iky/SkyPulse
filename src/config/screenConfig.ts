import { THEME } from '@/shared/theme'

export const SCREEN_CONFIG = {
  '/': {
    title: 'Location',
    showSearch: true,
    showLocation: true,
    gradient: THEME.gradients.BACKGROUND,
  },

  '/forecast': {
    title: 'Location',
    showSearch: true,
    showLocation: true,
    gradient: THEME.gradients.BACKGROUND_SECONDARY,
  },

  '/save': {
    title: 'Saved Cities',
    showSearch: true,
    showLocation: false,
    gradient: THEME.gradients.BACKGROUND,
  },

  '/settings': {
    title: 'Settings',
    showSearch: false,
    showLocation: false,
    gradient: THEME.gradients.BACKGROUND_TERTIARY,
  },
} as const

// без as const если написать typeof SCREEN_CONFIG выведет title: string..., а с as const строгий лдитеральный тип
