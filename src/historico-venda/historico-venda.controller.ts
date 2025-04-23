import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { HistoricoVendaService } from './historico-venda.service';
import { HistoricoVenda } from './entities/historico-venda.entity';

@Controller('historico-venda')
export class HistoricoVendaController {
  constructor(private readonly service: HistoricoVendaService) {}

  @Get()
  findAll(): Promise<HistoricoVenda[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<HistoricoVenda> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<HistoricoVenda>): Promise<HistoricoVenda> {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<HistoricoVenda>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
