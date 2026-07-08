import Icon from '@/shared/components/Icon/Icon'
import StyledText from '@/shared/components/StyledText/StyledTex'
import { THEME } from '@/shared/theme'
import { Tabs } from 'expo-router'
import { Pressable, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { tabs } from '../tabs'

type CustomTabBarProps = Parameters<
  NonNullable<React.ComponentProps<typeof Tabs>['tabBar']>
>[0]

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: CustomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const focused = state.index === index
        const animatedStyle = useAnimatedStyle(() => {
          return {
            transform: [
              {
                scale: withTiming(focused ? 1.08 : 1, {
                  duration: 180,
                }),
              },
            ],
          }
        })
        const tab = tabs.find((item) => item.name === route.name)
        if (!tab) {
          return null
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress', // название события нажати или зажатие
            target: route.key, // Это указание, для какой именно вкладки произошло событие.
            canPreventDefault: true, // Если кто-то захочет отменить переход — пусть сможет.
          })
          if (!focused && !event.defaultPrevented) {
            // находимся ли на нажатой странице? и Кто-нибудь хочет запретить переход? Может быть да если стоит регистрация или платный раздел
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress', // название события нажати или зажатие тут зажатие кнопки
            target: route.key, // Это указание, для какой именно вкладки произошло событие.
          })
        }

        return (
          <Pressable key={route.key} onPress={onPress} onLongPress={onLongPress}>
            <Animated.View
              style={[styles.item, focused && styles.activeItem, animatedStyle]}
            >
              <Icon
                name={tab.icon}
                color={focused ? '#fff' : THEME.colors.TEXT_PRIMARY}
              />
              <StyledText>{tab.title}</StyledText>
            </Animated.View>
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: THEME.colors.BG_SECONDARY,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 16,
    paddingVertical: 8,

    borderRadius: 18,
  },
  activeItem: {
    backgroundColor: THEME.colors.BUTTON_SECONDARY,
  },
})
