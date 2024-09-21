import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateClienteDto {

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsEmail()
    correo_electronico: string;

    @IsString()
    @IsOptional()
    telefono?: string;

    @IsString()
    @IsOptional()
    direccion?: string;

    @IsString()
    estado_cliente: string;
}
