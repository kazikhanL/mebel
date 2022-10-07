import { User, ClientUser } from "./../types/users";

export const prepareUsers = (array: User[]): ClientUser[] => {
    const users: ClientUser[] = array.map((user) => {
        return {
            id: user.id,
            login: user.login,
            role: user.role,
        };
    });

    return users;
};
