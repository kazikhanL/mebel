import { useEffect, useState } from "react";

import styles from "./AdminLayout.module.scss";
import AdminLayoutProps from "./AdminLayout.props";
import AsidePanel from "../AsidePanel";

const AdminLayout = ({ children }: AdminLayoutProps): JSX.Element => {
    
    return (
        <div className={styles.wrapper}>
            <AsidePanel />
            <div className={styles.window}>
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;
