export enum UserRole
{
    basic, admin, sysadmin
}

export interface User
{
    id?: number;
    username: string;
    password: string;
    email: string;
    role: UserRole;
    creation_date: number;
    last_login_date: number;
}
