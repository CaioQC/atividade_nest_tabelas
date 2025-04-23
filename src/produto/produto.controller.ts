import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './entities/produto.entity';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Produto | null> {
  return this.produtoService.findOne(id); // Agora a função pode retornar `null`
  }

  @Post()
  create(@Body() data: Partial<Produto>): Promise<Produto> {
    return this.produtoService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Produto>) {
    return this.produtoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.produtoService.remove(id);
  }
}
