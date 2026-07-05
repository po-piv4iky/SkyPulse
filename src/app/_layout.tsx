import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}

// Этот компонент говорит"Все экраны внутри app являются Stack Navigation." первым будет показан index.tsx
// дргуие экраны будут накладываться друг на друга
