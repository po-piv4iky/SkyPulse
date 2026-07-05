import { StyleSheet, Text, View } from 'react-native'

export default function Forecast() {
  return (
    <View style={styles.container}>
      <Text>forecast</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
