import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoricoCompra } from './entities/historico-compra.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoricoCompraService {
  constructor(
    @InjectRepository(HistoricoCompra)
    private repo: Repository<HistoricoCompra>,
  ) {}

  findAll(): Promise<HistoricoCompra[]> {
    return this.repo.find({ relations: ['pedido', 'metodoPagamento'] });
  }

  findOne(id: number): Promise<HistoricoCompra | null> {
    return this.repo.findOne({ where: { id }, relations: ['pedido', 'metodoPagamento'] });
  }

  create(data: Partial<HistoricoCompra>): Promise<HistoricoCompra> {
    return this.repo.save(data);
  }

  update(id: number, data: Partial<HistoricoCompra>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
