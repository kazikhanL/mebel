import styles from "./HeaderSection.module.scss";
import HeaderSectionProps from "./HeaderSection.props";

import { PHONE } from "@constants";
import cleanPhone from "@utilities/cleanPhone";
import Logo from "@components/ui/Logo";
import BurgerMenuButton from "@components/ui/BurgerMenuButton";
import SearchPanel from "@components/ui/SearchPanel";
import CartPanel from "@components/ui/CartPanel";
import MenuModal from "@components/modals/MenuModal";
import useControllers from "@hooks/useControllers";

const HeaderSection = ({ className = "", categories }: HeaderSectionProps): JSX.Element => {
    const [menuIsOpen, openMenu, closeMenu] = useControllers();

    const toggleMenu = (): void => {
        if (menuIsOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    return (
        <header className={`${styles.section} ${className}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Logo className={styles.logo} />
                    <div className={styles.emptyForFlex} />
                    <BurgerMenuButton active={menuIsOpen} className={styles.burger} onClick={toggleMenu} />
                    <SearchPanel className={styles.search} />
                    <CartPanel className={styles.cart} />
                    <a className={styles.phone} href={`tel:${cleanPhone(PHONE)}`}>{PHONE}</a>
                </div>
            </div>
            <MenuModal categories={categories} isOpen={menuIsOpen} closeHandler={closeMenu} />
        </header>
    );
};

export default HeaderSection;
