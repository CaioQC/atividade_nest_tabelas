import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly service: CarrinhoService) {}

  @Get()
  findAll(){
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number){
  return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateCarrinhoDto){
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateCarrinhoDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
