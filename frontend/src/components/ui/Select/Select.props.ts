export interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    className?: string;
    options: SelectOption[];
    defaultOption: SelectOption;
    onChange: (option: SelectOption) => void;
}

export default SelectProps;
