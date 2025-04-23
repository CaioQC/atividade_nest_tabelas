import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoricoVendaDto } from './create-historico-venda.dto';

export class UpdateHistoricoVendaDto extends PartialType(CreateHistoricoVendaDto) {}
