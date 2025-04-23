import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { Repository } from 'typeorm';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  findOne(id: number): Promise<Produto | null> {
    return this.produtoRepository.findOne({ where: { id } });
  }

  create(data: Partial<Produto>): Promise<Produto> {
    return this.produtoRepository.save(data);
  }

  update(id: number, data: UpdateProdutoDto): Promise<Produto> {
    return this.produtoRepository.save({ id, ...data });
  }  

  remove(id: number) {
    return this.produtoRepository.delete(id);
  }
}
