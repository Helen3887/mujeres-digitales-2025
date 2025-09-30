import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from 'src/interfaces';

@Injectable()
export class UsersService {
    private users: IUser[] = [
        { id: 1, name: 'John Doe', email: "jhon@getMaxListeners.com", age: 30, password: "password123" },
        { id: 2, name: 'Miguel', email: "migue@gmail.com", age: 30, password: "password123" },
    ];
    
    //Me devuelve todos los usuarios
    findAll(): IUser[] {
        return this.users;
    }

    //Me devuelve un usuario por su id
    findOne(id: number): IUser {
        const userFind = this.users.find((user) => user.id === id);
        //Si userFind si existe pero no tiene información
        if (!userFind) throw new NotFoundException('Usuario no encontrado');
        return userFind;
    }
}
