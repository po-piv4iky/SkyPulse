import Icon from '@/shared/components/Icon/Icon'
import StyledText from '@/shared/components/StyledText/StyledTex'
import { THEME } from '@/shared/theme'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'

interface Props {
  title: string
  value: string
  icon: React.ComponentProps<typeof Ionicons>['name']
}

export default function WeatherCard({ title, value, icon }: Props) {
  return (
    <View style={styles.card}>
      <Icon name={icon}></Icon>
      <StyledText>{title}</StyledText>
      <StyledText>{value}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    aspectRatio: 1.1,
    borderRadius: 20,
    padding: 18,
    backgroundColor: THEME.colors.BG_SECONDARY,
    borderWidth: 0.3,
    borderColor: THEME.colors.BORDER,
  },
})
