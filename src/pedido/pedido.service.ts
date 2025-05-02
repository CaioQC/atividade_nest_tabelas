import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Carrinho } from 'src/carrinho/entities/carrinho.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Entregador } from 'src/entregador/entities/entregador.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { MetodoPagamento } from 'src/metodo-pagamento/entities/metodo-pagamento.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
    @InjectRepository(Carrinho)
    private carrinhoRepository: Repository<Carrinho>,
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
    @InjectRepository(Entregador)
    private entregadorRepository: Repository<Entregador>,
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
    @InjectRepository(MetodoPagamento)
    private metodoPagamentoRepository: Repository<MetodoPagamento>
  ) {}

  findAll(){
    return this.pedidoRepository.find()
  }

  findOne(idPedido: number){
    return this.pedidoRepository.findOneBy({ idPedido })
  }

  async create(dto: CreatePedidoDto){
    const cliente = await this.clienteRepository.findOneBy({ idCliente: dto.idCliente })
    if(!cliente) return null

    const carrinho = await this.carrinhoRepository.findOneBy({ idCarrinho: dto.idCarrinho })
    if(!carrinho) return null

    const entregador = await this.entregadorRepository.findOneBy({ idEntregador: dto.idEntregador })
    if(!entregador) return null

    const endereco = await this.enderecoRepository.findOneBy({ idEndereco: dto.idEndereco })
    if(!endereco) return null

    const metodoPagamento = await this.metodoPagamentoRepository.findOneBy({ idMetodoPagamento: dto.idMetodoPagamento })
    if(!metodoPagamento) return null

    const pedido = this.pedidoRepository.create({
      ...dto,
      cliente,
      carrinho,
      entregador,
      endereco,
      metodoPagamento
    })

    return this.pedidoRepository.save(pedido);
  }

  async update(idPedido: number, dto: UpdatePedidoDto){
    const pedido = await this.pedidoRepository.findOneBy({ idPedido })
    if(!pedido) return null
    this.pedidoRepository.merge(pedido, dto)
    return this.pedidoRepository.save(pedido)
  }  

  async remove(idPedido: number) {
    const pedido = await this.pedidoRepository.findOneBy({ idPedido })
    if(!pedido) return null
    return this.pedidoRepository.remove(pedido)
  }
}
