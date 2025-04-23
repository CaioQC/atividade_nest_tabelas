import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { HistoricoCompraService } from './historico-compra.service';
import { HistoricoCompra } from './entities/historico-compra.entity';
import { UpdateHistoricoCompraDto } from './dto/update-historico-compra.dto';

@Controller('historico-compra')
export class HistoricoCompraController {
  constructor(private readonly service: HistoricoCompraService) {}

  @Get()
  findAll(): Promise<HistoricoCompra[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<HistoricoCompra | null> {
  return this.service.findOne(id); // Agora a função pode retornar `null`
  }

  @Post()
  create(@Body() data: Partial<HistoricoCompra>): Promise<HistoricoCompra> {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateHistoricoCompraDto) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
