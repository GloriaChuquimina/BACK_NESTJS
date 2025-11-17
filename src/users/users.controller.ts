import {
  Controller,

  Body,
  Get,
  Param,
  Put,
  Delete,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('Usuarios')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  //Guardar un usuario
  @Post()
  @ApiOperation({ summary: 'Crear registro agregar' })
  crearUsuario(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  //Obtener un listado
  @Get()
  @ApiOperation({ summary: 'Listar todos los usuarios' })
  async findAll(): Promise<User[]> {

    const usuarios = await this.userService.findAll();
    return usuarios
  }

  // obtener un registro en especifico
  @Get(':id')
  @ApiOperation({ summary: 'Buscar un usuario por ID' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  // modificar un registro
  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un usuario' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }

  //Eliminar un registro
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un usuario' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.userService.remove(id);
  }


  @ApiOperation({ summary: 'Inicia sesión en el sistema' })
    @Post('login')
  async login(@Body() body: LoginUserDto) {
    return this.userService.login(body.email, body.password);
  }
}
