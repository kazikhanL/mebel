import Link from "next/link";

import styles from "./Logo.module.scss";
import LogoProps from "./Logo.props";

import LogoIcon from "@components/icons/Logo";

const Logo = ({ className = "" }: LogoProps): JSX.Element => {
    const styleClasses = `${styles.wrapper} ${className}`;

    return (
        <div className={styleClasses}>
            <div className={styles.text}>
                <span>Мебель</span>
                <span>в аренду</span>
            </div>
            <LogoIcon />
            <Link href="/" prefetch={false}>
                <a>на главную</a>
            </Link>
        </div>
    );
};

export default Logo;
