import Link from "next/link";

import styles from "./Tags.module.scss";
import TagsProps from "./Tags.props";

const Tags = ({ className = "", tags }: TagsProps): JSX.Element => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <p>Похожие теги: </p>
            {tags.map((tag) => (
                <Link key={tag.id} href={tag.url}>
                    <a className={styles.link}>{tag.name}</a>
                </Link>
            ))}
        </div>
    );
};

export default Tags;
