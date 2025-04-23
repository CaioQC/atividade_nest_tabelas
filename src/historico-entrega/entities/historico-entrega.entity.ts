import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';

@Entity()
export class HistoricoEntrega {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido)
  pedido: Pedido;

  @Column()
  status: string;

  @Column()
  dataEntrega: Date;
}
