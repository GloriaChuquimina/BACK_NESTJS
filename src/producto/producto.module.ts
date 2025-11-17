import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])], // Aquí se crea y registra el repositorio
  controllers: [ProductoController],
  providers: [ProductoService],

})
export class ProductoModule { }
