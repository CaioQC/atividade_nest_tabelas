import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoricoCompra } from './entities/historico-compra.entity';
import { Repository } from 'typeorm';
import { UpdateHistoricoCompraDto } from './dto/update-historico-compra.dto';

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

  update(id: number, data: UpdateHistoricoCompraDto): Promise<HistoricoCompra> {
    return this.repo.save({ id, ...data });
  }  

  remove(id: number) {
    return this.repo.delete(id);
  }
}
