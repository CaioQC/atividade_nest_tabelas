import { HistoricoVenda } from "src/historico-venda/entities/historico-venda.entity";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Loja {
    @PrimaryGeneratedColumn()
    idLoja: number;

    @Column()
    nome: string;

    @Column()
    cnpj: string;

    @OneToMany(() => Produto, (produto) => produto.loja)
    produto: Produto

    @OneToOne(() => HistoricoVenda, (historicoVenda) => historicoVenda.loja)
    historicoVenda: HistoricoVenda
}
