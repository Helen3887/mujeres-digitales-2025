"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    users = [
        { id: 1, name: 'John Doe', email: "jhon@getMaxListeners.com", age: 30, password: "password123" },
        { id: 2, name: 'Miguel', email: "migue@gmail.com", age: 30, password: "password123" },
    ];
    findAll() {
        return this.users;
    }
    findOne(id) {
        const userFind = this.users.find((user) => user.id === id);
        if (!userFind)
            throw new common_1.NotFoundException('Usuario no encontrado');
        return userFind;
    }
    create(user) {
        const newId = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
        if (user.age && user.age >= 18) {
            const newUser = {
                id: newId,
                ...user,
            };
            this.users.push(newUser);
            return newUser;
        }
        throw new common_1.BadRequestException('El usuario debe ser mayor de edad');
    }
    update(id, newUser) {
        const userIndex = this.findOne(id);
        Object.assign(userIndex, newUser);
        return userIndex;
    }
    remove(id) {
        const userIndex = this.users.findIndex((user) => user.id === id);
        this.users.splice(userIndex, 1);
        return { message: 'Usuario eliminado correctamente' };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map