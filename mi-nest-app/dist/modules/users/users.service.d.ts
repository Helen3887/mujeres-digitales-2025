import { IUser } from 'src/interfaces';
export declare class UsersService {
    private users;
    findAll(): IUser[];
    findOne(id: number): IUser;
    create(user: Omit<IUser, 'id'>): IUser;
    update(id: number, newUser: Omit<IUser, 'id'>): IUser;
    remove(id: number): {
        message: string;
    };
}
