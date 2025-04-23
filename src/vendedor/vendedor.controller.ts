import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { Vendedor } from './entities/vendedor.entity';

@Controller('vendedores')
export class VendedorController {
  constructor(private readonly vendedorService: VendedorService) {}

  @Get()
  findAll() {
    return this.vendedorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Vendedor | null> {
  return this.vendedorService.findOne(id); // Agora a função pode retornar `null`
  }

  @Post()
  create(@Body() data: Partial<Vendedor>) {
    return this.vendedorService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Vendedor>) {
    return this.vendedorService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.vendedorService.remove(id);
  }
}
