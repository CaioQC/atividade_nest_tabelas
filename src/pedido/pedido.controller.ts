import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './entities/pedido.entity';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { CreatePedidoDto } from './dto/create-pedido.dto';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get()
  findAll(){
    return this.pedidoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number){
  return this.pedidoService.findOne(id); // Agora a função pode retornar `null`
  }

  @Post()
  create(@Body() dto: CreatePedidoDto){
    return this.pedidoService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdatePedidoDto) {
    return this.pedidoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pedidoService.remove(id);
  }
}
