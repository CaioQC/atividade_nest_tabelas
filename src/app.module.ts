import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudanteModule } from './estudante/estudante.module';
import { UfModule } from './uf/uf.module';
import { CidadeModule } from './cidade/cidade.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudante } from './estudante/entities/estudante.entity';
import { Cidade } from './cidade/entities/cidade.entity';
import { Uf } from './uf/entities/uf.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "sqlite",
      database : "db.sqlite",
      entities : [Estudante, Cidade, Uf],
      synchronize : true
    }),
    EstudanteModule, UfModule, CidadeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
