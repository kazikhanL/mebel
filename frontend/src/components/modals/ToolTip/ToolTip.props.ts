import { ReactNode } from "react";

interface ToolTipProps {
    className?: string;
    isOpen: boolean,
    closeHandler: () => void;
    children: ReactNode;
}

export default ToolTipProps;
