import { useSearchStore } from '@/features/search/store/searchStore'
import Loader from '@/shared/components/Loader/Loader'
import { StyleSheet } from 'react-native'
import SearchResults from './components/SearchResult/SearchResults'
import Suggestions from './components/Suggestions/Suggestions'

export default function SearchContent() {
  const isLoading = useSearchStore((s) => s.isLoading)
  const results = useSearchStore((s) => s.results)
  if (results.length === 0) {
    return <Suggestions />
  }
  if (isLoading) {
    return <Loader />
  }
  if (results.length !== 0) {
    return <SearchResults />
  }
}

const styles = StyleSheet.create({})
