import type { NextPage } from "next";

import AdminLayout from "@components/admin/AdminLayout";
import RichField from "@components/admin/elements/RichField";

const FAQ: NextPage = () => {
    return (
        <AdminLayout>
            <RichField />
        </AdminLayout>
    );
};

export default FAQ;
