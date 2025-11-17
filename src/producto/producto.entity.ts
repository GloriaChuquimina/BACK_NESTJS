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

    @Column()
    imagen:string
}
