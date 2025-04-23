import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { EntregadorModule } from './entregador/entregador.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';
import { HistoricoCompraModule } from './historico-compra/historico-compra.module';
import { HistoricoVendaModule } from './historico-venda/historico-venda.module';
import { HistoricoEntregaModule } from './historico-entrega/historico-entrega.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { EnderecoModule } from './endereco/endereco.module';
import { MetodoPagamentoModule } from './metodo-pagamento/metodo-pagamento.module';
import { Cliente } from './cliente/entities/cliente.entity';
import { Vendedor } from './vendedor/entities/vendedor.entity';
import { Carrinho } from './carrinho/entities/carrinho.entity';
import { Endereco } from './endereco/entities/endereco.entity';
import { Entregador } from './entregador/entities/entregador.entity';
import { HistoricoCompra } from './historico-compra/entities/historico-compra.entity';
import { HistoricoEntrega } from './historico-entrega/entities/historico-entrega.entity';
import { HistoricoVenda } from './historico-venda/entities/historico-venda.entity';
import { MetodoPagamento } from './metodo-pagamento/entities/metodo-pagamento.entity';
import { Pedido } from './pedido/entities/pedido.entity';
import { Produto } from './produto/entities/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "sqlite",
      database : "db.sqlite",
      entities : [Cliente, Vendedor, Carrinho, Endereco, Entregador, HistoricoCompra, HistoricoEntrega,
      HistoricoVenda, MetodoPagamento, Pedido, Produto],
      synchronize : true
    }),
    ClienteModule, VendedorModule, EntregadorModule, ProdutoModule, PedidoModule, HistoricoCompraModule, HistoricoVendaModule, HistoricoEntregaModule, CarrinhoModule, EnderecoModule, MetodoPagamentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
