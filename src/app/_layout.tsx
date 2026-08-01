import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import { useInitializeApp } from '../hooks/useInitializeApp'

export default function RootLayout() {
  useInitializeApp()
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  )
}
// Корневой навигатор
// Этот компонент говорит"Все экраны внутри app являются Stack Navigation." первым будет показан index.tsx
// дргуие экраны будут накладываться друг на друга
