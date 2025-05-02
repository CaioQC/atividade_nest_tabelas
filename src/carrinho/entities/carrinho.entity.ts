import { Cliente } from 'src/cliente/entities/cliente.entity';
import { ItensCarrinho } from 'src/itens_carrinho/entities/itens_carrinho.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';

@Entity()
export class Carrinho {
  @PrimaryGeneratedColumn()
  idCarrinho: number;

  @OneToOne(() => Cliente, (cliente) => cliente.carrinho)
  @JoinColumn({ name : "idCliente" })
  cliente: Cliente;

  @Column()
  dataAtualizacao: string;

  @OneToMany(() => ItensCarrinho, (itensCarrinho) => itensCarrinho.carrinho)
  itens : ItensCarrinho[]

  @OneToMany(() => Pedido, (pedido) => pedido.carrinho)
  pedidos : Pedido[]
}
