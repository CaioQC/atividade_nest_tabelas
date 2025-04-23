import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVendedorDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  loja: string;
}
