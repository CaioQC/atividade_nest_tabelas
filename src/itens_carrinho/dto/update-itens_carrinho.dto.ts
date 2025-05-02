import { PartialType } from '@nestjs/mapped-types';
import { CreateItensCarrinhoDto } from './create-itens_carrinho.dto';

export class UpdateItensCarrinhoDto extends PartialType(CreateItensCarrinhoDto) {}
