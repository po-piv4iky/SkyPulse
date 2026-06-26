import { THEME } from '@/shared/theme'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

type StyledInputProps = TextInputProps & {}

export default function StyledInput({ placeholder, ...props }: StyledInputProps) {
  return (
    <TextInput
      style={[styles.input, props.style]}
      placeholder={placeholder}
      placeholderTextColor={THEME.colors.TEXT_SECONDARY}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    color: THEME.colors.SURFACE,
    fontSize: 16,
  },
})
