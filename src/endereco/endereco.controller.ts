import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { Endereco } from './entities/endereco.entity';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@Controller('enderecos')
export class EnderecoController {
  constructor(private readonly service: EnderecoService) {}

  @Get()
  findAll(){
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number){
  return this.service.findOne(id); // Agora a função pode retornar `null`
  }

  @Post()
  create(@Body() dto: CreateEnderecoDto){
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateEnderecoDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
