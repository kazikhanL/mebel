import IconProps from "./IconProps";

const Heart = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg 
            width="24" 
            height="23" 
            viewBox="0 0 24 23" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M17.5 0.916992C16.3739 0.934507 15.2724 1.24885 14.3067 1.82826C13.341 2.40768 12.5453 3.23166 12 4.21699C11.4546 3.23166 10.6589 2.40768 9.6932 1.82826C8.7275 1.24885 7.62601 0.934507 6.49996 0.916992C4.7049 0.994983 3.01366 1.78025 1.79574 3.10122C0.577818 4.4222 -0.0677922 6.17152 -4.17093e-05 7.96699C-4.17093e-05 12.514 4.78596 17.48 8.79996 20.847C9.69618 21.6001 10.8293 22.013 12 22.013C13.1706 22.013 14.3037 21.6001 15.2 20.847C19.214 17.48 24 12.514 24 7.96699C24.0677 6.17152 23.4221 4.4222 22.2042 3.10122C20.9863 1.78025 19.295 0.994983 17.5 0.916992ZM13.915 19.317C13.3789 19.7684 12.7007 20.0159 12 20.0159C11.2992 20.0159 10.621 19.7684 10.085 19.317C4.94696 15.006 1.99996 10.87 1.99996 7.96699C1.9316 6.70171 2.36632 5.46072 3.20932 4.51469C4.05232 3.56866 5.23519 2.99434 6.49996 2.91699C7.76472 2.99434 8.9476 3.56866 9.7906 4.51469C10.6336 5.46072 11.0683 6.70171 11 7.96699C11 8.23221 11.1053 8.48656 11.2929 8.6741C11.4804 8.86164 11.7347 8.96699 12 8.96699C12.2652 8.96699 12.5195 8.86164 12.7071 8.6741C12.8946 8.48656 13 8.23221 13 7.96699C12.9316 6.70171 13.3663 5.46072 14.2093 4.51469C15.0523 3.56866 16.2352 2.99434 17.5 2.91699C18.7647 2.99434 19.9476 3.56866 20.7906 4.51469C21.6336 5.46072 22.0683 6.70171 22 7.96699C22 10.87 19.053 15.006 13.915 19.313V19.317Z" fill="#B7B4AE" />
        </svg>
    );
};

export default Heart;
