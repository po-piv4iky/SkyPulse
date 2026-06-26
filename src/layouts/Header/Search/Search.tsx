import StyledButton from '@/shared/components/StyledButton/StyledButton'
import SearchInput from './SearchInput'

interface SearchProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export default function Search({ isOpen, onOpen, onClose }: SearchProps) {
  if (!isOpen) {
    return <StyledButton icon="search" onPress={onOpen} />
  }

  return <SearchInput onClose={onClose} />
}

{
  /* <SearchButton onOpen={onOpen} /> */
}
