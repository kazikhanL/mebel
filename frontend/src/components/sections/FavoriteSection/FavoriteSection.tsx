import { motion, Variants, Transition, AnimatePresence } from "framer-motion";

import styles from "./FavoriteSection.module.scss";
import Card from "@components/cards/Card";
import { useAppSelector } from "@hooks/store";

const FavoriteSection = (): JSX.Element => {
    const cards = useAppSelector((state) => state.favorites.cards);

    const variants: Variants = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        hidden: { y: -110, x: 0, opacity: 0 },
    };

    const transition: Transition = {
        duration: 0.5,
    };

    return (
        <section className={`container ${styles.section}`}>
            <h1>Избранные</h1>
            <AnimatePresence>
                <motion.ul className={styles.list} layout>
                    <AnimatePresence>
                        {cards.map((card) => (
                            <motion.li
                                layout
                                key={card.id}
                                transition={transition}
                                variants={variants}
                                initial="initial"
                                animate="animate"
                                exit="hidden"
                            >
                                <Card info={card} />
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </motion.ul>
            </AnimatePresence>
        </section>
    );
};

export default FavoriteSection;
