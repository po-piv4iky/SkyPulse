import Card from '@/shared/components/Card/Card'
import Icon from '@/shared/components/Icon/Icon'
import StyledText from '@/shared/components/StyledText/StyledTex'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

interface Props {
  title: string
  value: string
  icon: React.ComponentProps<typeof Ionicons>['name']
}

export default function WeatherCard({ title, value, icon }: Props) {
  return (
    <Card style={styles.card} background="dark">
      <Icon name={icon}></Icon>
      <StyledText>{title}</StyledText>
      <StyledText>{value}</StyledText>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    aspectRatio: 1.1,
  },
})
