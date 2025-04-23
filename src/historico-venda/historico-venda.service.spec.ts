import { Test, TestingModule } from '@nestjs/testing';
import { HistoricoVendaService } from './historico-venda.service';

describe('HistoricoVendaService', () => {
  let service: HistoricoVendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoricoVendaService],
    }).compile();

    service = module.get<HistoricoVendaService>(HistoricoVendaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
