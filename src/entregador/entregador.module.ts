import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entregador } from './entities/entregador.entity';
import { EntregadorService } from './entregador.service';
import { EntregadorController } from './entregador.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Entregador])],
  providers: [EntregadorService],
  controllers: [EntregadorController],
  exports: [EntregadorService],
})
export class EntregadorModule {}
