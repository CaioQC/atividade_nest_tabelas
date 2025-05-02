import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { Carrinho } from 'src/carrinho/entities/carrinho.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Entregador } from 'src/entregador/entities/entregador.entity';
import { MetodoPagamento } from 'src/metodo-pagamento/entities/metodo-pagamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido, Carrinho, Cliente, Endereco, Entregador, MetodoPagamento])],
  providers: [PedidoService],
  controllers: [PedidoController],
  exports: [PedidoService],
})
export class PedidoModule {}
