import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinColumn } from 'typeorm';
import { Loja } from 'src/loja/entities/loja.entity';
import { Carrinho } from 'src/carrinho/entities/carrinho.entity';
import { ItensCarrinho } from 'src/itens_carrinho/entities/itens_carrinho.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  idProduto: number;

  @Column()
  nome: string;

  @Column('decimal')
  preco: number;

  @Column()
  descricao: string;

  @Column()
  quantidade: number;

  @ManyToOne(() => Loja, (loja) => loja.produto)
  @JoinColumn({ name: "idLoja" })
  loja : Loja

  @OneToMany(() => ItensCarrinho, (itensCarrinho) => itensCarrinho.produto)
  itens : ItensCarrinho[]
}
