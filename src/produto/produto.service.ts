import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { Repository } from 'typeorm';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { Loja } from 'src/loja/entities/loja.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
    @InjectRepository(Loja)
    private lojaRepository: Repository<Loja>
  ) {}

  findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  findOne(idProduto: number){
    return this.produtoRepository.findOneBy({ idProduto });
  }

  async create(dto: CreateProdutoDto){
    const loja = await this.lojaRepository.findOneBy({ idLoja: dto.idLoja })
    if(!loja) return null
    
    const produto = this.produtoRepository.create({
      ...dto,
      loja
    })
    return this.produtoRepository.save(produto);
  }

  async update(idProduto: number, dto: UpdateProdutoDto){
    const produto = await this.produtoRepository.findOneBy({ idProduto })
    if(!produto) return null
    this.produtoRepository.merge(produto, dto)
    return this.produtoRepository.save(produto);
  }  

  async remove(idProduto: number) {
    const produto = await this.produtoRepository.findOneBy({ idProduto })
    if(!produto) return null
    return this.produtoRepository.remove(produto);
  }
}
