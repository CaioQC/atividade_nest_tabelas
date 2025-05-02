import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateHistoricoVendaDto {
  @IsNotEmpty()
  @IsNumber()
  idLoja: number;

  @IsNotEmpty()
  @IsDateString()
  dataVenda: string;
}
