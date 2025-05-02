import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { EntregadorModule } from './entregador/entregador.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';
import { HistoricoCompraModule } from './historico-compra/historico-compra.module';
import { HistoricoVendaModule } from './historico-venda/historico-venda.module';
import { HistoricoEntregaModule } from './historico-entrega/historico-entrega.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { EnderecoModule } from './endereco/endereco.module';
import { MetodoPagamentoModule } from './metodo-pagamento/metodo-pagamento.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LojaModule } from './loja/loja.module';
import { ItensCarrinhoModule } from './itens_carrinho/itens_carrinho.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "sqlite",
      database : "db.sqlite",
      entities : [__dirname + "/**/*.entity{.js,.ts}"],
      synchronize : true
    }),
    ClienteModule, EntregadorModule, ProdutoModule, PedidoModule, HistoricoCompraModule, HistoricoVendaModule, HistoricoEntregaModule, CarrinhoModule, EnderecoModule, MetodoPagamentoModule, LojaModule, ItensCarrinhoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
