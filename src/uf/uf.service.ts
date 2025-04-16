import { Injectable } from '@nestjs/common';
import { CreateUfDto } from './dto/create-uf.dto';
import { UpdateUfDto } from './dto/update-uf.dto';
import { Repository } from 'typeorm';
import { Uf } from './entities/uf.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UfService {
  constructor(@InjectRepository(Uf) private readonly repository : Repository<Uf>){}

  create(createUfDto: CreateUfDto) {
    const uf = this.repository.create(createUfDto)
    return this.repository.save(uf);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findBy({ id });
  }

  async update(id: number, updateUfDto: UpdateUfDto) {
    const uf = await this.repository.findOneBy({ id })
    if(!uf) return null
    this.repository.merge(uf, updateUfDto)
    return this.repository.save(uf);
  }

  async remove(id: number) {
    const uf = await this.repository.findOneBy({ id })
    if(!uf) return null
    return this.repository.remove(uf);
  }
}
