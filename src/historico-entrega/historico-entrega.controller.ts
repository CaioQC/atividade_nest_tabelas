import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { HistoricoEntregaService } from './historico-entrega.service';
import { HistoricoEntrega } from './entities/historico-entrega.entity';
import { UpdateHistoricoEntregaDto } from './dto/update-historico-entrega.dto';

@Controller('historico-entrega')
export class HistoricoEntregaController {
  constructor(private readonly service: HistoricoEntregaService) {}

  @Get()
  findAll(): Promise<HistoricoEntrega[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<HistoricoEntrega | null> {
  return this.service.findOne(id); // Agora a função pode retornar `null`
  }

  @Post()
  create(@Body() data: Partial<HistoricoEntrega>): Promise<HistoricoEntrega> {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateHistoricoEntregaDto) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
