import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoricoEntrega } from './entities/historico-entrega.entity';
import { HistoricoEntregaService } from './historico-entrega.service';
import { HistoricoEntregaController } from './historico-entrega.controller';
import { Entregador } from 'src/entregador/entities/entregador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistoricoEntrega, Entregador])],
  providers: [HistoricoEntregaService],
  controllers: [HistoricoEntregaController],
  exports: [HistoricoEntregaService],
})
export class HistoricoEntregaModule {}
