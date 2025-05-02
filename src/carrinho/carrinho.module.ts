import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrinho } from './entities/carrinho.entity';
import { CarrinhoService } from './carrinho.service';
import { CarrinhoController } from './carrinho.controller';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carrinho, Cliente])],
  providers: [CarrinhoService],
  controllers: [CarrinhoController],
  exports: [CarrinhoService],
})
export class CarrinhoModule {}
