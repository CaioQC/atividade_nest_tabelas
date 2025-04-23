import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoricoEntrega } from './entities/historico-entrega.entity';
import { HistoricoEntregaService } from './historico-entrega.service';
import { HistoricoEntregaController } from './historico-entrega.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HistoricoEntrega])],
  providers: [HistoricoEntregaService],
  controllers: [HistoricoEntregaController],
  exports: [HistoricoEntregaService],
})
export class HistoricoEntregaModule {}
