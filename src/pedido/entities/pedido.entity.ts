import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Carrinho } from 'src/carrinho/entities/carrinho.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { MetodoPagamento } from 'src/metodo-pagamento/entities/metodo-pagamento.entity';
import { Entregador } from 'src/entregador/entities/entregador.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  idPedido: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos)
  cliente: Cliente

  @ManyToOne(() => Carrinho, (carrinho) => carrinho.pedidos)
  carrinho : Carrinho

  @ManyToOne(() => Endereco, (endereco) => endereco.pedidos)
  endereco : Endereco

  @ManyToOne(() => MetodoPagamento, (metodoPagamento) => metodoPagamento.pedidos)
  metodoPagamento: MetodoPagamento

  @ManyToOne(() => Entregador, (entregador) => entregador.pedidos)
  entregador: Entregador

  @Column()
  statusPedido : string
}
