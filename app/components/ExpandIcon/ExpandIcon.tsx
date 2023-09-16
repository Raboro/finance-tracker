import { MaterialIcons } from "@expo/vector-icons";

interface ExpandIconProps {
    expand: boolean;
    changeState: (value: boolean) => void;
}

export default function ExpandIcon(props: ExpandIconProps) {
    return <>
        {props.expand ? (
            <MaterialIcons
              name="expand-less"
              size={35}
              color="black"
              onPress={() => props.changeState(false)}
            />
          ) : (
            <MaterialIcons
              name="expand-more"
              size={35}
              color="black"
              onPress={() => props.changeState(true)}
            />
          )}
    </>
}