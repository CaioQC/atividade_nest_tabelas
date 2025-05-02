import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Carrinho } from 'src/carrinho/entities/carrinho.entity';
import { HistoricoCompra } from 'src/historico-compra/entities/historico-compra.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  idCliente: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  telefone: number;

  @Column()
  cpf : string;

  @OneToOne(() => Carrinho, (carrinho) => carrinho.cliente)
  carrinho : Carrinho

  @OneToMany(() => Pedido, (pedido) => pedido.cliente)
  pedidos : Pedido[]

  @OneToOne(() => HistoricoCompra, (historicoCompra) => historicoCompra.cliente)
  historicoCompra : HistoricoCompra
}
