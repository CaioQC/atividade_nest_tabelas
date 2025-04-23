import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateMetodoPagamentoDto {
  @IsNotEmpty()
  @IsString()
  tipo: string;

  @IsNotEmpty()
  @IsNumber()
  clienteId: number;
}
