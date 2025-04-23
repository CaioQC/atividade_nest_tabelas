import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Endereco } from './entities/endereco.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco)
    private repo: Repository<Endereco>,
  ) {}

  findAll(): Promise<Endereco[]> {
    return this.repo.find({ relations: ['cliente'] });
  }

  findOne(id: number): Promise<Endereco | null> {
    return this.repo.findOne({ where: { id }, relations: ['cliente'] });
  }

  create(data: Partial<Endereco>): Promise<Endereco> {
    return this.repo.save(data);
  }

  update(id: number, data: Partial<Endereco>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
