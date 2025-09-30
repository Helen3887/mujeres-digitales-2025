import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): import("../../interfaces").IUser[];
    findOne(id: string): import("../../interfaces").IUser;
}
