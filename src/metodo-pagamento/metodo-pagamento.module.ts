import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoPagamento } from './entities/metodo-pagamento.entity';
import { MetodoPagamentoService } from './metodo-pagamento.service';
import { MetodoPagamentoController } from './metodo-pagamento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MetodoPagamento])],
  providers: [MetodoPagamentoService],
  controllers: [MetodoPagamentoController],
  exports: [MetodoPagamentoService],
})
export class MetodoPagamentoModule {}
