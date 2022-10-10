import Link from "next/link";

import styles from "./NewsPaginationLink.module.scss";
import NewsPaginationLinkProps from "./NewsPaginationLink.props";
import RigthArrowIcon from "@components/icons/RigthArrow";
import translateTitle from "@utilities/translateTitle";

const NewsPaginationLink = ({ className = "", direction, info }: NewsPaginationLinkProps): JSX.Element => {
    const { image, title, url } = info;
    const styleClasses = `${className} ${styles[direction]} ${styles.wrapper}`;

    return (
        <div className={styleClasses}>
            <div className={styles.arrowWrapper}>
                <RigthArrowIcon />
            </div>
            <p>{title}</p>
            <img src={image} alt={title} width="100" height="100" />
            <Link href={url ? url : translateTitle(title)}>
                <a>{title}</a>
            </Link>
        </div>
    );
};

export default NewsPaginationLink;
