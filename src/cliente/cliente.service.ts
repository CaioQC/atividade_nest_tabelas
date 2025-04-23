import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  findAll() {
    return this.clienteRepository.find({
      relations: ['enderecos', 'metodosPagamento', 'pedidos'],
    });
  }

  findOne(id: number) {
    return this.clienteRepository.findOne({
      where: { id },
      relations: ['enderecos', 'metodosPagamento', 'pedidos'],
    });
  }

  create(data: Partial<Cliente>) {
    return this.clienteRepository.save(data);
  }

  update(id: number, data: Partial<Cliente>) {
    return this.clienteRepository.update(id, data);
  }

  remove(id: number) {
    return this.clienteRepository.delete(id);
  }
}
