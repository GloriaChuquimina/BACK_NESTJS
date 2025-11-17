import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PuntoventaService } from './puntoventa.service';
import { createPuntoVentaDto } from './dto/create-puntoventa-dto';
import { UpdatePuntoVentaDto } from './dto/update-puntopenta-dto';

@Controller('puntoventa')
export class PuntoventaController {
    constructor(private readonly puntoventaService: PuntoventaService){}

    @Post()
    create(@Body() dto: createPuntoVentaDto){
        return this.puntoventaService.create(dto);
    }
    @Get()
    getPuntoVenta(){
        return this.puntoventaService.findAll();
    }
    @Get(':id')
    getPuntoVentaId(@Param('id') id:string){
        return this.puntoventaService.findOne(+id);
    }
    @Put(':id')
    updatePuntoVenta(@Param('id')id:string,@Body() dto:UpdatePuntoVentaDto){
        return this.puntoventaService.update(+id,dto);
    }
    @Delete(':id')
    removePuntoVenta(@Param('id')id: string ){
        return this.puntoventaService.remove(+id);
    }

}
