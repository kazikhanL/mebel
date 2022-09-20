import Link from "next/link";

import styles from "./ButtonLink.module.scss";
import ButtonLinkProps from "./ButtonLink.props";

const ButtonLink = ({
    href,
    color = "main",
    borderType = "default",
    className = "",
    children,
}: ButtonLinkProps): JSX.Element => {
    const styleClasses = `${styles.link} ${styles[color]} ${styles[borderType]} ${className}`;

    return (
        <Link href={href} prefetch={false}>
            <a className={styleClasses}>{children}</a>
        </Link>
    );
};

export default ButtonLink;
