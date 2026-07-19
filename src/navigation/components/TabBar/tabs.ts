export const tabsMap = {
  index: {
    name: 'index',
    title: 'Home',
    icon: 'home',
  },
  forecast: {
    name: 'forecast',
    title: 'Forecast',
    icon: 'cloud',
  },
  save: {
    name: 'save',
    title: 'Saved',
    icon: 'bookmark',
  },
  settings: {
    name: 'settings',
    title: 'Settings',
    icon: 'settings',
  },
} as const

export const tabs = Object.values(tabsMap)
// Результат:
// [
//   { name: 'index', title: 'Home', icon: 'home' },
//   { name: 'forecast', title: 'Forecast', icon: 'cloud' },
//   { name: 'save', title: 'Saved', icon: 'save' },
//   { name: 'settings', title: 'Settings', icon: 'settings' },
// ]

export type Tab = (typeof tabs)[number]
export type TabName = keyof typeof tabsMap
