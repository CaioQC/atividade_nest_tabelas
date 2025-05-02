import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, OneToMany, JoinColumn, Column } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Entity()
export class HistoricoCompra {
  @PrimaryGeneratedColumn()
  idHistoricoCompra: number;

  @OneToOne(() => Cliente, (cliente) => cliente.historicoCompra)
  @JoinColumn()
  cliente: Cliente

  @Column()
  dataCompra: string
}