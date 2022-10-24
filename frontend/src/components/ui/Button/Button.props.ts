import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: "main" | "black" | "green" | "green-transparent" | "transparent" | "dark-tab" | "red";
    borderType?: "default" | "round" | "square" | "none";
}

export default ButtonProps;
