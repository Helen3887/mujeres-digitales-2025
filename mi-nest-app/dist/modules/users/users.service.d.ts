import { IUser } from 'src/interfaces';
export declare class UsersService {
    private users;
    findAll(): IUser[];
    findOne(id: number): IUser;
}
