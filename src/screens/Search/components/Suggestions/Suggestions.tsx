import { useSearchStore } from '@/features/search/store/searchStore'
import StyledText from '@/shared/components/StyledText/StyledTex'
import { StyleSheet, View } from 'react-native'

export default function Suggestions() {
  const results = useSearchStore((s) => s.results)
  return (
    <View>
      <StyledText>London</StyledText>
      <StyledText>Paris</StyledText>
      <StyledText>Crimea</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({})
