import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MetodoPagamentoService } from './metodo-pagamento.service';
import { MetodoPagamento } from './entities/metodo-pagamento.entity';

@Controller('metodos-pagamento')
export class MetodoPagamentoController {
  constructor(private readonly service: MetodoPagamentoService) {}

  @Get()
  findAll(): Promise<MetodoPagamento[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<MetodoPagamento> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<MetodoPagamento>): Promise<MetodoPagamento> {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<MetodoPagamento>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
