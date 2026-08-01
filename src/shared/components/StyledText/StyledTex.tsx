import { THEME } from '@/shared/theme'
import { TYPOGRAPHY } from '@/shared/theme/typography'
import { Text, TextProps } from 'react-native'

interface StyledTextProps extends TextProps {
  color?: 'primary' | 'secondary' | 'error'
  variant?: 'headlineXl' | 'headlineLg' | 'headlineMd' | 'body' | 'tab'
}

const typographyStyles = {
  headlineXl: TYPOGRAPHY.HEADLINE_XL,
  headlineLg: TYPOGRAPHY.HEADLINE_LG,
  headlineMd: TYPOGRAPHY.HEADLINE_MD,
  body: TYPOGRAPHY.BODY_MD,
  tab: TYPOGRAPHY.TAB_LABEL,
}
export default function StyledText({
  children,
  color = 'primary',
  variant = 'body',
  style,
  ...props
}: StyledTextProps) {
  const textColor = {
    primary: THEME.colors.TEXT_PRIMARY,
    secondary: THEME.colors.SECONDARY,
    error: THEME.colors.ERROR,
  }

  return (
    <Text
      style={[typographyStyles[variant], { color: textColor[color] }, style]}
      {...props}
    >
      {children}
    </Text>
  )
}

// const style = StyleSheet.create({

// })
