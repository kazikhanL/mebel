import IconProps from "./IconProps";

const Close = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <line x1="17.7782" y1="17.4854" x2="2.22182" y2="1.929" stroke="#7B7976" strokeWidth="2" strokeLinecap="round" />
            <line x1="17.7782" y1="1.92886" x2="2.22185" y2="17.4852" stroke="#7B7976" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
};

export default Close;
