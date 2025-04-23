import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { MetodoPagamento } from 'src/metodo-pagamento/entities/metodo-pagamento.entity';

@Entity()
export class HistoricoCompra {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido)
  pedido: Pedido;

  @ManyToOne(() => MetodoPagamento)
  metodoPagamento: MetodoPagamento;
}
