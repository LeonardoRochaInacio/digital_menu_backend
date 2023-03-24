export interface User
{
    id?: number;
    username: string;
    password: string;
    email: string;
    role: string;
    creation_date: number;
    last_login_date: number;
}
