import { THEME } from '@/shared/theme'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'
import { Pressable, StyleSheet, View } from 'react-native'

export default function TabBarButton({
  children,
  onPress,
  onLongPress, // Вызывается при долгом удержании.
  accessibilityState, // Внутри находится true или false
  accessibilityLabel, //Это подпись для людей, использующих экранные дикторы
  testID, // Используется для автоматических тестов.
  style,
}: BottomTabBarButtonProps) {
  const focused = accessibilityState?.selected

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      style={[styles.pressable, style]}
    >
      <View style={[styles.container, focused && styles.activeContainer]}>
        {children}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  activeContainer: {
    backgroundColor: THEME.colors.BUTTON_SECONDARY,
  },
})
