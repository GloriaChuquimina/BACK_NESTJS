import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { UsersModule } from './users/users.module';
import { ProductoModule } from './producto/producto.module';
import { PuntoventaModule } from './puntoventa/puntoventa.module';

@Module({
  imports: [
    // Servir la carpeta de imágenes
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'imagenes'), // carpeta raíz del proyecto
      serveRoot: '/imagenes', // URL prefix
      exclude: ['*.*'], // evita buscar index.html
    }),
    // Conexión a la base de datos
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'aplicacion',
      autoLoadEntities: true,
      synchronize: false,
    }),

    // Módulos de la aplicación
    UsersModule,
    ProductoModule,
    PuntoventaModule,
  ],
})
export class AppModule {} // <-- export obligatorio
