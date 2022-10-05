import { useEffect, useState } from "react";

import styles from "./ContactsSection.module.scss";
import ContactsBlock from "@components/elements/ContactsBlock";

const ContactsSection = (): JSX.Element => {
    const [mapVisible, setMapVisible] = useState<boolean>(false);

    useEffect(() => setMapVisible(true), []);

    return (
        <section className={`container ${styles.section}`}>
            <h2>Контакты</h2>
            <div className={styles.wrapper}>
                <ContactsBlock />
                <div className={styles.mapWrapper}>
                    {mapVisible ? (
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A37a07e51ca0712f5125b4818d2e863a884bdeda5acdf6ec76a66db67dac70552&amp;source=constructor"
                            width="100%"
                            height="405"
                            frameBorder="0"
                        />
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default ContactsSection;
