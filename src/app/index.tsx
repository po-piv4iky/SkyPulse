import Header from "@/layouts/Header/Header";
import { THEME } from "@/shared/theme";
import { StyleSheet, View } from "react-native";

export default function HomeScreen(){
  return(
    <View style={styles.container}> 
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.colors.BACKGROUND,
        flex: 1
    }
})