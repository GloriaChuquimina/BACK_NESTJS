import { Module } from '@nestjs/common';
import { PuntoventaService } from './puntoventa.service';
import { PuntoventaController } from './puntoventa.controller';
import { PuntoventaEntity } from './puntoventa.entity/puntoventa.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [TypeOrmModule.forFeature([PuntoventaEntity])],
  providers: [PuntoventaService],
  controllers: [PuntoventaController]
})
export class PuntoventaModule {}
