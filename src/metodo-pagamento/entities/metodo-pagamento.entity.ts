import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Entity()
export class MetodoPagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string; // Ex: 'Pix', 'Cartão de Crédito'

  @Column()
  descricao: string;

  @ManyToOne(() => Cliente, cliente => cliente.metodosPagamento)
  cliente: Cliente;
}
