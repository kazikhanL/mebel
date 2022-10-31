import { useForm } from "react-hook-form";

import styles from "./LoginPanel.module.scss";
import { SERVER } from "@constants";
import Input from "../Input";
import Buttom from "@components/ui/Button";
import { useAppDispatch } from "@hooks/store";
import { updateToken } from "@store/userSlice";

type LoginInfo = { login: string, password: string };

const login = (loginInfo: LoginInfo): Promise<Response> => {
    const authUrl = `${SERVER}/authorization`;

    const data = {
        user: {
            login: loginInfo.login,
            password: loginInfo.password,
        },
    };

    return fetch(authUrl, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        body: JSON.stringify(data),
    });
};


const LoginPanel = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginInfo>({ mode: "onSubmit" });

    const onSubmit = (data: LoginInfo): void => {
        console.log(data);

        login(data)
            .then(response => response.json())
            .then(result => {
                dispatch(updateToken(result.token));
            })
            .catch(() => {
                dispatch(updateToken(null));
            });
    };

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <Input
                placeholder="login"
                type="text"
                minLength={6}
                maxLength={30}
                {...register("login")}
                errorMessage={errors.login?.message}
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
