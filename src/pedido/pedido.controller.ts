import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './entities/pedido.entity';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get()
  findAll(): Promise<Pedido[]> {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Pedido | null> {
  return this.pedidoService.findOne(id); // Agora a função pode retornar `null`
  }

  @Post()
  create(@Body() data: Partial<Pedido>): Promise<Pedido> {
    return this.pedidoService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdatePedidoDto) {
    return this.pedidoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pedidoService.remove(id);
  }
}
