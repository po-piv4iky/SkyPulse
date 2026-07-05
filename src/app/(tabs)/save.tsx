import { StyleSheet, Text, View } from 'react-native'

export default function Save() {
  return (
    <View style={styles.container}>
      <Text>Save</Text>
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
