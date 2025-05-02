import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetodoPagamento } from './entities/metodo-pagamento.entity';
import { Repository } from 'typeorm';
import { UpdateMetodoPagamentoDto } from './dto/update-metodo-pagamento.dto';
import { CreateMetodoPagamentoDto } from './dto/create-metodo-pagamento.dto';

@Injectable()
export class MetodoPagamentoService {
  constructor(
    @InjectRepository(MetodoPagamento)
    private metodoPagamentoRepository: Repository<MetodoPagamento>,
  ) {}

  findAll(){
    return this.metodoPagamentoRepository.find();
  }

  findOne(idMetodoPagamento: number){
    return this.metodoPagamentoRepository.findOneBy({ idMetodoPagamento });
  }

  create(dto: CreateMetodoPagamentoDto){
    const metodoPagamento = this.metodoPagamentoRepository.create(dto)
    return this.metodoPagamentoRepository.save(metodoPagamento);
  }

  async update(idMetodoPagamento: number, dto: UpdateMetodoPagamentoDto){
    const metodoPagamento = await this.metodoPagamentoRepository.findOneBy({ idMetodoPagamento })
    if(!metodoPagamento) return null
    this.metodoPagamentoRepository.merge(metodoPagamento, dto)
    return this.metodoPagamentoRepository.save(metodoPagamento);
  }  

  async remove(idMetodoPagamento: number) {
    const metodoPagamento = await this.metodoPagamentoRepository.findOneBy({ idMetodoPagamento })
    if(!metodoPagamento) return null
    return this.metodoPagamentoRepository.remove(metodoPagamento);
  }
}
