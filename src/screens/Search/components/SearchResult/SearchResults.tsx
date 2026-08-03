import { useSearchStore } from '@/features/search/store/searchStore'
import { FlatList, StyleSheet, View } from 'react-native'
import SearchResultItem from './SearchResultItem'

export default function SearchResults() {
  const results = useSearchStore((s) => s.results)
  return (
    <View style={{ gap: 15, paddingHorizontal: 20 }}>
      <FlatList
        data={results}
        keyExtractor={(item) => `${item.lat}-${item.lon}`}
        renderItem={({ item }) => <SearchResultItem cityItem={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
