import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./AsidePanel.module.scss";
import AsidePanelProps from "./AsidePanel.props";

const AsidePanel = ({ className = "" }: AsidePanelProps): JSX.Element => {
    const router = useRouter();

    const isCurrentLink = (url: string): boolean => router.asPath.includes(url);

    const BASE_URL = "/admin";

    const LINKS = [
        { id: 1, name: "товары", url: `${BASE_URL}/cards` },
        { id: 2, name: "категории", url: `${BASE_URL}/categories` },
        { id: 3, name: "под категории", url: `${BASE_URL}/subCategories` },
        { id: 4, name: "галерея", url: `${BASE_URL}/images` },
        { id: 5, name: "новости", url: `${BASE_URL}/news` },
        { id: 6, name: "FAQ", url: `${BASE_URL}/faq` },
        { id: 7, name: "users", url: `${BASE_URL}/users` },
    ];

    return (
        <nav className={`${styles.wrapper} ${className}`}>
            <ul>
                {LINKS.map(({ id, name, url }) => (
                    <li key={id} className={isCurrentLink(url) ? styles.activeLI : ""}>
                        <Link href={url} prefetch={false}>
                            <a>{name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default AsidePanel;
