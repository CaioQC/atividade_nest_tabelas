import { Module } from '@nestjs/common';
import { HistoricoVendaService } from './historico-venda.service';
import { HistoricoVendaController } from './historico-venda.controller';

@Module({
  controllers: [HistoricoVendaController],
  providers: [HistoricoVendaService],
})
export class HistoricoVendaModule {}
