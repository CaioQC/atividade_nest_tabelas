import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateHistoricoEntregaDto {
  @IsNotEmpty()
  @IsNumber()
  pedidoId: number;

  @IsNotEmpty()
  @IsNumber()
  entregadorId: number;

  @IsNotEmpty()
  @IsDateString()
  dataEntrega: string;
}
