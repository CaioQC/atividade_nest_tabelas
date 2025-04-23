import { Test, TestingModule } from '@nestjs/testing';
import { HistoricoVendaController } from './historico-venda.controller';
import { HistoricoVendaService } from './historico-venda.service';

describe('HistoricoVendaController', () => {
  let controller: HistoricoVendaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoricoVendaController],
      providers: [HistoricoVendaService],
    }).compile();

    controller = module.get<HistoricoVendaController>(HistoricoVendaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
