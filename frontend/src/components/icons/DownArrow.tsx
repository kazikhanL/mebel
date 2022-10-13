import IconProps from "./IconProps";

const DownArrow = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M7 4L4 1L1 4" stroke="#7B7976" strokeLinecap="round" />
        </svg>
    );
};

export default DownArrow;
