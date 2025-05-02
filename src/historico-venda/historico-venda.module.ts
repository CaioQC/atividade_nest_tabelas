import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoricoVenda } from './entities/historico-venda.entity';
import { HistoricoVendaService } from './historico-venda.service';
import { HistoricoVendaController } from './historico-venda.controller';
import { Loja } from 'src/loja/entities/loja.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistoricoVenda, Loja])],
  providers: [HistoricoVendaService],
  controllers: [HistoricoVendaController],
  exports: [HistoricoVendaService],
})
export class HistoricoVendaModule {}
