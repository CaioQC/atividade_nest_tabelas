import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoricoVenda } from './entities/historico-venda.entity';
import { HistoricoVendaService } from './historico-venda.service';
import { HistoricoVendaController } from './historico-venda.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HistoricoVenda])],
  providers: [HistoricoVendaService],
  controllers: [HistoricoVendaController],
  exports: [HistoricoVendaService],
})
export class HistoricoVendaModule {}
