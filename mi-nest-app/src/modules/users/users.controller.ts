import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    //EndPoint que me devuelve un usuario por su id con la ruta localhost:3000/users/1
  //El id siempre llega como string
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id)); //Lo convertimos a número
  }
}
