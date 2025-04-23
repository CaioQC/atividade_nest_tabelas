import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vendedor } from './entities/vendedor.entity';
import { Repository } from 'typeorm';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';

@Injectable()
export class VendedorService {
  constructor(
    @InjectRepository(Vendedor)
    private vendedorRepository: Repository<Vendedor>,
  ) {}

  findAll() {
    return this.vendedorRepository.find({
      relations: ['historicoVendas'],
    });
  }

  findOne(id: number) {
    return this.vendedorRepository.findOne({
      where: { id },
      relations: ['historicoVendas'],
    });
  }

  create(data: Partial<Vendedor>) {
    return this.vendedorRepository.save(data);
  }

  update(id: number, data: UpdateVendedorDto): Promise<Vendedor> {
    return this.vendedorRepository.save({ id, ...data });
  }  

  remove(id: number) {
    return this.vendedorRepository.delete(id);
  }
}
