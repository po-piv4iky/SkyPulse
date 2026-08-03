import { useSearchStore } from '@/features/search/store/searchStore'
import { StyleSheet, View } from 'react-native'
import SearchResultItem from './SearchResultItem'

export default function SearchResults() {
  const results = useSearchStore((s) => s.results)
  return (
    <View style={{ gap: 15, paddingHorizontal: 20 }}>
      {results.map((item) => (
        <SearchResultItem key={item.lon} cityItem={item} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({})
