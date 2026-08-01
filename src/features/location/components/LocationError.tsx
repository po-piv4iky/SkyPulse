import { StyleSheet, Text, View } from 'react-native'

interface Props {
  message: string
}

export default function LocationError({ message }: Props) {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
