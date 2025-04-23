import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Entregador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: string;
}
