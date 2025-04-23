import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { MetodoPagamento } from 'src/metodo-pagamento/entities/metodo-pagamento.entity';
import { Vendedor } from 'src/vendedor/entities/vendedor.entity';

@Entity()
export class HistoricoVenda {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido)
  pedido: Pedido;

  @ManyToOne(() => MetodoPagamento)
  metodoPagamento: MetodoPagamento;

  @ManyToOne(() => Vendedor, vendedor => vendedor.historicoVendas)
  vendedor: Vendedor;
}
