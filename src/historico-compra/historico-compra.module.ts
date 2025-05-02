import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoricoCompra } from './entities/historico-compra.entity';
import { HistoricoCompraService } from './historico-compra.service';
import { HistoricoCompraController } from './historico-compra.controller';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistoricoCompra, Cliente])],
  providers: [HistoricoCompraService],
  controllers: [HistoricoCompraController],
  exports: [HistoricoCompraService],
})
export class HistoricoCompraModule {}
