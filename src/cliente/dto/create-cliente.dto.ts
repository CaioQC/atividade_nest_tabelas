import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  telefone: number;

  @IsNotEmpty()
  @IsString()
  cpf: string;
}