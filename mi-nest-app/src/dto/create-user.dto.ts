import { IsEmail, IsInt, IsNotEmpty, IsOptional, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsInt()
    @Min(0, { message: 'La edad debe ser un número positivo' })
    age?: number;

    @IsNotEmpty()
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    @MaxLength(10, { message: 'La contraseña debe tener como máximo 10 caracteres' })
    password: string;

};