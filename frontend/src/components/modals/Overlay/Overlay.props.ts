import { ReactNode } from "react";

interface OverlayProps {
    children: ReactNode;
    isOpen: boolean;
    closeHandler: () => void;
}

export default OverlayProps;
