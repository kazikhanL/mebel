interface PhoneFormModalProps {
    className?: string;
    isOpen: boolean;
    title: string;
    buttonInner: string;
    closeHandler: () => void;
    submitHandler: (phone: string) => void;
}

export default PhoneFormModalProps;
