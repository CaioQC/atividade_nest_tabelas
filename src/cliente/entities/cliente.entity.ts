import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { MetodoPagamento } from 'src/metodo-pagamento/entities/metodo-pagamento.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @OneToMany(() => Endereco, endereco => endereco.cliente)
  enderecos: Endereco[];

  @OneToMany(() => MetodoPagamento, metodo => metodo.cliente)
  metodosPagamento: MetodoPagamento[];

  @OneToMany(() => Pedido, pedido => pedido.cliente)
  pedidos: Pedido[];
}
