import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { HistoricoVenda } from 'src/historico-compra/entities/historico-compra.entity';

@Entity()
export class Vendedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @OneToMany(() => HistoricoVenda, historico => historico.vendedor)
  historicoVendas: HistoricoVenda[];
}
