import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoricoCompra } from './entities/historico-compra.entity';
import { HistoricoCompraService } from './historico-compra.service';
import { HistoricoCompraController } from './historico-compra.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HistoricoCompra])],
  providers: [HistoricoCompraService],
  controllers: [HistoricoCompraController],
  exports: [HistoricoCompraService],
})
export class HistoricoCompraModule {}
