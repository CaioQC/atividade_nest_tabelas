import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EntregadorService } from './entregador.service';
import { Entregador } from './entities/entregador.entity';

@Controller('entregadores')
export class EntregadorController {
  constructor(private readonly entregadorService: EntregadorService) {}

  @Get()
  findAll() {
    return this.entregadorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Entregador | null> {
  return this.entregadorService.findOne(id); // Agora a função pode retornar `null`
  }

  @Post()
  create(@Body() data: Partial<Entregador>) {
    return this.entregadorService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Entregador>) {
    return this.entregadorService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.entregadorService.remove(id);
  }
}
