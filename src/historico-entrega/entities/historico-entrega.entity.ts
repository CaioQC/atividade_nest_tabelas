import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, Column } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Entregador } from 'src/entregador/entities/entregador.entity';

@Entity()
export class HistoricoEntrega {
  @PrimaryGeneratedColumn()
  idHistoricoEntrega: number;

  @OneToOne(() => Entregador, (entregador) => entregador.historicoEntrega)
  @JoinColumn()
  entregador: Entregador

  @Column()
  dataEntrega: Date;
}
