import * as Location from 'expo-location'

// передаёт результат выше и мы не собираемся с ним ни чего делать, поэтому без await
// Если написать await то получится: дождаться Promise; получить результат; завернуть результат обратно в Promise.
// Функция запрашивает актуальный статус у операционной системы в момент вызова
export const getPermissionStatus = (): Promise<Location.LocationPermissionResponse> => {
  //обращаемся к ОС о данных местоположения
  return Location.getForegroundPermissionsAsync()
}

// requestPermission() —
// запрашивает у пользователя разрешение на доступ к геолокации. Возвращает объект со статусом разрешения.
//то же самое результат передаётся выше, поэтому await так же не имеет смысла
export const requestPermission = (): Promise<Location.LocationPermissionResponse> => {
  // спрашиваем разрешение на получение местоположение у пользователя
  return Location.requestForegroundPermissionsAsync()
}

export const getCurrentLocation = async () => {
  const { coords } = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.High,
  })
  return coords
}
// getCurrentLocation() — получает текущие координаты (широту, долготу) после того, как разрешение получено.

export const getCityFromCoords = async (latitude: number, longitude: number) => {
  const result = await Location.reverseGeocodeAsync({
    latitude,
    longitude,
  })
  return result[0]?.city ?? null
}
