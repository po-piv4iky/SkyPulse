import Icon from '@/shared/components/Icon/Icon'
import IconButton from '@/shared/components/IconButton/IconButton'
import StyledInput from '@/shared/components/StyledInput/StyledInput'
import { THEME } from '@/shared/theme'
import { StyleSheet, View } from 'react-native'

interface Props {
  onClose: () => void
}
export default function SearchInput({ onClose }: Props) {
  return (
    <View style={styles.container}>
      <Icon name="search" />
      <StyledInput style={styles.input} placeholder="Search for a city..." />
      <IconButton onPress={onClose} name="close" size="small" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: THEME.spacing.MD,
  },
  input: {
    flex: 1,
    color: THEME.colors.SURFACE,
    borderRadius: THEME.radius.FULL,
    backgroundColor: THEME.colors.WHITE,
    paddingHorizontal: THEME.spacing.SM,
  },
})
