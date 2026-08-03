import { THEME } from '@/shared/theme'
import { ReactNode } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

interface CardProps {
  children: ReactNode
  padding?: 'sm' | 'md' | 'lg'
  radius?: 'sm' | 'md' | 'lg'
  border?: 'none' | 'subtle' | 'default' | 'strong'
  background?: 'transparent' | 'dark' | 'light'
  style?: StyleProp<ViewStyle>
}

const RADIUS_SIZE = {
  sm: 10,
  md: 20,
  lg: 25,
} as const

const PADDING_SIZE = {
  sm: 10,
  md: 15,
  lg: 20,
} as const

const BACKGROUND = {
  transparent: 'transparent',
  dark: THEME.colors.OVERLAY.darkStrong,
  light: THEME.colors.OVERLAY.light,
} as const

const BORDER = {
  none: {
    width: 0,
    color: 'transparent',
  },

  subtle: {
    width: 0.5,
    color: THEME.colors.BORDER,
  },

  default: {
    width: 1,
    color: THEME.colors.BORDER_PRIMARY,
  },

  strong: {
    width: 1.5,
    color: THEME.colors.TEXT_SECONDARY,
  },
} as const

export default function Card({
  children,
  border = 'none',
  padding = 'md',
  radius = 'md',
  background = 'transparent',
  style,
}: CardProps) {
  return (
    <View
      style={[
        styles.base,
        {
          padding: PADDING_SIZE[padding],
          borderWidth: BORDER[border].width,
          borderColor: BORDER[border].color,
          borderRadius: RADIUS_SIZE[radius],
          backgroundColor: BACKGROUND[background],
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    borderColor: THEME.colors.BG_SECONDARY,
  },
})
