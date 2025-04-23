import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { Carrinho } from './entities/carrinho.entity';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly service: CarrinhoService) {}

  @Get()
  findAll(): Promise<Carrinho[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Carrinho> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Carrinho>): Promise<Carrinho> {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Carrinho>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
