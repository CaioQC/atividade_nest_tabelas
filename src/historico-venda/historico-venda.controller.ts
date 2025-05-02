import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { HistoricoVendaService } from './historico-venda.service';
import { HistoricoVenda } from './entities/historico-venda.entity';
import { UpdateHistoricoVendaDto } from './dto/update-historico-venda.dto';
import { CreateHistoricoVendaDto } from './dto/create-historico-venda.dto';

@Controller('historico-venda')
export class HistoricoVendaController {
  constructor(private readonly service: HistoricoVendaService) {}

  @Get()
  findAll(){
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number){
  return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateHistoricoVendaDto){
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateHistoricoVendaDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
