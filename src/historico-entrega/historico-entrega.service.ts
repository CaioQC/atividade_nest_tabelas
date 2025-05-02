import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoricoEntrega } from './entities/historico-entrega.entity';
import { Repository } from 'typeorm';
import { UpdateHistoricoEntregaDto } from './dto/update-historico-entrega.dto';
import { Entregador } from 'src/entregador/entities/entregador.entity';
import { CreateHistoricoEntregaDto } from './dto/create-historico-entrega.dto';

@Injectable()
export class HistoricoEntregaService {
  constructor(
    @InjectRepository(HistoricoEntrega)
    private historicoEntregaRepository: Repository<HistoricoEntrega>,
    @InjectRepository(Entregador)
    private entregadorRepository: Repository<Entregador>
  ) {}

  findAll(){
    return this.historicoEntregaRepository.find()
  }

  findOne(idHistoricoEntrega: number){
    return this.historicoEntregaRepository.findOneBy({ idHistoricoEntrega })
  }

  async create(dto: CreateHistoricoEntregaDto){
    const entregador = await this.entregadorRepository.findOneBy({ idEntregador: dto.idEntregador })
    if(!entregador) return null

    const historicoEntrega = this.historicoEntregaRepository.create({
      ...dto,
      entregador
    })
    return this.historicoEntregaRepository.save(historicoEntrega);
  }

  async update(idHistoricoEntrega: number, dto: UpdateHistoricoEntregaDto){
    const historicoEntrega = await this.historicoEntregaRepository.findOneBy({ idHistoricoEntrega })
    if(!historicoEntrega) return null
    this.historicoEntregaRepository.merge(historicoEntrega, dto)
    return this.historicoEntregaRepository.save(historicoEntrega)
  }  

  async remove(idHistoricoEntrega: number) {
    const historicoEntrega = await this.historicoEntregaRepository.findOneBy({ idHistoricoEntrega })
    if(!historicoEntrega) return null
    return this.historicoEntregaRepository.remove(historicoEntrega)
  }
}
