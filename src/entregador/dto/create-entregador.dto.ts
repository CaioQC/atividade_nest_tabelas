import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEntregadorDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  veiculo: string;
}
