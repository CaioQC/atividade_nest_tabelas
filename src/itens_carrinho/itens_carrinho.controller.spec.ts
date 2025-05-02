import { Test, TestingModule } from '@nestjs/testing';
import { ItensCarrinhoController } from './itens_carrinho.controller';
import { ItensCarrinhoService } from './itens_carrinho.service';

describe('ItensCarrinhoController', () => {
  let controller: ItensCarrinhoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItensCarrinhoController],
      providers: [ItensCarrinhoService],
    }).compile();

    controller = module.get<ItensCarrinhoController>(ItensCarrinhoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
