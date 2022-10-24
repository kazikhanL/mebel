import IconProps from "./IconProps";

const DeleteIcon = ({ className }: IconProps): JSX.Element => {
    return (
        <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M1.1135 14.2222C1.1135 15.2 1.93636 16 2.94208 16H10.2564C11.2621 16 12.0849 15.2 12.0849 14.2222V3.55556H1.1135V14.2222ZM3.36265 7.89333L4.65179 6.64L6.59922 8.52444L8.5375 6.64L9.82665 7.89333L7.88836 9.77778L9.82665 11.6622L8.5375 12.9156L6.59922 11.0311L4.66093 12.9156L3.37179 11.6622L5.31008 9.77778L3.36265 7.89333ZM9.79922 0.888889L8.88493 0H4.3135L3.39922 0.888889H0.199219V2.66667H12.9992V0.888889H9.79922Z" fill="#707786" />
        </svg>
    );
};

export default DeleteIcon;
