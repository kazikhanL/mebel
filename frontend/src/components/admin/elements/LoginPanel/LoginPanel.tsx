import { useForm } from "react-hook-form";

import styles from "./LoginPanel.module.scss";
import { SERVER } from "@constants";
import Input from "../Input";
import Buttom from "@components/ui/Button";

type LoginInfo = { login: string, password: string };

const login = (loginInfo: LoginInfo): Promise<Response> => {
    const auth_url = `${SERVER}/authorization/`;

    return fetch(auth_url, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        body: JSON.stringify({ user: loginInfo }),
    });
};


const LoginPanel = (): JSX.Element => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginInfo>({ mode: "onSubmit" });

    const onSubmit = (data): void => {
        console.log(data);
    };

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <Input
                placeholder="login"
                type="text"
                minLength={6}
                maxLength={30}
                {...register("login")}
            />
            <Input
                placeholder="password"
                type="password"
                minLength={6}
                maxLength={255}
                {...register("password")}
            />
            <Buttom color="green" borderType="square">ОТПРАВИТЬ</Buttom>
        </form>
    );
};

export default LoginPanel;
