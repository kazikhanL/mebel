export interface UserPayload {
    id: number;
}

export interface User {
    id: number;
    login: string;
    password: string;
    role: string;
}

export interface LoginUser {
    login: string;
    password: string;
}

export interface CandidateUser {
    login: string;
    password: string;
    repeatPassword: string;
    role: number;
}

export interface ClientUser {
    id: number;
    login: string;
    role: string;
}
