import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCarrinhoDto {
  @IsNotEmpty()
  @IsNumber()
  clienteId: number;

  @IsNotEmpty()
  @IsNumber()
  produtoId: number;

  @IsNotEmpty()
  @IsNumber()
  quantidade: number;
}
