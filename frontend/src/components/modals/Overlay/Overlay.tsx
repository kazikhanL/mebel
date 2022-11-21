import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Overlay.module.scss";
import Portal from "../Portal";
import OverlayProps from "./Overlay.props";

const Overlay = ({ isOpen, children, closeHandler }: OverlayProps): JSX.Element => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <Portal>
                    <div className={styles.container}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className={styles.overlay}
                            onClick={closeHandler}
                        />
                        {children}
                    </div>
                </Portal>
            )}
        </AnimatePresence>
    );
};

export default Overlay;
