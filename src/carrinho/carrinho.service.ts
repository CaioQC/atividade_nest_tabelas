import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrinho } from './entities/carrinho.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarrinhoService {
  constructor(
    @InjectRepository(Carrinho)
    private repo: Repository<Carrinho>,
  ) {}

  findAll(): Promise<Carrinho[]> {
    return this.repo.find({ relations: ['cliente', 'produto'] });
  }

  findOne(id: number): Promise<Carrinho | null> {
    return this.repo.findOne({ where: { id }, relations: ['cliente', 'produto'] });
  }

  create(data: Partial<Carrinho>): Promise<Carrinho> {
    return this.repo.save(data);
  }

  update(id: number, data: Partial<Carrinho>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
