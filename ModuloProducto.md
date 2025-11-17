
## Creando un modulo de cero
### Mòdulo producto

Tener instalado previamente

```
npm install -g @nestjs/cli  
```

Instanciamos el modulo producto

```
nest g module producto
```

Creamos el controlador de producto

```
nest g controller producto
```

Creamos el Service de producto

```
nest g service producto

```

### Validador de campos
```
npm install class-validator class-transformer
```

## producto.entity.ts
```js
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class Producto {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre:string

    @Column()
    sigla:string

    @Column('decimal')
    precio:number
}

```



## Creamos los Dtos para validar los campos

### create-producto.dto.ts
Nos permite validar los datos de entrada para guardar nuevo producto
```js
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductoDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  sigla: string;

  @IsNotEmpty()
  @IsNumber()
  precio: number;
}

```




### update-producto-dto.ts
Editar Producto
```js
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dt';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {}

```

## producto.service.ts
```js
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { CreateProductoDto } from './dto/create-producto.dt';
import { UpdateProductoDto } from './dto/update-producto.dto';

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

```

## producto.controller.ts

```js

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dt';
import { UpdateProductoDto } from './dto/update-producto.dto';


@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  create(@Body() dto: CreateProductoDto) {
    return this.productoService.create(dto);
  }

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductoDto) {
    return this.productoService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoService.remove(+id);
  }
}

```

## Configuraciòn de Mòdule Producto

```ts
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

```
