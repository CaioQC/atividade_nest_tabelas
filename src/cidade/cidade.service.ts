import { Injectable } from '@nestjs/common';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { Cidade } from './entities/cidade.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Uf } from 'src/uf/entities/uf.entity';

@Injectable()
export class CidadeService {
  constructor(
    @InjectRepository(Cidade) private readonly repository : Repository<Cidade>,
    @InjectRepository(Uf) private readonly ufRepository: Repository<Uf>
  ){}

  async create(createCidadeDto: CreateCidadeDto) {
    const uf = await this.ufRepository.findOne({
      where: { id: createCidadeDto.ufId }
    })

    if (!uf) {
      throw new Error('UF not found'); // Caso não encontre a UF
    }

    const cidade = this.repository.create({
      nome: createCidadeDto.nome,
      uf
    })

    return this.repository.save(cidade)
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updateCidadeDto: UpdateCidadeDto) {
    const cidade = await this.repository.findOneBy({ id });
    if (!cidade) return null;
    this.repository.merge(cidade, updateCidadeDto);
    return this.repository.save(cidade);
  }

  async remove(id: number) {
    const cidade = await this.repository.findOneBy({ id });
    if (!cidade) return null;
    return this.repository.remove(cidade);
  }
}
