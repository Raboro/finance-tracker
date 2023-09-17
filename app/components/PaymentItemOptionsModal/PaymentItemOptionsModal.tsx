import ClosingIcon from "../ClosingIcon/ClosingIcon";
import { Modal } from "react-native";

interface PaymentItemOptionsModalProps {
    visibilityChange: (change: boolean) => void;
}

export default function PaymentItemOptionsModal(props: PaymentItemOptionsModalProps) {
    return (
        <Modal>
            < ClosingIcon visibilityChange={props.visibilityChange}/>
        </Modal>
    );
}