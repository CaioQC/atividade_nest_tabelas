import { Controller, Get, Post, Param, Put, Delete, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './entities/cliente.entity';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cliente | null> {
  return this.clienteService.findOne(id); // Agora a função pode retornar `null`
  }

  @Post()
  create(@Body() data: Partial<Cliente>) {
    return this.clienteService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Cliente>) {
    return this.clienteService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.clienteService.remove(id);
  }
}
