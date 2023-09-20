import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface ExpandIconProps {
  expand: boolean;
  changeState: (value: boolean) => void;
}

export default function ExpandIcon(props: ExpandIconProps) {
  return (
    <>
      <TouchableOpacity testID="ExpandIcon" onPress={() => props.changeState(!props.expand)}>
        <MaterialIcons
          name={props.expand ? 'expand-less' : 'expand-more'}
          size={35}
          color="black"
        />
      </TouchableOpacity>
    </>
  );
}
