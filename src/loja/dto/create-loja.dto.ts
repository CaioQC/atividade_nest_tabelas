import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLojaDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  cnpj: string;
}