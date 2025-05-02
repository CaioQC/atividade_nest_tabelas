import { Injectable } from '@nestjs/common';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Loja } from './entities/loja.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LojaService {
  constructor(
    @InjectRepository(Loja)
    private lojaRepository: Repository<Loja>
  ){}

  create(dto: CreateLojaDto){
    const loja = this.lojaRepository.create(dto)
    return this.lojaRepository.save(loja);
  }

  findAll() {
    return this.lojaRepository.find();
  }

  findOne(idLoja: number) {
    return this.lojaRepository.findOneBy({ idLoja });
  }

  async update(idLoja: number, dto: UpdateLojaDto) {
    const loja = await this.lojaRepository.findOneBy({ idLoja })
    if(!loja) return null
    this.lojaRepository.merge(loja, dto)
    return this.lojaRepository.save(loja);
  }

  async remove(idLoja: number) {
    const loja = await this.lojaRepository.findOneBy({ idLoja })
    if(!loja) return null
    return this.lojaRepository.remove(loja);
  }
}
