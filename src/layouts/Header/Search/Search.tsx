import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'

import StyledButton from '@/shared/components/StyledButton/StyledButton'
import SearchInput from './SearchInput'

interface Props {
  progress: SharedValue<number>
  onOpen: () => void
  onClose: () => void
}

export default function Search({ progress, onOpen, onClose }: Props) {
  const buttonStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [1, 0]),

    transform: [
      {
        scale: interpolate(progress.value, [0, 1], [1, 0.8]),
      },
    ],
  }))

  const inputStyle = useAnimatedStyle(() => ({
    width: interpolate(progress.value, [0, 1], [0, 240]),

    opacity: interpolate(progress.value, [0, 1], [0, 1]),

    transform: [
      {
        translateX: interpolate(progress.value, [0, 1], [20, 0]),
      },
    ],
  }))

  return (
    <>
      <Animated.View
        style={buttonStyle}
        pointerEvents={progress.value > 0.5 ? 'none' : 'auto'}
      >
        <StyledButton icon="search" onPress={onOpen} />
      </Animated.View>

      <Animated.View
        style={[
          {
            overflow: 'hidden',
          },
          inputStyle,
        ]}
        pointerEvents={progress.value < 0.5 ? 'none' : 'auto'}
      >
        <SearchInput onClose={onClose} />
      </Animated.View>
    </>
  )
}
