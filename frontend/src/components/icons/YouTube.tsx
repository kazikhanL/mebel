import IconProps from "./IconProps";

const YouTube = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg 
            width="31" 
            height="22" 
            viewBox="0 0 31 22" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M30.3509 3.34002C30.1754 2.69545 29.8335 2.11188 29.3616 1.65137C28.8764 1.17669 28.2817 0.837139 27.6336 0.664769C25.2082 0.00659343 15.491 0.00659357 15.491 0.00659357C11.44 -0.040858 7.38998 0.167846 3.36384 0.631527C2.71576 0.816632 2.12216 1.16377 1.63583 1.64206C1.15797 2.11541 0.811855 2.69913 0.631046 3.33869C0.196708 5.74767 -0.0143237 8.19369 0.000797088 10.6438C-0.0147008 13.0917 0.195813 15.5369 0.631046 17.9489C0.80798 18.5858 1.15281 19.1668 1.63195 19.6362C2.1111 20.1055 2.70777 20.4446 3.36384 20.6241C5.82156 21.2809 15.491 21.2809 15.491 21.2809C19.5471 21.3285 23.6023 21.1198 27.6336 20.656C28.2817 20.4836 28.8764 20.1441 29.3616 19.6694C29.8395 19.2 30.1791 18.6163 30.3496 17.9808C30.7953 15.5727 31.012 13.1257 30.9966 10.6744C31.0301 8.21265 30.8137 5.75408 30.3509 3.33869V3.34002ZM12.4017 15.1965V6.09239L20.4865 10.6451L12.4017 15.1965Z" fill="#7B7976" />
        </svg>
    );
};

export default YouTube;
