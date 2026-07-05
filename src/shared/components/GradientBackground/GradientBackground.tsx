import { LinearGradient } from 'expo-linear-gradient'
import { ReactNode } from 'react'
import { StyleSheet, ViewProps } from 'react-native'

interface GradientBackgroundProps extends ViewProps {
  children: ReactNode
  colors?: readonly [string, string, ...string[]]
  start?: { x: number; y: number }
  end?: { x: number; y: number }
}

const DEFAULT_GRADIENT = ['#233453', '#10121A'] as const

export default function GradientBackground({
  children,
  colors = DEFAULT_GRADIENT,
  start = { x: 0.5, y: 0.5 },
  end = { x: 0.5, y: 1 },
  style,
  ...props
}: GradientBackgroundProps) {
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      style={[styles.gradient, style]}
      {...props}
    >
      {children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: '100%',
  },
})
