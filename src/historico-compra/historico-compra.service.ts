import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoricoCompra } from './entities/historico-compra.entity';
import { Repository } from 'typeorm';
import { UpdateHistoricoCompraDto } from './dto/update-historico-compra.dto';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { CreateHistoricoCompraDto } from './dto/create-historico-compra.dto';

@Injectable()
export class HistoricoCompraService {
  constructor(
    @InjectRepository(HistoricoCompra)
    private historicoCompraRepository: Repository<HistoricoCompra>,
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>
  ) {}

  findAll(){
    return this.historicoCompraRepository.find();
  }

  findOne(idHistoricoCompra: number){
    return this.historicoCompraRepository.findOneBy({ idHistoricoCompra });
  }

  async create(dto: CreateHistoricoCompraDto){
    const cliente = await this.clienteRepository.findOneBy({ idCliente: dto.idCliente })
    if(!cliente) return null
    const historicoCompra = this.historicoCompraRepository.create({
      ...dto,
      cliente
    })
    return this.historicoCompraRepository.save(historicoCompra);
  }

  async update(idHistoricoCompra: number, dto: UpdateHistoricoCompraDto){
    const historicoCompra = await this.historicoCompraRepository.findOneBy({ idHistoricoCompra })
    if(!historicoCompra) return null
    this.historicoCompraRepository.merge(historicoCompra, dto)
    return this.historicoCompraRepository.save(historicoCompra)
  }  

  async remove(idHistoricoCompra: number) {
    const historicoCompra = await this.historicoCompraRepository.findOneBy({ idHistoricoCompra })
    if(!historicoCompra) return null
    return this.historicoCompraRepository.remove(historicoCompra)
  }
}
