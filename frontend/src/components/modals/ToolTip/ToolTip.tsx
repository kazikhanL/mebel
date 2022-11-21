import { AnimatePresence, motion, Transition, Variants } from "framer-motion";

import styles from "./ToolTip.module.scss";
import ToolTipProps from "./ToolTip.props";
import Portal from "../Portal";

const ToolTip = ({ isOpen, closeHandler, children, className = "" }: ToolTipProps): JSX.Element => {
    const transition: Transition = { duration: 0.5 };

    const variants: Variants = {
        initial: { top: -200, opacity: 0 },
        animate: { top: 50, opacity: 1 },
        hidden: { top: 0, opacity: 0 },
    };

    if (isOpen) {
        setTimeout(() => {
            closeHandler();
        }, 1500);
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <Portal>
                    <motion.div
                        variants={variants}
                        transition={transition}
                        className={`${styles.wrapper} ${className}`}
                        initial="initial"
                        animate="animate"
                        exit="hidden"
                    >
                        {children}
                    </motion.div>
                </Portal>
            )}
        </AnimatePresence>
    );
};

export default ToolTip;
