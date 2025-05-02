import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, Column, JoinColumn } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { MetodoPagamento } from 'src/metodo-pagamento/entities/metodo-pagamento.entity';
import { Loja } from 'src/loja/entities/loja.entity';

@Entity()
export class HistoricoVenda {
  @PrimaryGeneratedColumn()
  idHistoricoVenda: number;

  @OneToOne(() => Loja, (loja) => loja.historicoVenda)
  @JoinColumn()
  loja: Loja

  @Column()
  dataVenda: string
}
