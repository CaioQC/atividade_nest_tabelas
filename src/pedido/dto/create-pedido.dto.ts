import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePedidoDto {
  @IsNotEmpty()
  @IsNumber()
  clienteId: number;

  @IsNotEmpty()
  @IsNumber({}, { each: true })
  produtosIds: number[];
}
