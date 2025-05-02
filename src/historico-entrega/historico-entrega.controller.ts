import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { HistoricoEntregaService } from './historico-entrega.service';
import { HistoricoEntrega } from './entities/historico-entrega.entity';
import { UpdateHistoricoEntregaDto } from './dto/update-historico-entrega.dto';
import { CreateHistoricoEntregaDto } from './dto/create-historico-entrega.dto';

@Controller('historico-entrega')
export class HistoricoEntregaController {
  constructor(private readonly service: HistoricoEntregaService) {}

  @Get()
  findAll(){
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number){
  return this.service.findOne(id); // Agora a função pode retornar `null`
  }

  @Post()
  create(@Body() dto: CreateHistoricoEntregaDto){
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateHistoricoEntregaDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
