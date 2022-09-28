import parse from "html-react-parser";
import { motion, Transition, Variants } from "framer-motion";

import styles from "./FaqItem.module.scss";
import FaqItemProps from "./FaqItem.props";

const FaqItem = ({ active, info, className = "" }: FaqItemProps): JSX.Element => {
    const styleClasses = `${styles.accordion} ${className} ${active ? styles.active : ""}`;

    const transition: Transition = { duration: 0.5 };

    const variants: Variants = {
        hidden: { height: 0 },
        visible: { height: "auto" },
    };

    const { question, answer } = info;

    return (
        <article className={styleClasses}>
            <header>
                <h3 className={styles.title}>{question}</h3>
                <div className={styles.icon} />
            </header>
            <motion.div
                initial={active ? "visible" : "hidden"}
                animate={active ? "visible" : "hidden"}
                variants={variants}
                transition={transition}
                className={styles.answer}
            >
                {parse(answer)}
            </motion.div>
        </article>
    );
};

export default FaqItem;
