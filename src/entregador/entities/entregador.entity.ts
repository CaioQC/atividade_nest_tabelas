import { HistoricoEntrega } from 'src/historico-entrega/entities/historico-entrega.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Entregador {
  @PrimaryGeneratedColumn()
  idEntregador: number;

  @Column()
  nome: string;

  @Column()
  telefone: number;

  @Column()
  email: string

  @Column()
  cpf: string

  @ManyToOne(() => Pedido, (pedidos) => pedidos.entregador)
  pedidos: Pedido[]

  @OneToOne(() => HistoricoEntrega, (historicoEntrega) => historicoEntrega.entregador)
  historicoEntrega: HistoricoEntrega
}
