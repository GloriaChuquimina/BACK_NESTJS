import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { PuntoventaEntity } from './puntoventa.entity/puntoventa.entity';
import { createPuntoVentaDto } from './dto/create-puntoventa-dto';
import { UpdatePuntoVentaDto } from './dto/update-puntopenta-dto';

@Injectable()
export class PuntoventaService {
    constructor(
        @InjectRepository(PuntoventaEntity) 
          private readonly puntoventaRepo: Repository<PuntoventaEntity>)
    {}//Equivalente a @autowired de Spring

    create(dto:createPuntoVentaDto){
        const puntoventa = this.puntoventaRepo.create(dto);
        return this.puntoventaRepo.save(puntoventa);
    }

    findAll(){
        return this.puntoventaRepo.find();
    }

    async findOne(id:number){
        const puntoventa = await this.puntoventaRepo.findOneBy({id});
        if(!puntoventa)throw new NotFoundException('Punto de Venta no encontrado');
            return puntoventa;
    }

    async update(id:number,dto:UpdatePuntoVentaDto){
        await this.findOne(id);//Valida existencia
        await this.puntoventaRepo.update(id,dto);
        return this.findOne(id);
    }

    async remove(id:number){
        const puntoventa = await this.findOne(id);
        return this.puntoventaRepo.remove(puntoventa);
    }


}
