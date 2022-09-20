import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: "main" | "black" | "green" | "transparent" | "dark-tab";
    borderType?: "default" | "round" | "none";
}

export default ButtonProps;
