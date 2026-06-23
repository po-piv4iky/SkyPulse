import { THEME } from "@/shared/theme";
import { TYPOGRAPHY } from "@/shared/theme/typography";
import { Text, TextProps } from "react-native";

interface StyledTextProps extends TextProps {
  color?: 'primary' | 'secondary' | 'error'
  variant?: 'headline' | 'body' 
}

const typographyStyles = {
headline: TYPOGRAPHY.HEADLINE_LG,
body: TYPOGRAPHY.BODY_MD,
}
export default function StyledText({children, color = 'primary', variant='body', style, ...props}: StyledTextProps) {
      const textColor = {
    primary: THEME.colors.PRIMARY,
    secondary: THEME.colors.SECONDARY,
    error: THEME.colors.ERROR,
  }
  
    return (
        <Text style={[ typographyStyles[variant], {color: textColor[color]}, style]} {...props}>
            {children}
        </Text>
    )
}

// const style = StyleSheet.create({

// })

