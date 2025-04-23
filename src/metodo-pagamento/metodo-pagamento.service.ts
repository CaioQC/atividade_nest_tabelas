import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetodoPagamento } from './entities/metodo-pagamento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MetodoPagamentoService {
  constructor(
    @InjectRepository(MetodoPagamento)
    private repo: Repository<MetodoPagamento>,
  ) {}

  findAll(): Promise<MetodoPagamento[]> {
    return this.repo.find({ relations: ['cliente'] });
  }

  findOne(id: number): Promise<MetodoPagamento | null> {
    return this.repo.findOne({ where: { id }, relations: ['cliente'] });
  }

  create(data: Partial<MetodoPagamento>): Promise<MetodoPagamento> {
    return this.repo.save(data);
  }

  update(id: number, data: Partial<MetodoPagamento>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
