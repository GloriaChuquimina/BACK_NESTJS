import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('puntoventa')
export class PuntoventaEntity {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    nro:number
    
    @Column()
    nombre:string
    
    @Column()
    direccion:string
    
    @Column()
    descripcion:string

}
