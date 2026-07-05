import { Ionicons } from '@expo/vector-icons'

export const tabs = [
  {
    name: 'index',
    title: 'Home',
    icon: 'home',
  },
  {
    name: 'forecast',
    title: 'Forecast',
    icon: 'cloud',
  },
  {
    name: 'save',
    title: 'Saved',
    icon: 'save',
  },
  {
    name: 'settings',
    title: 'Settings',
    icon: 'settings',
  },
] as const satisfies {
  name: string
  title: string
  icon: React.ComponentProps<typeof Ionicons>['name']
}[]
