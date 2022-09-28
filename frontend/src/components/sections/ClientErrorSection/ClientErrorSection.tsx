import styles from "./ClientErrorSection.module.scss";

import ButtonLink from "@components/ui/ButtonLink";

const ClientErrorSection = (): JSX.Element => {
    return (
        <section className={`container ${styles.section}`}>
            <picture>
                <source srcSet="/images/error.webp" type="image/webp" />
                <img src="/images/error.jpg" alt="error image" width="753" height="421" />
            </picture>
            <h1>{"Страница не найдена :("}</h1>
            <p>Страница в ремонте или не существует, вы можете вернуться на главную</p>
            <ButtonLink href="/">Вернуться на главную</ButtonLink>
            <p className={styles.background}>404</p>
        </section>
    );
};

export default ClientErrorSection;
