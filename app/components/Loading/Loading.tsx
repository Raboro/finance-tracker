import { ActivityIndicator, SafeAreaView } from "react-native";
import { COLORS } from "../../utils/ColorStyles";

export default function Loading() {
    return <ActivityIndicator size="large" color={COLORS.primary} />
}