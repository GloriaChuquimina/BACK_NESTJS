import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  // 🔧 Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Documentación API')
    .setDescription('API desarrollada con NestJS y Swagger')
    .setVersion('1.0')
    .addTag('api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // http://localhost:3000/api-docs

  // 🔧 Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:9090', // Reemplaza con la URL de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(3000);
  console.log(`🚀 La aplicación está corriendo en: http://localhost:3000`);
  console.log(`📄 Swagger disponible en: http://localhost:3000/api-docs`);
}

bootstrap();
