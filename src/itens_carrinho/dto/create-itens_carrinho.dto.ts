import { Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";


export class CreateItensCarrinhoDto {
    @Type(() => Number)
    @IsNotEmpty()
    @IsNumber()
    idCarrinho : number

    @Type(() => Number)
    @IsNotEmpty()
    @IsNumber()
    idProduto : number

    @IsNotEmpty()
    @IsNumber()
    quantidade: number

    @IsNotEmpty()
    @IsDateString()
    dataAdicao: string
}
