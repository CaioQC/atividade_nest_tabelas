import { Estudante } from "src/estudante/entities/estudante.entity";
import { Uf } from "src/uf/entities/uf.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cidade {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @ManyToOne(() => Uf, (uf) => uf.cidades, { eager:true })
    uf : Uf

    @OneToMany(() => Estudante, (estudante) => estudante.cidade)
    estudantes: Estudante[]
}
