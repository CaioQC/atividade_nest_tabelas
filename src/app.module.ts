import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudanteModule } from './estudante/estudante.module';
import { UfModule } from './uf/uf.module';
import { CidadeModule } from './cidade/cidade.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudante } from './estudante/entities/estudante.entity';
import { Cidade } from './cidade/entities/cidade.entity';
import { Uf } from './uf/entities/uf.entity';
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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "sqlite",
      database : "db.sqlite",
      entities : [Estudante, Cidade, Uf],
      synchronize : true
    }),
    EstudanteModule, UfModule, CidadeModule, ClienteModule, VendedorModule, EntregadorModule, ProdutoModule, PedidoModule, HistoricoCompraModule, HistoricoVendaModule, HistoricoEntregaModule, CarrinhoModule, EnderecoModule, MetodoPagamentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
