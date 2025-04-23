import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoricoEntrega } from './entities/historico-entrega.entity';
import { Repository } from 'typeorm';
import { UpdateHistoricoEntregaDto } from './dto/update-historico-entrega.dto';

@Injectable()
export class HistoricoEntregaService {
  constructor(
    @InjectRepository(HistoricoEntrega)
    private repo: Repository<HistoricoEntrega>,
  ) {}

  findAll(): Promise<HistoricoEntrega[]> {
    return this.repo.find({ relations: ['entregador', 'pedido'] });
  }

  findOne(id: number): Promise<HistoricoEntrega | null> {
    return this.repo.findOne({
      where: { id },
      relations: ['entregador', 'pedido'],
    });
  }

  create(data: Partial<HistoricoEntrega>): Promise<HistoricoEntrega> {
    return this.repo.save(data);
  }

  update(id: number, data: UpdateHistoricoEntregaDto): Promise<HistoricoEntrega> {
    return this.repo.save({ id, ...data });
  }  

  remove(id: number) {
    return this.repo.delete(id);
  }
}
