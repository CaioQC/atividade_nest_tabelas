import { Module } from '@nestjs/common';
import { HistoricoEntregaService } from './historico-entrega.service';
import { HistoricoEntregaController } from './historico-entrega.controller';

@Module({
  controllers: [HistoricoEntregaController],
  providers: [HistoricoEntregaService],
})
export class HistoricoEntregaModule {}
