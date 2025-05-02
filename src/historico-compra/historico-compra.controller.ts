import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { HistoricoCompraService } from './historico-compra.service';
import { HistoricoCompra } from './entities/historico-compra.entity';
import { UpdateHistoricoCompraDto } from './dto/update-historico-compra.dto';
import { CreateHistoricoCompraDto } from './dto/create-historico-compra.dto';

@Controller('historico-compra')
export class HistoricoCompraController {
  constructor(private readonly service: HistoricoCompraService) {}

  @Get()
  findAll(){
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number){
  return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateHistoricoCompraDto){
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateHistoricoCompraDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
