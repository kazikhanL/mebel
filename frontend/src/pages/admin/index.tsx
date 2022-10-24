import type { NextPage } from "next";

import AdminLayout from "@components/admin/AdminLayout";
import LoginPanel from "@components/admin/elements/LoginPanel";


const Admin: NextPage = () => {

    return (
        <AdminLayout>
            <LoginPanel />
        </AdminLayout>
    );
};

export default Admin;
