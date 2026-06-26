import { THEME } from '@/shared/theme'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, PressableProps } from 'react-native'
import StyledText from '../StyledText/StyledTex'

type StyledButtonProps = PressableProps & {
  label?: string
  icon?: React.ComponentProps<typeof Ionicons>['name']
}

export default function StyledButton({
  label,
  icon,
  style,
  ...props
}: StyledButtonProps) {
  return (
    <Pressable style={style} {...props}>
      {label && <StyledText>{label}</StyledText>}
      {icon && <Ionicons name={icon} size={24} color={THEME.colors.PRIMARY} />}
    </Pressable>
  )
}
