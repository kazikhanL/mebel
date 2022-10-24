import type { NextPage } from "next";
import { useEffect, useState } from "react";

import AdminLayout from "@components/admin/AdminLayout";
import FaqItem from "@components/admin/elements/FaqItem";
import IFaq from "@interfaces/IFaq";

const FAQ: NextPage = () => {
    const [error, setError] = useState<boolean>(false);
    const [faq, setFaq] = useState<IFaq[] | null>(null);

    useEffect(() => {
        fetch("http://localhost:7000/faq")
            .then((response) => response.json())
            .then((result) => {
                setFaq(result);
            })
            .catch(() => setError(true));
    }, []);


    // TODO: сделать компонент
    if (error) {
        return <div>ERROR</div>;
    }

    return (
        <AdminLayout>
            <ul>
                {faq?.map((item) => (
                    <li key={item.id} style={{ marginTop: "20px" }}>
                        <FaqItem
                            question={item.question}
                            answer={item.answer}
                            id={item.id}
                        />
                    </li>
                ))}
            </ul>
        </AdminLayout>
    );
};

export default FAQ;
