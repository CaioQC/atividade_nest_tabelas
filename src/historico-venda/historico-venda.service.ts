import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoricoVenda } from './entities/historico-venda.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoricoVendaService {
  constructor(
    @InjectRepository(HistoricoVenda)
    private repo: Repository<HistoricoVenda>,
  ) {}

  findAll(): Promise<HistoricoVenda[]> {
    return this.repo.find({ relations: ['pedido', 'metodoPagamento', 'vendedor'] });
  }

  findOne(id: number): Promise<HistoricoVenda | null> {
    return this.repo.findOne({
      where: { id },
      relations: ['pedido', 'metodoPagamento', 'vendedor'],
    });
  }

  create(data: Partial<HistoricoVenda>): Promise<HistoricoVenda> {
    return this.repo.save(data);
  }

  update(id: number, data: Partial<HistoricoVenda>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
