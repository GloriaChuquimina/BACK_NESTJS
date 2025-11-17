
# Instalación y de dependencias y configuraciones

## 🔄 1. Actualización del sistema
Instalar 
```sh
    npm install -g @nestjs/cli
    npm install @nestjs/typeorm typeorm pg

    npm install typeorm ts-node @nestjs/config -D

    npm install @nestjs/platform-express


```

Creamos la carpeta src y dentro el archivo app.module.ts

```ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nestjs',
      autoLoadEntities: true,
      synchronize: true, // Solo para desarrollo
    }),
  ],
})
export class AppModule {}
```

### Creamos nuestro primer modulo

```bash
nest generate module users
nest generate service users
nest generate controller users
```

```
npm run build
npm run start
```



