import { GeoLocation } from '@/features/weather/types/weather.api'
import Card from '@/shared/components/Card/Card'
import Icon from '@/shared/components/Icon/Icon'
import StyledText from '@/shared/components/StyledText/StyledTex'
import { StyleSheet } from 'react-native'

interface Props {
  cityItem: GeoLocation
}

export default function SearchResultItem({ cityItem }: Props) {
  return (
    <Card style={styles.container} border="default" background="dark">
      <Icon name="search" />
      <StyledText>{cityItem.name}</StyledText>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
})
