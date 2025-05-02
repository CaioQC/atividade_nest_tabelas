import { Type } from 'class-transformer';
import { IsDate, IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCarrinhoDto {
  // @Type(() => Number)
  @IsNotEmpty()
  @IsNumber()
  idCliente: number;

  @IsNotEmpty()
  @IsDateString()
  dataAtualizacao : string
}
