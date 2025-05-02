import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';

export class CreateHistoricoCompraDto {

  @IsNotEmpty()
  @IsNumber()
  idCliente: number;

  @IsNotEmpty()
  @IsDateString()
  dataCompra: string;
}
