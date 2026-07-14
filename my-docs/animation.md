/*
====================================================
          REACT NATIVE REANIMATED CHEATSHEET
====================================================


1. useSharedValue()
----------------------------------------------------

Создаёт анимируемое состояние.

Аналог useState, но:

useState:
- вызывает React render
- работает в JS потоке

useSharedValue:
- НЕ вызывает render
- хранит значение на UI потоке
- используется только для анимаций


Пример:

const scale = useSharedValue(1)


Внутри:

scale
 |
 └── value: 1


Изменение:

scale.value = 1.2



====================================================


2. useAnimatedStyle()
----------------------------------------------------

Связывает sharedValue со стилями компонента.


useSharedValue хранит значение

        ↓

useAnimatedStyle читает значение

        ↓

Animated.View получает стиль



Пример:


const animatedStyle = useAnimatedStyle(() => {

  return {
    transform: [
      {
        scale: scale.value
      }
    ]
  }

})


Использование:


<Animated.View style={animatedStyle} />



Важно:

useAnimatedStyle НЕ запускает анимацию.

Он только говорит:

"Когда значение изменится,
пересчитай этот стиль"



====================================================


3. withTiming()
----------------------------------------------------

Плавное изменение значения
по времени.


Было:

scale.value = 1


Станет:

scale.value = 1.1


Без анимации:

1 ---------> 1.1


С withTiming:

1
 |
 |
1.03
 |
 |
1.07
 |
 |
1.1


Пример:


scale.value = withTiming(1.1)


Настройки:


scale.value = withTiming(
  1.1,
  {
    duration: 300
  }
)



Использовать для:

- opacity
- width
- height
- цвета
- простых переходов



====================================================


4. withSpring()
----------------------------------------------------

Анимация с физикой пружины.


Поведение:

1
 |
 |
1.15
 |
1.08
 |
1.1


Есть эффект:

- подпрыгивания
- инерции
- живости


Пример:


scale.value = withSpring(1.1)



Настройки:


scale.value = withSpring(
  1.1,
  {
    damping: 12,
    stiffness: 150
  }
)



Использовать для:

- кнопок
- карточек
- табов
- жестов



====================================================


5. useEffect + Reanimated
----------------------------------------------------

Обычно используют вместе.


useEffect отвечает:

КОГДА запускать анимацию.


useAnimatedStyle отвечает:

КАК применять стиль.



Пример:


const scale = useSharedValue(1)



useEffect(() => {

  scale.value = withSpring(
    focused ? 1.1 : 1
  )

}, [focused])



const style = useAnimatedStyle(() => ({
  
  transform:[
    {
      scale: scale.value
    }
  ]

}))



Логика:


focused изменился

        ↓

useEffect

        ↓

изменил scale.value

        ↓

useAnimatedStyle

        ↓

Animated.View обновился



====================================================


6. Animated.View
----------------------------------------------------

Обычный View не умеет
работать с animated styles.


Нужно:


import Animated from
'react-native-reanimated'


Вместо:


<View />


Используем:


<Animated.View />



====================================================


7. Частый паттерн кнопки


const progress = useSharedValue(0)



useEffect(() => {

 progress.value =
   withTiming(
     focused ? 1 : 0
   )

},[focused])



const style = useAnimatedStyle(() => ({

 opacity: progress.value,

 transform:[
   {
    scale:
     1 + progress.value * 0.1
   }
 ]

}))



0 = выключено

1 = активно



====================================================


8. Что использовать?


withTiming

Когда нужна точность:

- появление
- исчезновение
- прозрачность
- цвета


withSpring

Когда нужна "жизнь":

- кнопки
- карточки
- табы
- свайпы


====================================================

Профессиональный паттерн:

useSharedValue
        |
        |
useEffect  ---> withSpring / withTiming
        |
        |
useAnimatedStyle
        |
        |
Animated.View


====================================================
*/