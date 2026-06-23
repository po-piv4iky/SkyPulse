import StyledText from "@/shared/components/StyledText/StyledTex";
import { THEME } from "@/shared/theme";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <View>
                <Text>SiDebarOpen</Text>
            </View>

               <StyledText variant='headline'>Sky Pulse</StyledText>
            <View>
                <Text>Search</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 40,
        paddingBottom: THEME.spacing.SM,
        paddingHorizontal: THEME.spacing.SM,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        color: THEME.colors.PRIMARY,
    }
})