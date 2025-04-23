import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Carrinho {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idCliente: number;

  @Column()
  idProduto: number;

  @Column()
  quantidade: number;
}
