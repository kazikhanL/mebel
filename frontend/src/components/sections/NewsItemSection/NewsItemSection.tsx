import parse from "html-react-parser";
import Link from "next/link";

import styles from "./NewsItemSection.module.scss";
import NewsItemSectionProps from "./NewsItemSection.props";
import NewsPaginationLink from "@components/ui/NewsPaginationLink";

const NewsItemSection = ({ className = "", info, nextLink, prevLink }: NewsItemSectionProps): JSX.Element => {
    const { title, date, content, goods, image } = info;
    const hasGoods = goods.length > 0;

    const styleClasses = `container ${styles.section} ${className}`;

    return (
        <section className={styleClasses}>
            <header>
                <h1>{title}</h1>
                <p>{date}</p>
            </header>
            <div className={styles.wrapper}>
                <div className={styles.descriptionBlock}>
                    <img src={image} alt={title} width="463" height="266" className={styles.image} />
                    <p className={styles.descrTitle}>Описание</p>
                    {parse(content)}
                </div>
                {hasGoods ? (
                    <div className={styles.links}>
                        <p className={styles.descrTitle}>Что было на мероприятии</p>
                        {goods.map((item) => (
                            <Link key={item.id} href={item.url} prefetch={false}>
                                <a>{item.name}</a>
                            </Link>
                        ))}
                    </div>
                ) : null}
            </div>
            <footer>
                {prevLink ? <NewsPaginationLink direction="left" info={prevLink} /> : null}
                {nextLink ? <NewsPaginationLink direction="right" info={nextLink} /> : null}
            </footer>
        </section>
    );
};

export default NewsItemSection;
