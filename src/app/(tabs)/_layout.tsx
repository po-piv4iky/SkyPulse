import CustomTabBar from '@/navigation/components/TabBarButton'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props}/>} />
}

//   screenOptions={{
//     headerShown: false,
//     tabBarActiveTintColor: THEME.colors.BUTTON_SECONDARY,
//     tabBarInactiveTintColor: THEME.colors.TEXT_PRIMARY,

//     tabBarStyle: {
//       backgroundColor: THEME.colors.BG_SECONDARY,
//       borderTopWidth: 0,
//       elevation: 0, // Android
//       shadowOpacity: 0, // iOS
//       height: 70,
//       paddingBottom: 10,
//       paddingTop: 10,
//       position: 'absolute',
//       left: 16,
//       right: 16,
//       bottom: 20,

//       borderRadius: 20,
//     },

//     tabBarLabelStyle: {
//       fontSize: 12,
//       fontWeight: '600',
//     },
//   }}
// >
//   {tabs.map((tab) => (
//     <Tabs.Screen
//       name={tab.name} // ✅ Обязательный: уникальное имя маршрута
//       key={tab.name} // id для перебора
//       options={{
//         // ✅ Обязательный: настройки экрана
//         title: tab.title,
//         tabBarButton: (props) => <TabBarButton {...props} tab={tab} />,
//       }}
//     />
//   ))}
