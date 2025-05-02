import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  findAll(){
    return this.produtoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number){
  return this.produtoService.findOne(id); // Agora a função pode retornar `null`
  }

  @Post()
  create(@Body() dto: CreateProdutoDto){
    return this.produtoService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateProdutoDto) {
    return this.produtoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.produtoService.remove(id);
  }
}
