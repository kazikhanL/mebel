import { Component, ReactNode } from "react";
import { createPortal } from "react-dom";

import { PortalProps } from "./Portal.props";

class Portal extends Component<PortalProps> {
    container: HTMLDivElement = document.createElement("div");

    componentDidMount(): void {
        document.body.appendChild(this.container);
    }

    componentWillUnmount(): void {
        document.body.removeChild(this.container);
    }

    render(): ReactNode {
        return createPortal(this.props.children, this.container);
    }
}

export default Portal;
