import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateHistoricoCompraDto {
  @IsNotEmpty()
  @IsNumber()
  pedidoId: number;

  @IsNotEmpty()
  @IsNumber()
  metodoPagamentoId: number;

  @IsNotEmpty()
  @IsDateString()
  dataCompra: string;
}
