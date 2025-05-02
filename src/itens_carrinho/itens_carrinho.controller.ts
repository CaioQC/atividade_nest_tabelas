import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItensCarrinhoService } from './itens_carrinho.service';
import { CreateItensCarrinhoDto } from './dto/create-itens_carrinho.dto';
import { UpdateItensCarrinhoDto } from './dto/update-itens_carrinho.dto';

@Controller('itens-carrinho')
export class ItensCarrinhoController {
  constructor(private readonly itensCarrinhoService: ItensCarrinhoService) {}

  @Post()
  create(@Body() createItensCarrinhoDto: CreateItensCarrinhoDto) {
    return this.itensCarrinhoService.create(createItensCarrinhoDto);
  }

  @Get()
  findAll() {
    return this.itensCarrinhoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.itensCarrinhoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateItensCarrinhoDto: UpdateItensCarrinhoDto) {
    return this.itensCarrinhoService.update(id, updateItensCarrinhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.itensCarrinhoService.remove(id);
  }
}
