import CustomTabBar from '@/navigation/components/TabBar/CustomTabBar'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    />
  )
}

// Навигатор вкладок
