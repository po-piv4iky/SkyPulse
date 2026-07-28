import Icon from '@/shared/components/Icon/Icon'
import StyledText from '@/shared/components/StyledText/StyledTex'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'

type HeaderLeftProps = {
  title: string
  iconName?: React.ComponentProps<typeof Icon>['name'];
}

export default function HeaderLeft({ title, iconName }: HeaderLeftProps) {
  return (
    <View style={styles.titleContainer}>
      {iconName && <Icon name={iconName} size="large" />}
      <StyledText variant="headlineLg">{title}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
