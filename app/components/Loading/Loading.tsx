import { ActivityIndicator } from 'react-native';
import { COLORS } from '../../utils/ColorStyles';

export default function LoadingCircle() {
  return <ActivityIndicator testID='LoadingCircle' size="large" color={COLORS.primary} />;
}
