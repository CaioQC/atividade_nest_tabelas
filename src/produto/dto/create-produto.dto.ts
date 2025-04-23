import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  preco: number;

  @IsNotEmpty()
  @IsNumber()
  estoque: number;
}
