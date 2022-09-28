import Link from "next/link";

import styles from "./FooterSection.module.scss";
import FooterSectionProps from "./FooterSection.props";

import { PHONE, YOUTUBE, EMAIL } from "@constants";
import cleanPhone from "@utilities/cleanPhone";
import YouTubeIcon from "@components/icons/YouTube";

const FooterSection = ({ className = "", categories }: FooterSectionProps): JSX.Element => {
    const footerStyleClasses = `${styles.section} ${className}`;

    const otherLinks = [
        { title: "Условия аренды", link: "/" },
        { title: "Мероприятия", link: "/" },
        { title: "Контакты", link: "/" },
    ];

    return (
        <footer className={footerStyleClasses}>
            <div className="container">
                <nav>
                    <ul className={styles.mainList}>
                        {categories.map((category) => (
                            <li key={category.id}>
                                <Link href={category.link} prefetch={false}>
                                    <a className={styles.link}>{category.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className={styles.otherList}>
                        {otherLinks.map((category, index) => (
                            <li key={index}>
                                <Link href={category.link} prefetch={false}>
                                    <a className={styles.link}>{category.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className={styles.contacts}>
                        <li className={styles.telItem}>
                            <a href={`tel:${cleanPhone(PHONE)}`}>{PHONE}</a>
                            <p>звонок бесплатный</p>
                        </li>
                        <li>
                            <a href={YOUTUBE}>
                                <YouTubeIcon />
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.bottom}>
                <div className="container">
                    <p>Все права защищены © 2022 «Мебель в аренду»</p>
                    <Link href="/" prefetch={false}>
                        <a className={styles.link}>Политика конфиденциальности</a>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
