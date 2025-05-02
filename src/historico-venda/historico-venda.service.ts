import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoricoVenda } from './entities/historico-venda.entity';
import { Repository } from 'typeorm';
import { UpdateHistoricoVendaDto } from './dto/update-historico-venda.dto';
import { Loja } from 'src/loja/entities/loja.entity';
import { CreateHistoricoVendaDto } from './dto/create-historico-venda.dto';

@Injectable()
export class HistoricoVendaService {
  constructor(
    @InjectRepository(HistoricoVenda)
    private historicoVendaRepository: Repository<HistoricoVenda>,
    @InjectRepository(Loja)
    private lojaRepository: Repository<Loja>
  ) {}

  findAll(){
    return this.historicoVendaRepository.find()
  }

  findOne(idHistoricoVenda: number){
    return this.historicoVendaRepository.findOneBy({ idHistoricoVenda })
  }

  async create(dto: CreateHistoricoVendaDto){
    const loja = await this.lojaRepository.findOneBy({ idLoja: dto.idLoja })
    if(!loja) return null
    const historicoVenda = this.historicoVendaRepository.create({
      ...dto,
      loja
    })
    return this.historicoVendaRepository.save(historicoVenda)
  }

  async update(idHistoricoVenda: number, dto: UpdateHistoricoVendaDto){
    const historicoVenda = await this.historicoVendaRepository.findOneBy({ idHistoricoVenda })
    if(!historicoVenda) return null
    this.historicoVendaRepository.merge(historicoVenda, dto)
    return this.historicoVendaRepository.save(historicoVenda)
  }  

  async remove(idHistoricoVenda: number) {
    const historicoVenda = await this.historicoVendaRepository.findOneBy({ idHistoricoVenda })
    if(!historicoVenda) return null
    return this.historicoVendaRepository.remove(historicoVenda)
  }
}
