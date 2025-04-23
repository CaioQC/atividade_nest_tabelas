import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateHistoricoVendaDto {
  @IsNotEmpty()
  @IsNumber()
  pedidoId: number;

  @IsNotEmpty()
  @IsNumber()
  metodoPagamentoId: number;

  @IsNotEmpty()
  @IsNumber()
  vendedorId: number;

  @IsNotEmpty()
  @IsDateString()
  dataVenda: string;
}
