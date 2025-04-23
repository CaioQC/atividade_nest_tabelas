import { Test, TestingModule } from '@nestjs/testing';
import { HistoricoEntregaController } from './historico-entrega.controller';
import { HistoricoEntregaService } from './historico-entrega.service';

describe('HistoricoEntregaController', () => {
  let controller: HistoricoEntregaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoricoEntregaController],
      providers: [HistoricoEntregaService],
    }).compile();

    controller = module.get<HistoricoEntregaController>(HistoricoEntregaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
