import { Test, TestingModule } from '@nestjs/testing';
import { HistoricoEntregaService } from './historico-entrega.service';

describe('HistoricoEntregaService', () => {
  let service: HistoricoEntregaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoricoEntregaService],
    }).compile();

    service = module.get<HistoricoEntregaService>(HistoricoEntregaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
