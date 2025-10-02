import { UsersService } from './users.service';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { UpdateUserDTO } from 'src/dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): import("../../interfaces").IUser[];
    findOne(id: string): import("../../interfaces").IUser;
    create(body: CreateUserDTO): import("../../interfaces").IUser;
    update(id: string, body: UpdateUserDTO): import("../../interfaces").IUser;
    remove(id: string): {
        message: string;
    };
}
