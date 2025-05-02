import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { EntregadorService } from './entregador.service';
import { Entregador } from './entities/entregador.entity';
import { CreateEntregadorDto } from './dto/create-entregador.dto';
import { UpdateEntregadorDto } from './dto/update-entregador.dto';

@Controller('entregadores')
export class EntregadorController {
  constructor(private readonly entregadorService: EntregadorService) {}

  @Get()
  findAll() {
    return this.entregadorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number){
  return this.entregadorService.findOne(id); // Agora a função pode retornar `null`
  }

  @Post()
  create(@Body() dto: CreateEntregadorDto) {
    return this.entregadorService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateEntregadorDto) {
    return this.entregadorService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.entregadorService.remove(id);
  }
}
