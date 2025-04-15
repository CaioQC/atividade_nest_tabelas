import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudanteModule } from './estudante/estudante.module';
import { UfModule } from './uf/uf.module';
import { CidadeModule } from './cidade/cidade.module';

@Module({
  imports: [EstudanteModule, UfModule, CidadeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
