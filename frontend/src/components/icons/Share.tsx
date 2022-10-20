import IconProps from "./IconProps";

const Share = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg 
            width="19" 
            height="17" 
            viewBox="0 0 19 17" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M10.8947 1L18 8.38462L10.8947 15.359V10.8462C5 9 1 13 1 13C2 6 6 4.5 10.8947 5.51282V1Z" stroke="#B7B4AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default Share;
