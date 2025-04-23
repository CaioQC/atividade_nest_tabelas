import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoricoEntregaDto } from './create-historico-entrega.dto';

export class UpdateHistoricoEntregaDto extends PartialType(CreateHistoricoEntregaDto) {}
