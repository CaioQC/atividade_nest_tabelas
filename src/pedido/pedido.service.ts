import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
  ) {}

  findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find({
      relations: ['cliente', 'produtos'],
    });
  }

  findOne(id: number): Promise<Pedido | null> {
    return this.pedidoRepository.findOne({
      where: { id },
      relations: ['cliente', 'produtos'],
    });
  }

  create(data: Partial<Pedido>): Promise<Pedido> {
    return this.pedidoRepository.save(data);
  }

  update(id: number, data: Partial<Pedido>) {
    return this.pedidoRepository.update(id, data);
  }

  remove(id: number) {
    return this.pedidoRepository.delete(id);
  }
}
