import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

interface ButtonLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    color?: "main" | "black" | "transparent" | "dark-tab";
    borderType?: "default" | "round" | "none";
    href: string;
}

export default ButtonLinkProps;
