import StyledText from '@/shared/components/StyledText/StyledTex'
import { THEME } from '@/shared/theme'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Search from './Search/Search'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  return (
    <View style={styles.headerContainer}>
      {!isSearchOpen && (
        <View>
          <StyledText variant="headline">Sky Pulse</StyledText>
        </View>
      )}
      <Search
        isOpen={isSearchOpen}
        onOpen={() => setIsSearchOpen(true)}
        onClose={() => setIsSearchOpen(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    paddingBottom: THEME.spacing.SM,
    paddingHorizontal: THEME.spacing.MD,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    color: THEME.colors.PRIMARY,
  },
})
