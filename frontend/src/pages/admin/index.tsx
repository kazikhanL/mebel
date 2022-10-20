import type { NextPage } from "next";

import AdminLayout from "@components/admin/AdminLayout";
import RichField from "@components/admin/elements/RichField";
import Input from "@components/admin/elements/Input";
import FaqItem from "@components/admin/elements/FaqItem";

const Admin: NextPage = () => {

    const content = `
        <h2>Hello World</h2>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    `;

    const updateHandler = (content: string): void => {
        console.log(content);
    };

    return (
        <AdminLayout>
            <FaqItem />
            <br />
            <br />
            <FaqItem />

            {/*             
            <Input placeholder="title" errorMessage="*обязательно" descriptionMessage="введите заголовок" type="text" />
            <RichField content={content} onChange={updateHandler} /> */}

        </AdminLayout>
    );
};

export default Admin;
