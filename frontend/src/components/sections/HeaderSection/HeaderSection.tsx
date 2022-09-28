import styles from "./HeaderSection.module.scss";
import HeaderSectionProps from "./HeaderSection.props";

import { PHONE } from "@constants";
import cleanPhone from "@utilities/cleanPhone";
import Logo from "@components/ui/Logo";
import BurgerMenuButton from "@components/ui/BurgerMenuButton";
import SearchPanel from "@components/ui/SearchPanel";
import CartPanel from "@components/ui/CartPanel";

const HeaderSection = ({ className = "" }: HeaderSectionProps): JSX.Element => {
    return (
        <header className={`${styles.section} ${className}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Logo className={styles.logo} />
                    <div className={styles.emptyForFlex} />
                    <BurgerMenuButton className={styles.burger} />
                    <SearchPanel className={styles.search} />
                    <CartPanel className={styles.cart} />
                    <a className={styles.phone} href={`tel:${cleanPhone(PHONE)}`}>{PHONE}</a>
                </div>
            </div>
        </header>
    );
};

export default HeaderSection;
