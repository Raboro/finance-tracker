import { MaterialIcons } from '@expo/vector-icons';

interface ExpandIconProps {
  expand: boolean;
  changeState: (value: boolean) => void;
}

export default function ExpandIcon(props: ExpandIconProps) {
  return (
    <MaterialIcons
      name={props.expand ? 'expand-less' : 'expand-more'}
      size={35}
      color="black"
      onPress={() => props.changeState(!props.expand)}
    />
  );
}
