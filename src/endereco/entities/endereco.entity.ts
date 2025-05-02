import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  idEndereco: number;

  @Column()
  rua: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @OneToMany(() => Pedido, (pedido) => pedido.endereco)
  pedidos : Pedido[]
}
