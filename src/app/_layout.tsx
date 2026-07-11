import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}
// Корневой навигатор
// Этот компонент говорит"Все экраны внутри app являются Stack Navigation." первым будет показан index.tsx
// дргуие экраны будут накладываться друг на друга
