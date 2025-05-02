import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEntregadorDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  cpf: string

  @IsNotEmpty()
  @IsNumber()
  telefone: number

  @IsNotEmpty()
  @IsEmail()
  email: string
}
