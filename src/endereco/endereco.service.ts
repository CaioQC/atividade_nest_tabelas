import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Endereco } from './entities/endereco.entity';
import { Repository } from 'typeorm';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { CreateEnderecoDto } from './dto/create-endereco.dto';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
  ) {}

  findAll(){
    return this.enderecoRepository.find();
  }

  findOne(idEndereco: number){
    return this.enderecoRepository.findOneBy({ idEndereco });
  }

  create(dto: CreateEnderecoDto){
    const endereco = this.enderecoRepository.create(dto)
    return this.enderecoRepository.save(endereco);
  }

  async update(idEndereco: number, dto: UpdateEnderecoDto){
    const endereco = await this.enderecoRepository.findOneBy({ idEndereco })
    if(!endereco) return null
    this.enderecoRepository.merge(endereco, dto)
    return this.enderecoRepository.save(endereco);
  }  

  async remove(idEndereco: number) {
    const endereco = await this.enderecoRepository.findOneBy({ idEndereco })
    if(!endereco) return null
    return this.enderecoRepository.remove(endereco);
  }
}
