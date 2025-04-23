import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('decimal')
  preco: number;

  @Column()
  descricao: string;

  @OneToMany(() => Pedido, pedido => pedido.produto)
  pedidos: Pedido[];
}
