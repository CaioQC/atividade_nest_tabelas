import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class CreateCidadeDto {
    @IsString()
    nome: string;

    @Type(() => Number)
    @IsNumber()
    ufId: number
}