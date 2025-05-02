import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';

@Entity()
export class MetodoPagamento {
  @PrimaryGeneratedColumn()
  idMetodoPagamento: number;

  @Column()
  tipo: string; // Ex: 'Pix', 'Cartão de Crédito'

  @Column()
  descricao: string;

  @OneToMany(() => Pedido, (pedidos) => pedidos.metodoPagamento)
  pedidos: Pedido[]
}
