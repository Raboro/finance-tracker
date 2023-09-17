import { ActivityIndicator } from 'react-native';
import { COLORS } from '../../utils/ColorStyles';

export default function LoadingCircle() {
  return <ActivityIndicator size="large" color={COLORS.primary} />;
}
