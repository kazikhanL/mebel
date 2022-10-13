import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

import styles from "./Select.module.scss";
import SelectProps from "./Select.props";
import useToggle from "@hooks/useToggle";
import DownArrowIcon from "@components/icons/DownArrow";

const Select = ({ className = "", defaultOption, options, onChange }: SelectProps): JSX.Element => {
    const [active, toggle] = useToggle();

    const optionsListAnimationTransition: Transition = { duration: 0.3 };
    const optionsListAnimationVarians: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className={`${styles.wrapper} ${className}`} onClick={toggle}>
            <p>
                {defaultOption.label}
                <DownArrowIcon className={`${styles.arrow} ${active ? styles.arrowActive : ""}`} />
            </p>
            <AnimatePresence>
                {active && (
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={styles.optionsList}
                        variants={optionsListAnimationVarians}
                        transition={optionsListAnimationTransition}
                    >
                        {options.map((option) => (
                            <li key={option.value} onClick={onChange.bind(this, option)}>
                                {option.label}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Select;
