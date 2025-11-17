import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Aquí se crea y registra el repositorio
  providers: [UsersService,UserRepository],
  controllers: [UsersController],
  exports: [UsersService], // Opcional, si lo usas fuera de este módulo
})
export class UsersModule {}
