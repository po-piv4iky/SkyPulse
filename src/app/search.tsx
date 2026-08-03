import HeaderSearch from '@/navigation/components/HeaderSearch/HeaderSearch'
import SearchContent from '@/screens/Search/SearchContent'
import GradientBackground from '@/shared/components/GradientBackground/GradientBackground'
import { THEME } from '@/shared/theme'
import { StyleSheet } from 'react-native'

export default function Search() {
  return (
    <GradientBackground style={{ flex: 1 }} colors={THEME.gradients.BACKGROUND_SECONDARY}>
      <HeaderSearch />
      <SearchContent />
    </GradientBackground>
  )
}

const styles = StyleSheet.create({})
