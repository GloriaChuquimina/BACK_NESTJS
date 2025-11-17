import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { CreateProductoDto } from './dto/create-producto-dto';
import { UpdateProductoDto } from './dto/update-producto-dto';


@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
  ) {}

  create(dto: CreateProductoDto) {
    const producto = this.productoRepo.create(dto);
    return this.productoRepo.save(producto);
  }

  findAll() {
    return this.productoRepo.find();
  }

  async findOne(id: number) {
    const producto = await this.productoRepo.findOneBy({ id });
    if (!producto) throw new NotFoundException('Producto no encontrado');
    return producto;
  }

  async update(id: number, dto: UpdateProductoDto) {
    await this.findOne(id); // Valida existencia
    await this.productoRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const producto = await this.findOne(id);
    return this.productoRepo.remove(producto);
  }
}