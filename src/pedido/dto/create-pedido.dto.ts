import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePedidoDto {
  @IsNotEmpty()
  @IsNumber()
  idCliente: number;

  @IsNotEmpty()
  @IsNumber()
  idCarrinho: number;

  @IsNotEmpty()
  @IsNumber()
  idEndereco : number;

  @IsNotEmpty()
  @IsNumber()
  idMetodoPagamento : number;

  @IsNotEmpty()
  @IsNumber()
  idEntregador : number;
  
  @IsNotEmpty()
  @IsString()
  statusPedido : string;
}
