import IconProps from "./IconProps";

const Done = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg 
            width="14" 
            height="10" 
            viewBox="0 0 14 10" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M1 3L6 8L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
};

export default Done;
