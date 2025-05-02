import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateHistoricoEntregaDto {
  @IsNotEmpty()
  @IsNumber()
  idEntregador: number;

  @IsNotEmpty()
  @IsDateString()
  dataEntrega: string;
}
