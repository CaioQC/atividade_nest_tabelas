import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { MetodoPagamentoService } from './metodo-pagamento.service';
import { MetodoPagamento } from './entities/metodo-pagamento.entity';
import { CreateMetodoPagamentoDto } from './dto/create-metodo-pagamento.dto';
import { UpdateMetodoPagamentoDto } from './dto/update-metodo-pagamento.dto';

@Controller('metodos-pagamento')
export class MetodoPagamentoController {
  constructor(private readonly service: MetodoPagamentoService) {}

  @Get()
  findAll(){
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number){
  return this.service.findOne(id); // Agora a função pode retornar `null`
  }

  @Post()
  create(@Body() dto: CreateMetodoPagamentoDto){
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateMetodoPagamentoDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
