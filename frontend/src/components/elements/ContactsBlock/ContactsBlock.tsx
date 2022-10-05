import styles from "./ContactsBlock.module.scss";
import cleanPhone from "@utilities/cleanPhone";
import { PHONE, EMAIL, ADDRESS, YOUTUBE } from "@constants";
import PhoneIcon from "@components/icons/contacts/phone";
import EmailIcon from "@components/icons/contacts/email";
import AddressIcon from "@components/icons/contacts/address";
import YouTubeIcon from "@components/icons/YouTube";

const ContactsBlock = (): JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <a href={`tel:${cleanPhone(PHONE)}`}>
                <PhoneIcon />
                <span>{PHONE}</span>
            </a>
            <a href={`mailto:${EMAIL}`}>
                <EmailIcon />
                <span>{EMAIL}</span>
            </a>
            <a href="https://yandex.ru/maps/?um=constructor%3A37a07e51ca0712f5125b4818d2e863a884bdeda5acdf6ec76a66db67dac70552&source=constructorLink">
                <AddressIcon />
                <span>{ADDRESS}</span>
            </a>
            <a href={YOUTUBE}>
                <YouTubeIcon />
            </a>
        </div>
    );
};

export default ContactsBlock;
