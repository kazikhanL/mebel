import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    errorMessage?: string;
    descriptionMessage?: string;
}

export default InputProps;
