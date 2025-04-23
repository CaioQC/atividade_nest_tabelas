import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entregador } from './entities/entregador.entity';
import { Repository } from 'typeorm';
import { UpdateEntregadorDto } from './dto/update-entregador.dto';

@Injectable()
export class EntregadorService {
  constructor(
    @InjectRepository(Entregador)
    private entregadorRepository: Repository<Entregador>,
  ) {}

  findAll() {
    return this.entregadorRepository.find({
      relations: ['historicosEntrega'],
    });
  }

  findOne(id: number) {
    return this.entregadorRepository.findOne({
      where: { id },
      relations: ['historicosEntrega'],
    });
  }

  create(data: Partial<Entregador>) {
    return this.entregadorRepository.save(data);
  }

  update(id: number, data: UpdateEntregadorDto): Promise<Entregador> {
    return this.entregadorRepository.save({ id, ...data });
  }  

  remove(id: number) {
    return this.entregadorRepository.delete(id);
  }
}
