import { motion, Variants, Transition, AnimatePresence } from "framer-motion";

import styles from "./CatalogList.module.scss";
import CatalogListProps from "./CatalogList.props";
import Card from "@components/cards/Card";

const CatalogList = ({ className = "", cards }: CatalogListProps): JSX.Element => {
    const variants: Variants = {
        initial: { y: 0, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        hidden: { y: 0, x: 0, opacity: 0 },
    };

    const transition: Transition = {
        duration: 0.5,
    };

    return (
        <AnimatePresence>
            <motion.ul className={`${styles.list} ${className}`}>
                {cards.map((info) => (
                    <motion.li
                        key={info.code}
                        layout
                        transition={transition}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="hidden"
                    >
                        <Card info={info} />
                    </motion.li>
                ))}
            </motion.ul>
        </AnimatePresence>
    );
};

export default CatalogList;
